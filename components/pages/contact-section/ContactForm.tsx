"use client";

import project from "@/appwrite/APIs";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Kindly enter your name"),
  email: z.string().email("Kindly enter your email"),
  phone: z
    .string()
    .regex(/^[+\d][\d\s\-]+$/, "Invalid phone number format")
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 16;
      },
      {
        message: "Phone number must contain between 10 and 16 digits",
      },
    ),
  message: z.string().min(1, "Kindly enter a message"),
});
export type ContactForm = z.infer<typeof contactSchema>;
const ContactForm = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", phone: "" },
  });
  const FormSubmit = async (data: ContactForm) => {
    try {
      await project.writeComments(data);
      console.log("comment added");
      form.reset();
      toast.success("Message sent!", {
        description:
          "I have received your message and shall get back to you soon.",
      });
    } catch (error) {
      console.log("Error", error);
      toast.error("Submission failed", {
        description: "There was a problem sending your message.",
      });
    }
  };
  return (
    <div className="border border-gray-600 bg-gray-800 md:p-10 p-8 rounded-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(FormSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="gap-0">
                <FormLabel className="font-semibold text-lg text-primary cursor-none">
                  Name:
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="border-b-2 outline-none text-secondary cursor-none"
                    {...field}
                    placeholder="e.g: John Doe"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FormLabel className="font-semibold text-lg text-primary cursor-none">
                    Email:
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      className="border-b-2 outline-none text-secondary cursor-none"
                      {...field}
                      placeholder="e.g: john.doe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FormLabel className="font-semibold text-lg text-primary cursor-none">
                    Contact:
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={16}
                      className="border-b-2 outline-none text-secondary cursor-none"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                        field.onChange(value);
                      }}
                      placeholder="e.g: +977-9800000000"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="gap-0">
                <FormLabel className="font-semibold text-lg text-primary cursor-none">
                  Message:
                </FormLabel>
                <FormControl>
                  <textarea
                    className="border-b-2 cursor-none outline-none text-secondary resize-none overflow-hidden w-full leading-relaxed"
                    placeholder="e.g: Glad to meet yaa!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full cursor-none text-background bg-secondary py-6 rounded-full md:text-2xl text-xl font-medium hover:scale-105 transition-all shadow-[0px_0px_20px_10px_rgba(255,223,176,0.2)]">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default ContactForm;
