import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const contactForm = useContactForm();
  return (
    <div className="border border-gray-600 bg-gray-800 md:p-10 p-8 rounded-3xl">
      <Form {...contactForm.form}>
        <form
          onSubmit={contactForm.form.handleSubmit(contactForm.FormSubmit)}
          className="space-y-8"
        >
          <FormField
            control={contactForm.form.control}
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
              control={contactForm.form.control}
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
              control={contactForm.form.control}
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
            control={contactForm.form.control}
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
          <Button
            disabled={contactForm.loading}
            className="w-full cursor-none text-background bg-secondary py-6 rounded-full md:text-2xl text-xl font-medium hover:scale-105 transition-all shadow-[0px_0px_20px_10px_rgba(255,223,176,0.2)]"
          >
            {contactForm.loading ? "Submitting" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default ContactForm;
