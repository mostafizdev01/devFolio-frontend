export const NavMenu = () => {
  return (
    <div className="fixed items-center backdrop-blur-xl bg-neutral-950/50 box-border caret-transparent flex transform-none border py-6 rounded-[80px] border-solid border-white/10 left-2/4 top-16 md:translate-x-[-50.0%] md:translate-y-[-50.0%]">
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#intro"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Home
        </a>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#skills"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Skills
        </a>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#tools-i-use"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Tools
        </a>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#my-recent-project"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Projects
        </a>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#my-experience"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Career
        </a>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#contact-me"
          className="box-border caret-transparent tracking-[2px] px-8 hover:text-teal-400"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
