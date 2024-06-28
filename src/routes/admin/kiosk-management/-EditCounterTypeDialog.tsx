import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { useKioskManagementStore } from "@/stores/admin/kioskMgmt";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

const formSchema = z.object({
  counterTypeName: z.string().min(1, {
    message: "Category name cannnot be empty.",
  }),
  abbrev: z
    .string()
    .min(1, {
      message: "Ticket Prefix cannot be empty.",
    })
    .max(3, { message: "3 characters max." }),
});

export default function CounterTypeActionDialog() {
  const {
    openCounterTypeActionDialog,
    toggleCounterTypeActionDialog,
    counterTypeActionType,
    editName,
    editAbbrev,
  } = useKioskManagementStore();

  const [name, setName] = useState("");
  const [abbrev, setAbbrev] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      counterTypeName: counterTypeActionType === "edit" ? name : "",
      abbrev: counterTypeActionType === "edit" ? abbrev : "",
    },
  });

  function onSubmitAddCounterType(values: z.infer<typeof formSchema>) {
    toggleCounterTypeActionDialog();
  }

  function onSubmitEditCounterType(values: z.infer<typeof formSchema>) {
    console.log('EDIT COUNTER DONE');
  }

  return (
    <AlertDialog
      open={openCounterTypeActionDialog}
      onOpenChange={() => toggleCounterTypeActionDialog()}
    >
      <AlertDialogContent className="max-w-2xl overflow-hidden sm:rounded-xl font-poppins">
        <Form {...form}>
          <form
            onSubmit={
              counterTypeActionType === "add"
                ? form.handleSubmit(onSubmitAddCounterType)
                : form.handleSubmit(onSubmitEditCounterType)
            }
            className="flex flex-col"
          >
            <section className="flex flex-1 gap-4 px-5 py-6">
              <div className="w-1/2 h-full border border-main_primary rounded-xl"></div>
              <div className="flex flex-col w-1/2 h-full p-4">
                <p className="text-lg font-semibold">Category Info</p>
                <div className="flex-1 py-4">
                  <FormField
                    control={form.control}
                    name="counterTypeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category Name</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Enter name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="abbrev"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ticket Prefix</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full focus-visible:ring-main_primary ring-offset-main_primary focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-1 border-main_primary"
                            placeholder="Enter prefix"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-2 space-y-2 border-t border-main_primary">
                  <p className="text-lg font-semibold">Remove Category</p>
                  <p className="text-xs">Permanently remove the category</p>
                  <button className="flex items-center justify-center w-full gap-3 py-2 font-semibold rounded-md text-main_primary bg-main_secondary">
                    <div className="w-3 h-[4px] rounded-full bg-main_primary"></div>
                    <p>Remove Category</p>
                  </button>
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-8 py-4 bg-gray-300">
              <button
                type="button"
                onClick={() => toggleCounterTypeActionDialog()}
                className="w-1/4 py-2 text-sm rounded-lg text-main_primary bg-main_secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/4 py-2 text-sm text-white rounded-lg bg-main_primary"
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
