import { CTAButtons } from "./CTAButton";
import Image from "next/image";

export default function HeroDev() {
    return (
        <div>
            <section className="text-center py-50 bg-[radial-gradient(#00ff7133_1px,#000000_1px)] bg-[size:20px_20px]">
                <div className=" flex justify-center mb-5"><Image className=" rounded-full border-4 border-green-700" src={"https://avatars.githubusercontent.com/u/145785701?v=4"} width={100} height={100} alt="Mostafiz Profile" /></div>
                <h1 className="text-3xl flex font-semibold justify-center box-border caret-transparent leading-9 text-center mb-6 font-righteous_9f6af0 md:text-[56px] md:leading-[61px] md:text-left">
                    Hey I&#39;m{""},
                    <br className="text-3xl box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left" />
                    
                    <span className="text-green-500 text-3xl ml-3 box-border caret-transparent leading-9 text-center md:text-[56px] md:leading-[61px] md:text-left">
                    Mostafiz Rahman
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 font-semibold mb-5 text-balance">Full Stack Developer</p>
                <p className="text-lg font-semibold text-slate-200 mb-12 max-w-2xl mx-auto text-pretty">
                    Passionate full-stack developer with 4+ years of experience building modern web applications. I love creating efficient, scalable solutions and staying up-to-date with the latest technologies.
                </p>
                <div className="flex justify-center"><CTAButtons /></div>
            </section>
        </div>
    )
}
