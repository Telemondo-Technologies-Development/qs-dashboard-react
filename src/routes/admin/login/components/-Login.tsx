"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { IconLoader2 } from "@tabler/icons-react";

const usernameTest = "admin";
const passwordTest = "123";

const loginSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.username !== usernameTest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter a valid username",
        path: ["username"],
      });
    }
    if (data.password !== passwordTest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Incorrect password",
        path: ["password"],
      });
    }
  });

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    form.reset();
  }

  return (
    <div className="flex flex-col bg-main_white rounded-lg place-items-center gap-10 px-[120px] pt-[50px] pb-[100px] font-poppins">
      <img src="/kiosk-logo.png" alt="kbqs logo" className="size-[10rem]" />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">ADMIN PANEL</h1>
        <p className="text-center">Login to access your admin account</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col place-items-center gap-10 w-[100%]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-[130%] h-[30px]">
                <FormControl>
                  <Input placeholder="username" {...field} type="username" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-[130%] h-[30px]">
                <FormControl>
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="flex items-center justify-center w-[50%] py-2 bg-main_primary hover:bg-main_primary/90 text-main_white rounded-md "
          >
            {form.formState.isSubmitting ? (
              <IconLoader2 className="animate-spin" size={24} />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
