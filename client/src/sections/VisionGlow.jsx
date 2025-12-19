import React from "react";
import VisionGlowImg from "../assets/VisionGlow/image.png";

export default function VisionGlow() {
    return (
        <section className="w-full bg-white">
            <div className="px-6 sm:px-8 md:px-10 xl:px-[106px] py-12 sm:py-16 xl:py-20">
                <div className="max-w-[1480px] mx-auto">

                    {/* Layout */}
                    <div className="flex flex-col xl:flex-row items-start gap-10 md:gap-12 xl:gap-16">

                        {/* LEFT: Image */}
                        <div className="w-full xl:w-[715px] shrink-0">
                            <div className="aspect-4/3 md:aspect-square xl:aspect-auto xl:h-[715px]">
                                <img
                                    src={VisionGlowImg}
                                    alt="Luxora VisionGlow Marble"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="flex flex-col w-full xl:max-w-[704px] xl:min-h-[715px]">

                            {/* Title */}
                            <h2 className="font-[Montserrat] font-semibold
                                            text-[26px] sm:text-[32px] md:text-[40px] xl:text-[48px]
                                            leading-tight xl:leading-none
                                            text-black mb-6 md:mb-8">
                                Premium UV Marble with Radiant Glow
                            </h2>

                            {/* Description */}
                            <p className="font-[Montserrat] font-medium
                                text-[15px] sm:text-[16px]
                                leading-[1.6] xl:leading-[1.65]
                                text-[#545454]
                                max-w-full xl:max-w-[680px]">

                                Luxora VisionGlow Marble combines a premium UV marble finish with a soft, radiant glow that enhances any interior space.
                                <br /><br />
                                It is designed to give a modern, luxurious look while keeping the surface bright and visually appealing.
                                <br /><br />
                                The material is durable, easy to maintain, and ideal for homes, showrooms, and commercial spaces.
                                <br /><br />
                                Its elegant shine adds depth and style, making every design feel more refined and high-end.
                            </p>

                            {/* Button */}
                            {/* <button
                                className="
                                            mt-8 sm:mt-10 xl:mt-auto
                                            w-[150px] sm:w-60 xl:w-[275px]
                                            h-14 sm:h-16 xl:h-20
                                            rounded-md
                                            bg-[#111111] text-white
                                            font-[Montserrat] font-semibold
                                            text-[16px] sm:text-[17px] xl:text-[18px]
                                            flex items-center justify-center
                                            hover:bg-gray-900 transition-colors
                                        "
                                type="button"
                            >
                                Learn More
                            </button> */}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
