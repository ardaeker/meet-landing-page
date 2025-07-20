import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative mt-27 bg-[#5699A8] px-8 py-16 lg:px-0 lg:py-28">
      <div
        className="absolute -top-27 left-1/2 z-10 flex w-14 -translate-x-1/2 flex-col items-center justify-center"
        aria-hidden
      >
        <div className="h-20 w-px bg-slate-300" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-base leading-6 text-slate-600">
          02
        </div>
      </div>
      <Image src="/images/footer/footer-illustration.png" alt="" className="object-cover" sizes="100vw" fill />
      <div className="relative mx-auto w-full max-w-77.75 space-y-6 max-lg:text-center md:max-w-126 lg:flex lg:max-w-280 lg:justify-between lg:gap-x-8">
        <h2 className="text-[2rem] leading-[2.2rem] font-black text-slate-100 md:text-4xl md:leading-[2.475rem] lg:max-w-111.25 lg:text-[2.5rem] lg:leading-11">
          Experience more together
        </h2>
        <p className="text-base leading-6 font-medium text-slate-100 lg:max-w-88.75 lg:text-lg lg:leading-[1.6875rem]">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </p>
        <button className="flex h-14 cursor-pointer items-center justify-center gap-x-1 rounded-[1.8125rem] bg-purple-600 px-10 text-base leading-6 font-black text-slate-100 transition-colors duration-200 hover:bg-purple-500 max-lg:mx-auto">
          Download <span className="text-purple-300">v1.3</span>
        </button>
      </div>
    </footer>
  );
}
