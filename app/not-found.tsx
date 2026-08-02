import { Button } from "@/components/ui/button";
import Cursor from "@/components/ui/Cursor";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Cursor />
      <div className="h-screen flex items-center justify-center flex-col text-center font-medium gap-4 text-primary text-xl">
        <h1 className="text-7xl">404</h1>
        <p>Looks like you&apos;ve wandered off the portfolio.</p>
        <p>
          There&apos;s nothing to see here, but you&apos;re welcome to head back
          home.
        </p>
        <Link href="/" className="cursor-none">
          <Button className="flex items-center mt-4 justify-center px-[100px] py-4 gap-2 rounded-full hover:scale-105 transition-all hover:bg-secondary bg-primary text-background cursor-none">
            <ChevronLeft size={20} />
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
