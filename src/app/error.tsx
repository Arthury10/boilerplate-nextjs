"use client";

import { useEffect } from "react";
import { lancelotFont } from "@/libs/font/font-helper";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorDefaultPage({ error }: ErrorPageProps) {
  const errMsg = error.message ? error.message : "Something went wrong";

  useEffect(() => {
    // Log an error to an Error Reporting Services
    console.log(error);
  }, [error]);

  return (
    <main>
      <div className="niwi-blog-profile-container text-[16px] flex flex-col justify-center items-center gap-y-[18px]">
        <p
          className={cn(
            "niwi-logo-text font-bold text-[24px] mt-2",
            lancelotFont.className
          )}
        >
          Opps! Sorry
        </p>
        <p className="tracking-widest flex flex-row w-full justify-center items-center gap-x-2 ">
          <Image
            src={"/arthur.png"}
            alt={"Arthur"}
            width={400}
            height={400}
            className="relative top-[-2px]"
          />
          {errMsg}
        </p>
        <div className="items-center">
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
