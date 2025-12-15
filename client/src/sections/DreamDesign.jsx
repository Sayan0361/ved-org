export default function DreamDesign() {
  const steps = [
    {
      title: "Select Your Premium Finish",
      description: "Explore Luxora's curated UV marble designs to find the perfect match for your interior style."
    },
    {
      title: "Personalize Your Look",
      description: "Choose textures, shades, and patterns that bring your design vision to life with elegance."
    },
    {
      title: "Elevate Your Space",
      description: "Experience seamless installation and enjoy a refined, durable, and high-gloss transformation."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Section - Shifted left */}
          <div className="order-2 lg:order-1 lg:col-span-6 lg:-ml-8 xl:-ml-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[Montserrat] font-semibold text-gray-900 mb-8 lg:mb-12">
              Designing Your Dream in<br />Three Simple Steps
            </h1>

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 flex-shrink-0"></div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 sm:h-20 lg:h-24 bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl sm:text-2xl font-[Montserrat] font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg font-[Montserrat] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="../src/assets/DreamDesign/image.png"
                alt="Modern luxury kitchen with marble countertops"
                className="w-full h-64 sm:h-96 lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}