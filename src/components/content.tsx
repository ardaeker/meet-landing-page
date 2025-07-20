import Image from "next/image";

export function Content() {
  return (
    <main className="relative flex flex-col items-center justify-center px-8 pt-8 pb-16 md:pt-14 lg:px-0 lg:pb-18">
      <div className="flex w-14 flex-col items-center justify-center" aria-hidden>
        <div className="h-20 w-px bg-slate-300" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-base leading-6 text-slate-600">
          01
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center md:mx-auto md:max-w-170 lg:max-w-280">
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="xs:block relative hidden h-36 w-37 overflow-hidden rounded-lg last:block md:h-40 md:w-38 lg:h-64 lg:w-64"
            >
              <Image
                src={`/images/content/content-illustration-${index + 1}.png`}
                alt=""
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>
        <div className="max-w-77.75 pt-16 text-center md:max-w-126 lg:max-w-136">
          <span className="block text-xs leading-[0.825rem] font-black tracking-[0.25em] text-cyan-600 uppercase md:text-sm md:leading-[0.9625rem] lg:text-base lg:leading-[1.1rem]">
            Built for modern use
          </span>
          <h2 className="mt-4 text-[2rem] leading-[2.2rem] font-black text-slate-900 md:px-[1.84375rem] md:text-4xl md:leading-[2.475rem] lg:px-[3.09375rem] lg:text-[2.5rem] lg:leading-11">
            Smarter meetings, all in one place
          </h2>
          <p className="mt-8 text-base leading-6 font-medium text-slate-600 lg:text-lg lg:leading-[1.6875rem]">
            Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who
            can join with invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </main>
  );
}
