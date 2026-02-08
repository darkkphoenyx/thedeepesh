"use client";
import { ArrowLeft, Dot } from "lucide-react";
import { useRouter } from "next/navigation";

export const BreadCrumbs = ({ name }: { name: string }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 group text-gray-400
             transition-all duration-300 ease-out cursor-none
             hover:text-primary hover:scale-[1.03]"
      >
        <div
          className="h-7 w-7 rounded-full border border-gray-300
               flex items-center justify-center
               transition-all duration-300 ease-out
               group-hover:border-primary"
        >
          <ArrowLeft
            size={16}
            className="w-full h-full p-1 rounded-full
                 transition-transform duration-300 ease-out
                 group-hover:-translate-x-1"
          />
        </div>

        <p className="transition-colors duration-300 ease-out">Back</p>
      </button>

      <div className="flex gap-1 items-center">
        <p className="text-gray-400 uppercase font-medium max-md:text-xs">
          portfolio
        </p>
        <Dot className="text-primary/80" />
        <p className="text-primary uppercase font-medium max-md:text-xs">
          {name}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumbs;
