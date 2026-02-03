"use client";
import project from "@/lib/appwrite/APIs";
import { ContactSchemaValue, contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useContactForm = () => {
  const form = useForm<ContactSchemaValue>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", phone: "" },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const FormSubmit = async (data: ContactSchemaValue) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };
  return {
    form,
    FormSubmit,
    loading,
  };
};
