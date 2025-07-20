import Image from "next/image";
import { Logo } from "./logo";
import clsx from "clsx";

interface UserCloudProps {
  position: "left" | "right";
}

function UserCloud({ position }: UserCloudProps) {
  const source = position === "left" ? "/images/users/user-left" : "/images/users/user-right";

  return (
    <div className="flex max-w-52 items-start gap-x-4 md:max-w-98.5 md:gap-x-8">
      <div className={clsx("space-y-3.5 md:space-y-7", position === "left" && "pt-[1.815rem] md:pt-[3.4375rem]")}>
        {[1, 4].map((index) => (
          <div key={index} className="relative h-14.5 w-14.5 overflow-hidden md:h-27.5 md:w-27.5">
            <Image src={`${source}-${index}.png`} alt="" className="rounded-full object-cover" fill />
          </div>
        ))}
      </div>
      <div className={clsx("space-y-3.5 md:space-y-7", position === "right" && "pt-[1.815rem] md:pt-[3.4375rem]")}>
        {[2, 5].map((index) => (
          <div key={index} className="relative h-14.5 w-14.5 overflow-hidden md:h-27.5 md:w-27.5">
            <Image src={`${source}-${index}.png`} alt="" className="rounded-full object-cover" fill />
          </div>
        ))}
      </div>
      <div className={clsx("space-y-3.5 md:space-y-7", position === "left" && "pt-[1.815rem] md:pt-[3.4375rem]")}>
        {[3, 6].map((index) => (
          <div key={index} className="relative h-14.5 w-14.5 overflow-hidden md:h-27.5 md:w-27.5">
            <Image src={`${source}-${index}.png`} alt="" className="rounded-full object-cover" fill />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="overflow-x-hidden">
      <div className="flex w-full items-center justify-center pt-12 lg:pt-20">
        <Logo />
      </div>
      <div className="pt-16 pb-8 md:py-16">
        <div className="relative mx-auto w-full max-w-100 overflow-x-visible md:max-w-126 lg:max-w-120">
          <div className="absolute top-0 -left-[30.615625rem] hidden lg:block">
            <UserCloud position="left" />
          </div>
          <div className="absolute top-[3.5625rem] -right-[30.615625rem] hidden lg:block">
            <UserCloud position="right" />
          </div>
          <div className="h-40 md:h-75.75 lg:hidden">
            <div className="absolute top-0 left-1/2 flex -translate-x-1/2 items-center justify-center gap-x-4 md:gap-x-8">
              <UserCloud position="left" />
              <UserCloud position="right" />
            </div>
          </div>
          <div className="mt-12 space-y-6 px-8 text-center md:mt-18 lg:mt-0 lg:space-y-8">
            <h1 className="text-[2.5rem] leading-11 font-black text-slate-900 md:text-5xl md:leading-[3.3rem] lg:text-[4rem] lg:leading-[4.4rem]">
              Group Chat for Everyone
            </h1>
            <p className="text-base leading-6 font-medium text-slate-600 lg:text-lg lg:leading-[1.6875rem]">
              Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
            </p>
            <div className="flex flex-col items-center justify-center gap-x-4.25 gap-y-4 md:flex-row">
              <button className="flex h-14 cursor-pointer items-center justify-center gap-x-1 rounded-[1.8125rem] bg-cyan-600 px-10 text-base leading-6 font-black text-slate-100 transition-colors duration-200 hover:bg-cyan-500">
                Download <span className="text-cyan-300">v1.3</span>
              </button>
              <button className="flex h-14 cursor-pointer items-center justify-center gap-x-1 rounded-[1.8125rem] bg-purple-600 px-10 text-base leading-6 font-black text-slate-100 transition-colors duration-200 hover:bg-purple-500">
                What is it?
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
