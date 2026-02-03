"use client";

import { contactData } from "@/components/data/ContactMeData";
import { Mail } from "lucide-react";
import { cn } from "../../../lib/utils";
import Heading from "../../../shared/Heading";
import { Card, CardTitle } from "../../ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div
      className="bg-background pt-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30, 41, 56, 0.5), transparent 70%), #101E2A",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <Heading title="Get in Touch" />
        <p className="text-secondary/80 px-4">
          Like what you see? Reach out via email to collaborate!
        </p>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 my-18 items-center max-md:space-y-8 max-w-7xl mx-auto w-full">
        <div className="px-4 col-span-3">
          <ContactForm />
        </div>
        <div className="px-4 col-span-2">
          <ContactEmail />
          <Socials />
        </div>
      </div>

      {/* clipping mask */}
      <ClippingMask />
    </div>
  );
};

export default ContactSection;

const ContactEmail = () => {
  return (
    <Card className="flex flex-row space-y-4 rounded-3xl p-4 bg-gray-800 border border-gray-600 gap-4 w-full">
      <span className="flex gap-2 items-center md:text-xl font-medium text-primary">
        <Mail
          className="block md:hidden p-1.5 bg-primary/20 rounded-lg"
          size={30}
        />
        <Mail
          className="hidden md:block p-1.5 bg-primary/20 rounded-lg"
          size={36}
        />
      </span>
      <CardTitle className="space-y-2">
        <p className="font-semibold text-lg text-primary">Email me</p>
        <p className="text-gray-300 text-sm font-normal">
          sun.08deepesh@gmail.com
        </p>
      </CardTitle>
    </Card>
  );
};

const Socials = () => {
  return (
    <div className="grid gap-4 rounded-3xl border border-gray-600 bg-gray-800 p-4 mt-8">
      {/* instagram */}
      {contactData.map((card) => (
        <a key={card.id} href={card.link} target="_blank">
          <Card
            className={cn(
              `text-white p-2 justify-center cursor-none hover:scale-x-103 transition-all gap-2 flex flex-row items-center bg-gradient-to-tr ${card.color} border-none`,
            )}
          >
            <card.icon className="block md:hidden" size={20} />
            <card.icon className="hidden md:block" size={28} />
            <p className="font-semibold md:text-lg text-sm">{card.name}</p>
          </Card>
        </a>
      ))}
    </div>
  );
};

const ClippingMask = () => {
  return (
    <div
      className="relative lg:h-[170px] md:h-[80px] h-[50px] bg-primary z-10"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative bg-primary lg:h-[calc(100vh+170px)] md:h-[calc(100vh+80px)] h-[calc(100vh+50px)] -top-[100vh]">
        <div className="sticky lg:top-[calc(100vh-170px)] md:top-[calc(100vh-80px)] top-[calc(100vh-50px)] lg:h-[170px] md:h-[80px] h-[50px]">
          <p className="lg:text-[120px] md:text-[50px] text-[18px] flex justify-center ml-4 text-center md:pt-0 pt-2 font-bold text-background md:tracking-[50px] tracking-[30px]">
            gracias!
          </p>
        </div>
      </div>
    </div>
  );
};
