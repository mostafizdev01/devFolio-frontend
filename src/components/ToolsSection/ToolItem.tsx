import Image from "next/image";

export type ToolItemProps = {
    iconSrc: string;
    iconAlt: string;
    iconVariant: string;
    title: string;
};

export const ToolItem = (props: ToolItemProps) => {
    return (
        <div className="backdrop-blur bg-white/10 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_30px_0px] box-border caret-transparent border py-[60px] rounded-2xl border-solid border-white/30">
            <div className="items-center box-border caret-transparent flex flex-col h-full justify-center">
                <div className="items-center box-border caret-transparent flex flex-col">
                    <Image
                        width={30}
                        height={30}
                        src={props.iconSrc}
                        alt={props.iconAlt}
                        className={`box-border mb-4 ${props.iconVariant}`}
                    />
                    <p className="font-medium box-border caret-transparent opacity-80 text-center uppercase">
                        {props.title}
                    </p>
                </div>
            </div>
        </div>
    );
};
