import { ProfileImage } from "./ProfileImage";
import { SocialLinks } from "./SocialLinks";


export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="[align-items:normal] box-border caret-transparent flex justify-center md:items-center md:justify-start">
        <ProfileImage />
        <SocialLinks />
      </div>
      <div className="box-border caret-transparent">
        <h1 className="text-3xl box-border caret-transparent leading-9 text-center mb-6 font-righteous_9f6af0 md:text-[56px] md:leading-[61px] md:text-left">
          Hi there,
          <br className="text-3xl box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left" />
          I&#39;m{" "}
          <span className="text-green-500 text-3xl box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left">
            Mostafiz Rahman
          </span>
        </h1>
        <p className="box-border caret-transparent opacity-75 text-center mb-8 md:text-left">
          A passionate full-stack developer with extensive experience
          transforming ideas into projects from ideation to deployment. Thriving
          on creative problem-solving, a blend of technical expertise and
          artistic vision is used to craft elegant solutions.
        </p>
        <div className="text-lg font-light items-center box-border caret-transparent gap-x-4 flex justify-center leading-7 gap-y-4 md:font-semibold md:justify-start">
          <a
            href="/polash-ahmad-resume.pdf"
            className="text-black font-light items-center bg-green-500 box-border caret-transparent gap-x-2 flex justify-center gap-y-2 w-52 border py-[11px] rounded-xl border-solid border-white/10 md:font-semibold hover:border-green-500"
          >
            <img
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
            <img
              src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-8.svg"
              alt="Icon"
              className="font-light box-border caret-transparent h-[18px] w-[18px] md:font-semibold"
            />
            <span className="font-light box-border caret-transparent block md:font-semibold">
              Contact
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
