import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";

const FormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    userName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email format.",
    }),
    department: z
      .string()
      .min(2, { message: "Department must be at least 2 characters." }),
    position: z
      .string()
      .min(2, { message: "Position must be at least 2 characters." }),
    userType: z.enum(["Admin", "Employee"], {
      required_error: "You need to select a notification type.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // corrected path of error
  });

export function AddEmployee() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      department: "",
      position: "",
      userType: "Employee",
    },
  });

  const [isOpen, setIsOpen] = useState(true);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setIsOpen(false); // Close the dialog on successful form submission
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-main_primary text-white w-48 h-8 mr-9 rounded-sm flex flex-row items-center justify-center gap-3"
        >
          <Plus strokeWidth={5} size={15} />
          Add Employee
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[36.540rem] h-svh flex justify-center items-center flex-col">
        <div className="w-full px-10 space-y-6 flex flex-col justify-between">
          <AlertDialogHeader>
            <div className="flex flex-row">
              <Avatar className="rounded-full size-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-5">
                <div className="flex flex-row justify-between">
                  <Button
                    variant="outline"
                    className="bg-main_primary text-white w-auto h-auto w rounded-sm flex flex-row items-center justify-center"
                  >
                    Upload Profile Photo
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-main_primary text-white w-auto h-auto rounded-sm flex flex-row items-center justify-center"
                  >
                    Remove Photo
                  </Button>
                </div>
                <p className="text-sm">
                  Please upload a square image (preferably 200x200 px) in .jpg,
                  .jpeg, .png, .gif, .heic, or .heif format for optimal results.
                </p>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription className="flex flex-col items-center justify-center">
            <Form {...form}>
              <AlertDialogTitle className="flex text-left w-full">
                User Information
              </AlertDialogTitle>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2 w-full justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-3xl"
                            placeholder="First Name"
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
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-3xl"
                            placeholder="Last Name"
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
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-3xl"
                          placeholder="Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-2 justify-between">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            className="rounded-3xl"
                            placeholder="Password"
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
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            className="rounded-3xl"
                            placeholder="Confirm Password"
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
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="rounded-3xl"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full h-0.5 my-3 bg-main_primary opacity-50"></div>
                <AlertDialogTitle className="flex text-left w-full">
                  User Information
                </AlertDialogTitle>
                <div>
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <FormControl>
                            <Input
                              type="department"
                              className="rounded-3xl"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postion</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="rounded-3xl"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 space-y-1 w-full my-2 items-end"
                            >
                              <div>
                                <FormLabel>Postion</FormLabel>
                                <FormItem className="outline outline-1 h-10 flex items-center  rounded-full">
                                  <div className="flex items-center w-full justify-start pl-5 space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Admin" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Admin
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              </div>

                              <div className=" outline outline-1 h-10 flex items-center justify-end  rounded-full">
                                <FormItem className="flex items-center w-full justify-start pl-5 space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="Employee" />
                                  </FormControl>

                                  <FormLabel className="font-normal">
                                    Employee
                                  </FormLabel>
                                </FormItem>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <AlertDialogFooter className="flex justify-end">
                  <AlertDialogCancel onClick={() => setIsOpen(false)}>
                    Cancel
                  </AlertDialogCancel>
                  <Button type="submit">Submit</Button>
                </AlertDialogFooter>
              </form>
            </Form>
          </AlertDialogDescription>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
