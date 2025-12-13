import React from "react";
import ServiceIcon from "../assets/Services/image.png";
import { services } from "../constants/services";

export default function Services() {
    return (
        <section className="w-full bg-white">
            {/* Outer positioning similar to left:106px, top spacing */}
            <div className="px-6 md:px-8 lg:px-20 xl:px-[106px] py-20">
                <div className="max-w-[1483px] mx-auto">

                    {/* Section Header */}
                    <div className="flex items-center gap-6 mb-16">
                        {/* Small line */}
                        <div className="w-[100px] border-t-[3px] border-black"></div>

                        {/* Title */}
                        <h2 className="font-[Montserrat] font-semibold text-[32px] text-black">
                            Our Services
                        </h2>
                    </div>

                    {/* Services Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="
                                        flex flex-col p-3
                                        pr-6
                                        rounded-md
                                        transition-all duration-300
                                        shadow-[8px_0_20px_rgba(0,0,0,0.08)]
                                    "
                            >


                                {/* Icon + Title */}
                                <div className="flex items-start gap-3 mb-4">
                                    <img
                                        src={ServiceIcon}
                                        alt="service icon"
                                        className="w-[18px] h-[18px] mt-0.5"
                                    />

                                    <h3 className="font-[Montserrat] font-semibold text-[24px] leading-none text-black">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <p className="font-[Montserrat] font-medium text-[16px] leading-[1.65] text-[#545454]">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
