import { Button } from "@/components/ui/button";
import { lancelotFont } from "@/libs/font/font-helper";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundDefaultPage() {
  return (
    <div className="niwi-blog-profile-container text-[16px] flex flex-col justify-center items-center gap-y-[18px]">
      <p
        className={cn(
          "niwi-logo-text font-bold text-[24px] mt-2",
          lancelotFont.className
        )}
      >
        404 Not Found
      </p>
      <p className="tracking-widest flex flex-row w-full justify-center items-center gap-x-2">
        <Image
          src={"/arthur.png"}
          alt={"Arthur"}
          width={400}
          height={400}
          className="relative top-[-2px]"
        />
        This page could not be found.
      </p>
      <div className="items-center">
        <Link href="/">
          <Button>
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
