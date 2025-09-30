import Image from "next/image";

export const CTAButtons = () => {
  return (
    <div className="text-lg font-light items-center box-border caret-transparent gap-x-4 flex justify-center leading-7 gap-y-4 md:font-semibold md:justify-start">
      <a
        href="/polash-ahmad-resume.pdf"
        className="text-black font-light items-center bg-green-500 box-border caret-transparent gap-x-2 flex justify-center gap-y-2 w-52 border py-[11px] rounded-xl border-solid border-white/10 md:font-semibold hover:border-green-500"
      >
        <Image
          width={30}
          height={30}
          src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-7.svg"
          alt="Icon"
          className="font-light box-border caret-transparent h-5 w-5 md:font-semibold"
        />
        <span className="font-light box-border caret-transparent block md:font-semibold">
          Resume
        </span>
      </a>
      <a
        href="mailto://dev.polashahmad@gmail.com"
        className="font-light items-center bg-neutral-900 box-border caret-transparent gap-x-2 flex justify-center gap-y-2 w-52 border py-[11px] rounded-xl border-solid border-white/10 md:font-semibold hover:text-green-500 hover:border-green-500"
      >
        <Image
          width={30}
          height={30}
          src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-8.svg"
          alt="Icon"
          className="font-light box-border caret-transparent h-[18px] w-[18px] md:font-semibold"
        />
        <span className="font-light box-border caret-transparent block md:font-semibold">
          Contact
        </span>
      </a>
    </div>
  );
};
