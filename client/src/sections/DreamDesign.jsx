import { steps } from "../constants/dreamDesigning";
import DreamImg from "../assets/DreamDesign/image.png";

export default function DreamDesign() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="order-2 xl:order-1 xl:col-span-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-[Montserrat] font-semibold text-gray-900 mb-8 xl:mb-12 leading-tight">
              Designing Your Dream in Three Simple Steps
            </h1>

            <div className="space-y-8 sm:space-y-10 xl:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">

                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 shrink-0"></div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 sm:h-20 lg:h-24 bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-[Montserrat] font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base xl:text-lg font-[Montserrat] leading-relaxed max-w-prose">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 xl:order-2 xl:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={DreamImg}
                alt="Modern luxury kitchen with marble countertops"
                className="w-full h-64 sm:h-80 md:h-96 xl:h-[600px] 2xl:h-[700px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
