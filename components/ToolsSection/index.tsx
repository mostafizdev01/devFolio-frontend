import { ToolItem } from "./ToolItem";

export const ToolsSection = () => {
    return (
        <section className="box-border caret-transparent max-w-[1300px] m-auto">
            <div className="relative box-border caret-transparent mb-[100px] px-4 md:px-0">
                <h3 className="text-3xl box-border caret-transparent leading-9 opacity-85 text-center mb-[100px] font-righteous_9f6af0 md:text-[56px]">
                    Tools I Use
                </h3>
                <div className="absolute shadow-[rgba(255,146,45,0.086)_260px_400px_300px_165px] box-border caret-transparent hidden w-[800px] top-20 md:block"></div>
                <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,minmax(0px,1fr))] justify-center gap-y-4 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-10.svg"
                        iconAlt="Icon"
                        iconVariant="text-yellow-400 h-[70px] w-[70px]"
                        title="Html"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-10.svg"
                        iconAlt="Icon"
                        iconVariant="text-yellow-400 h-[70px] w-[70px]"
                        title="Html"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-10.svg"
                        iconAlt="Icon"
                        iconVariant="text-yellow-400 h-[70px] w-[70px]"
                        title="Html"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-10.svg"
                        iconAlt="Icon"
                        iconVariant="text-yellow-400 h-[70px] w-[70px]"
                        title="Html"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-11.svg"
                        iconAlt="Icon"
                        iconVariant="text-fuchsia-500 h-[70px] w-[70px]"
                        title="Css"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-12.svg"
                        iconAlt="Icon"
                        iconVariant="text-yellow-400 h-[70px] w-[70px]"
                        title="JavaScript"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/7.png"
                        iconAlt="TypeScript Icon"
                        iconVariant="text-transparent aspect-[auto_354_/_400] box-border h-[66px] max-w-full w-[66px] mt-1 mb-4"
                        title="TypeScript"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-13.svg"
                        iconAlt="Icon"
                        iconVariant="text-cyan-300 h-[70px] w-[70px]"
                        title="ReactJS"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-14.svg"
                        iconAlt="Icon"
                        iconVariant="text-purple-800 box-border caret-transparent h-[70px] w-[70px]"
                        title="ReduxJS"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-15.svg"
                        iconAlt="Icon"
                        iconVariant="text-cyan-400 h-[70px] w-[70px]"
                        title="NextJS"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-16.svg"
                        iconAlt="Icon"
                        iconVariant="text-red-500 h-[70px] w-[70px]"
                        title="Git"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-17.svg"
                        iconAlt="Icon"
                        iconVariant="text-amber-400 h-[70px] w-[70px]"
                        title="NodeJS"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-18.svg"
                        iconAlt="Icon"
                        iconVariant="text-amber-400 h-[70px] w-[70px]"
                        title="Express JS"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-19.svg"
                        iconAlt="Icon"
                        iconVariant="text-slate-500 h-[70px] w-[70px]"
                        title="Postgres SQL"
                    />
                    <ToolItem
                        iconSrc="https://c.animaapp.com/mg5yzz7jpcryVW/assets/icon-20.svg"
                        iconAlt="Icon"
                        iconVariant="text-green-500 h-[70px] w-[70px]"
                        title="Mongodb"
                    />
                </div>
            </div>
        </section>
    );
};
