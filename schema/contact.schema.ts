import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Kindly enter your name"),
  email: z.string().email("Kindly enter your email"),
  phone: z
    .union([
      z.literal(""),
      z
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
    ])
    .optional(),
  message: z.string().min(1, "Kindly enter a message"),
});

export type ContactSchemaValue = z.infer<typeof contactSchema>;

export const ContactSchemaDefault: ContactSchemaValue = {
  name: "",
  email: "",
  message: "",
  phone: undefined,
};
