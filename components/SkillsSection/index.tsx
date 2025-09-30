import { SkillCard } from "./SkillCard";
import { WhatsAppButton } from "./WhatsAppButton";

export const SkillsSection = () => {
    return (
        <section className="box-border caret-transparent max-w-[1300px] m-auto">
            <div className="relative box-border caret-transparent mb-[200px] px-4 md:px-0">
                <div className="absolute shadow-[rgba(45,255,195,0.086)_0px_0px_300px_165px] box-border caret-transparent hidden w-[800px] right-40 top-96 md:block"></div>
                <h3 className="text-3xl box-border caret-transparent leading-9 opacity-85 text-center mb-[100px] font-righteous_9f6af0 md:text-[56px]">
                    Skills
                </h3>
                <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-4 mb-[50px] md:gap-x-8 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-8">
                    <SkillCard
                        number="01"
                        titleLine1="UI/UX"
                        titleLine2="Design"
                        description="I focus on user-centered design by blending creativity with functionality. Through research and analysis, I create intuitive interfaces that enhance user satisfaction, making applications visually appealing and easy to navigate. A great user experience is essential for success."
                    />
                    <SkillCard
                        number="02"
                        titleLine1="Development"
                        titleLine2="Proficiency"
                        description="Expertise in modern technologies enables the delivery of high-quality, scalable web applications. Proficient in both front-end and back-end development, ensuring seamless integration of design and functionality in every project."
                    />
                    <SkillCard
                        number="03"
                        titleLine1="Quick"
                        titleLine2="Delivery"
                        description="Recognizing the importance of timely delivery, a fast development process enables quick iterations and on-time releases without sacrificing quality. Committed to meeting deadlines while upholding the highest standards of professionalism and excellence."
                    />
                </div>
                <WhatsAppButton />
            </div>
        </section>
    );
};
