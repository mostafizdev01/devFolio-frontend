export const ProfileImage = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="box-border caret-transparent object-cover mx-auto">
        <img
          alt="Md Mostafiz"
          src="https://i.postimg.cc/Qtjhg3fc/Gemini-Generated-Image-naf3ignaf3ignaf33-removebg-preview-1-removebg-preview-1.png"
          className="text-transparent aspect-[auto_1130_/_1358] box-border max-w-full w-64 mx-auto rounded-[30px] md:w-[500px]"
        />
      </div>
      <div className="absolute items-center bg-green-500 box-border caret-transparent hidden h-40 justify-center transform-none w-40 rounded-full border-[30px] border-solid border-black -right-7 -bottom-7 md:flex md:-rotate-45">
        <img
          src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-2.svg"
          alt="Icon"
          className="text-black box-border caret-transparent h-20 w-20"
        />
      </div>
    </div>
  );
};
