import Link from "next/link";

export const NavMenu = () => {
  return (
    <div className="fixed items-center backdrop-blur-xl bg-neutral-950/50 box-border caret-transparent flex transform-none border py-6 rounded-[80px] border-solid border-white/10 left-2/4 top-16 md:translate-x-[-50.0%] md:translate-y-[-50.0%]">
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="#intro"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Home
        </Link>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="/about"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          About
        </Link>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="/blogs"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Blogs
        </Link>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="/project"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Projects
        </Link>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="/contact"
          className="box-border caret-transparent tracking-[2px] px-8 border-r border-solid border-white/10 hover:text-teal-400"
        >
          Contact
        </Link>
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <Link
          href="/dashboard"
          className="box-border caret-transparent tracking-[2px] px-8 hover:text-teal-400"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};
