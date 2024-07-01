import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { IconLoader2 } from "@tabler/icons-react";
import { useUserManagementStore } from "@/stores/admin/userMgmt";
import { useState } from "react";
import { PasswordInput } from "@/components/ui/password-input";

const formSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "This field is required.",
    }),
    lastName: z.string().min(1, {
      message: "This field is required.",
    }),
    userName: z.string().min(1, {
      message: "This field is required.",
    }),
    password: z
      .string()
      .min(1, {
        message: "This field is required.",
      })
      .superRefine((password, ctx) => {
        if (password.length < 8) {
          ctx.addIssue({
            code: "custom",
            message: "Must be more than 8 characters.",
          });
        }

        if (!/[A-Z]/.test(password)) {
          ctx.addIssue({
            code: "custom",
            message: "Must contain uppercase letter/s.",
          });
        }

        if (!/[a-z]/.test(password)) {
          ctx.addIssue({
            code: "custom",
            message: "Must contain lowercase letter/s.",
          });
        }

        if (!/\d/.test(password)) {
          ctx.addIssue({
            code: "custom",
            message: "Must contain number/s.",
          });
        }

        const specialChars = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
        if (!specialChars.test(password)) {
          ctx.addIssue({
            code: "custom",
            message: "Must contain special character/s.",
          });
        }
      }),
    confirmPassword: z.string().min(1, {
      message: "This field is required.",
    }),
    email: z
      .string()
      .min(1, {
        message: "This field is required.",
      })
      .email({
        message: "Not a valid e-mail address.",
      }),
  })
  .refine((values) => {
    return (
      values.confirmPassword === values.password,
      {
        message: "Passwords does not match.",
        path: ["confirmPassword"],
      }
    );
  });

function onSubmit(values: z.infer<typeof formSchema>) {
  //do stuff
}

type userType = "Admin" | "Employee";

export default function UserActionDialog() {
  const queryClient = useQueryClient();
  const [selectedUserType, setSelectedUserType] =
    useState<userType>("Employee");
  const { openUserActionDialog, toggleUserActionDialog } =
    useUserManagementStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });
  return (
    <AlertDialog open={openUserActionDialog}>
      <AlertDialogContent className="max-w-xl overflow-hidden font-poppins">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col overflow-y-auto"
          >
            <section className="flex flex-col gap-4 p-8 overflow-y-auto max-h-[80vh]">
              <section className="flex items-center gap-6">
                <div className="rounded-full bg-main_primary size-24"></div>
                <div className="flex flex-col justify-between flex-1 gap-2">
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      className="px-5 py-2 font-medium text-white rounded-md bg-main_primary"
                    >
                      Upload Profile Photo
                    </button>
                    <button
                      type="button"
                      className="px-5 py-2 font-medium rounded-md bg-main_secondary text-main_primary"
                    >
                      Remove Photo
                    </button>
                  </div>
                  <p className="text-xs">
                    Please upload a square image &#40;preferably 200x200&#41; px
                    in .jpg, .jpeg, .png, .gif, .heic, or .heif format for
                    optimal results.
                  </p>
                </div>
              </section>
              <section className="flex flex-col gap-2">
                <p className="text-lg font-semibold">User Information</p>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-sm">First Name</FormLabel>
                        <FormControl>
                          <Input
                            maxLength={30}
                            className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Enter First Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-sm">First Name</FormLabel>
                        <FormControl>
                          <Input
                            maxLength={30}
                            className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Enter Last Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm">User Name</FormLabel>
                      <FormControl>
                        <Input
                          maxLength={30}
                          className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                          placeholder="Enter Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-sm">Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            maxLength={30}
                            className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Enter Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-sm">&nbsp;</FormLabel>
                        <FormControl>
                          <PasswordInput
                            maxLength={30}
                            className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Re-type Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-sm">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          maxLength={30}
                          className="text-sm rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                          placeholder="Enter Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <section className="flex flex-col gap-3 py-4 border-y border-main_primary">
                <p className="text-lg font-semibold">Employee Status</p>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">User Type</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedUserType("Admin")}
                      type="button"
                      className={`flex items-center flex-1 gap-2 py-2 text-sm border rounded-full ${selectedUserType === "Admin" ? "bg-main_extra" : ""} border-main_primary`}
                    >
                      <div className="relative grid ml-6 border rounded-full border-main_primary size-3 place-items-center">
                        {selectedUserType === "Admin" && (
                          <div className="bg-main_primary size-[60%] rounded-full"></div>
                        )}
                      </div>
                      <p>Admin</p>
                    </button>
                    <button
                      onClick={() => setSelectedUserType("Employee")}
                      type="button"
                      className={`flex items-center flex-1 gap-2 py-2 text-sm border rounded-full ${selectedUserType === "Employee" ? "bg-main_extra" : ""} border-main_primary`}
                    >
                      <div className="relative grid ml-6 border rounded-full border-main_primary size-3 place-items-center">
                        {selectedUserType === "Employee" && (
                          <div className="bg-main_primary size-[60%] rounded-full"></div>
                        )}
                      </div>
                      <p>Employee</p>
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Remove Employee</p>
                  <p className="text-xs">Permanently delete an account.</p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-3 px-5 py-2 font-semibold rounded-md disabled:bg-slate-400 text-main_primary bg-main_secondary"
                >
                  <div className="w-3 h-[3px] rounded-full bg-main_primary"></div>
                  <p>Delete Account</p>
                </button>
              </section>
            </section>

            <section className="flex items-center justify-center gap-8 py-4 bg-gray-300">
              <button
                onClick={() => toggleUserActionDialog()}
                type="button"
                className="w-1/4 py-2 font-semibold rounded-md disabled:bg-slate-400 text-main_primary bg-main_secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/4 py-2 font-semibold text-white rounded-md disabled:bg-slate-400 bg-main_primary"
              >
                Confirm
              </button>
            </section>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
