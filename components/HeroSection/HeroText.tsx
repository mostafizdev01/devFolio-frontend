import { CTAButtons } from "./CTAButton";


export const HeroText = () => {
  return (
    <div className="box-border caret-transparent">
      <h1 className="text-3xl box-border caret-transparent leading-9 text-center mb-6 font-righteous_9f6af0 md:text-[56px] md:leading-[61px] md:text-left">
        Hi there,
        <br className="text-3xl box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left" />
        I&#39;m{" "}
        <span className="text-green-500 text-3xl box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left">
          Polash Ahmad
        </span>
      </h1>
      <p className="box-border caret-transparent opacity-75 text-center mb-8 md:text-left">
        A passionate full-stack developer with extensive experience transforming
        ideas into projects from ideation to deployment. Thriving on creative
        problem-solving, a blend of technical expertise and artistic vision is
        used to craft elegant solutions.
      </p>
      <CTAButtons />
    </div>
  );
};
