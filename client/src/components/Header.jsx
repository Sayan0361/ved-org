import React, { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white w-full">
            <div className="relative w-full px-3 sm:px-4 lg:px-6 mt-4 sm:mt-6 lg:mt-8">
                <div className="max-w-7xl mx-auto h-auto min-h-10 sm:h-[50px]">
                    <div className="flex items-center justify-between h-full">
                        {/* Brand */}
                        <div
                            className="shrink-0 h-10 sm:h-[50px] flex items-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] font-semibold"
                            style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                        >
                            <span className="truncate">【 V E D A  ORGANISATION 】</span>
                        </div>

                        {/* Right section with navigation + Sign Up */}
                        <div className="flex items-center">
                            {/* Desktop nav */}
                            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 h-6">
                                {["Home", "Service", "Contact", "Support"].map((item) => (
                                    <div
                                        key={item}
                                        className="w-auto min-w-[60px] h-6 flex items-center justify-center text-[15px] xl:text-[16px] font-medium truncate hover:text-zinc-700 transition-colors"
                                        style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                                    >
                                        {item}
                                    </div>
                                ))}
                                <button
                                    className="w-auto min-w-[100px] xl:min-w-[120px] h-[35px] xl:h-10 px-4 xl:px-5 flex items-center justify-center bg-black text-white font-semibold text-[14px] xl:text-[15px] cursor-pointer hover:bg-gray-800 transition-colors ml-1"
                                    style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                                >
                                    Contact Us
                                </button>
                            </nav>

                            {/* Hamburger menu button - visible on mobile */}
                            <button
                                onClick={() => setOpen((s) => !s)}
                                className="lg:hidden inline-flex items-center justify-center p-2 ml-2 z-50"
                                aria-label="menu"
                                aria-expanded={open}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    className="block"
                                >
                                    <path
                                        d={open ? "M6 18L18 6M6 6L18 18" : "M3 6h18M3 12h18M3 18h18"}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile dropdown menu - positioned absolutely under the header row */}
                    {open && (
                        <div className="absolute top-full left-0 w-full lg:hidden z-50">
                            <div className="mx-3 mt-3 w-auto bg-white shadow-lg rounded-lg border border-gray-100">
                                <div className="flex flex-col p-4 gap-2">
                                    {["Home", "Service", "Contact", "Support"].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="w-full block text-left px-4 py-3 text-[16px] font-medium hover:bg-gray-50 rounded-md transition-colors"
                                            style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                                            onClick={() => setOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                    <button
                                        className="w-full mt-2 py-3 text-center bg-black text-white font-semibold text-[16px] rounded-md hover:bg-gray-900 transition-colors"
                                        style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                                        onClick={() => setOpen(false)}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
