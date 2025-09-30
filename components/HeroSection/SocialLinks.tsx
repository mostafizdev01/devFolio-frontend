export const SocialLinks = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] hidden flex-row min-h-0 min-w-0 gap-y-[normal] md:items-center md:gap-x-8 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:gap-y-8">
      <p className="text-green-500 font-extralight box-border caret-transparent min-h-0 min-w-0 transform-none mb-12 md:min-h-[auto] md:min-w-[auto] md:rotate-90">
        Follow me on:
      </p>
      <div className="bg-green-500 box-border caret-transparent h-20 min-h-0 min-w-0 w-[0.5px] md:min-h-[auto] md:min-w-[auto]"></div>
      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-0 min-w-0 gap-y-4 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="https://www.linkedin.com/in/polashahmad01"
          className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-3.svg"
            alt="Icon"
            className="text-green-500 box-border caret-transparent h-6 w-6"
          />
        </a>
        <a
          href="https://twitter.com/polashahmad01"
          className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-4.svg"
            alt="Icon"
            className="text-green-500 box-border caret-transparent h-6 w-6"
          />
        </a>
        <a
          href="https://www.facebook.com/polashahmad01"
          className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-5.svg"
            alt="Icon"
            className="text-green-500 box-border caret-transparent h-6 w-6"
          />
        </a>
        <a
          href="https://wa.me/+8801795186140"
          className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-6.svg"
            alt="Icon"
            className="text-green-500 box-border caret-transparent h-6 w-6"
          />
        </a>
      </div>
    </div>
  );
};
