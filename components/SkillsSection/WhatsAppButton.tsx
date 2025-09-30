import Image from "next/image";

export const WhatsAppButton = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
      <a
        href="https://wa.me/+8801319306973"
        className="text-teal-100 items-center bg-[linear-gradient(98deg,rgba(2,176,155,0.38),rgba(90,137,253,0.18))] box-border caret-transparent gap-x-4 flex gap-y-4 border pl-8 pr-2 py-[11px] rounded-full border-solid border-white/10 hover:bg-sky-800/60"
      >
        <span className="text-xl box-border caret-transparent block leading-7">
          Let&#39;s chat on Whatsapp
        </span>
        <Image
        width={30}
        height={30}
          src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent h-[30px] w-[30px]"
        />
      </a>
    </div>
  );
};
