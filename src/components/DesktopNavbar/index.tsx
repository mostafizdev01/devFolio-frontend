import { NavMenu } from "./NavMenu";

export const DesktopNavbar = () => {
    return (
        <div className= "box-border caret-transparent hidden md:block" >
        <nav className="relative text-sm font-light box-border caret-transparent tracking-[0.35px] leading-5 uppercase z-50" >
            <NavMenu />
            </nav>
            </div>
  )
};