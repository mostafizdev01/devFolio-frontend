export const MobileNavHeader = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] p-2 md:min-h-0 md:min-w-0">
        <div className="items-center bg-green-800 box-border caret-transparent flex h-10 justify-center w-10 rounded-full">
          <h3 className="text-xl box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            PA
          </h3>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-2 p-2 md:min-h-0 md:min-w-0">
        {/* <img
          src="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-[30px] w-[30px]"
        /> */}
        M
      </div>
    </div>
  );
};
