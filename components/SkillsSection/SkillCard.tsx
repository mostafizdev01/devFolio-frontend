export type SkillCardProps = {
    number: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
};

export const SkillCard = (props: SkillCardProps) => {
    return (
        <div className="backdrop-blur-2xl bg-slate-600/10 box-border caret-transparent border p-[52px] rounded-[20px] border-solid border-white/10">
            <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 mb-4">
                <div className="bg-white box-border caret-transparent h-px opacity-30 w-10"></div>
                <div className="text-cyan-400 box-border caret-transparent opacity-70">
                    {props.number}
                </div>
            </div>
            <h4 className="text-[26px] font-medium box-border caret-transparent leading-[32.5px] uppercase mb-4 font-space_grotesk_746184">
                <span className="box-border caret-transparent">{props.titleLine1}</span>
                <br className="box-border caret-transparent" />
                <span className="box-border caret-transparent">{props.titleLine2}</span>
            </h4>
            <div className="box-border caret-transparent">
                <p className="text-neutral-400 box-border caret-transparent">
                    {props.description}
                </p>
            </div>
        </div>
    );
};
