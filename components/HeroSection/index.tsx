import React from 'react'
import { HeroContent } from './HeroContent'

export default function HeroSection() {
    return (
        <section className="box-border caret-transparent max-w-[1300px] m-auto py-[50px] md:py-[200px]">
            <div className="relative box-border caret-transparent mx-4 md:mx-0">
                <div className="absolute shadow-[rgba(45,255,195,0.14)_0px_0px_300px_165px] box-border caret-transparent hidden w-[800px] top-40 md:block"></div>
                <HeroContent />
            </div>
        </section>
    )
}
