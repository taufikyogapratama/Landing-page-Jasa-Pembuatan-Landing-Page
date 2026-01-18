import heroImg from "../assets/hero.webp";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Landing Page Profesional untuk Mendapatkan Lebih Banyak
                Pelanggan,{" "}
                <span className="text-blue-600">Tanpa Proses Ribet</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cukup sampaikan kebutuhan Anda. Kami kerjakan hingga landing
                page siap online, siap digunakan, dan siap mendukung pertumbuhan
                bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a href="https://wa.link/0ixxtg">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                    Konsultasi Gratis
                  </button>
                </a>
                <a href="https://wa.link/168vjd">
                  <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Pesan Landing Page
                  </button>
                </a>
              </div>
              <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Proses cepat • Desain profesional • Siap online
              </p>
            </div>
            <div className="relative">
              <img
                data-ai="generate"
                data-slot="hero-main"
                data-prompt="Modern professional landing page design mockup on laptop and mobile devices, clean interface, business dashboard, Indonesian UMKM context"
                data-ar="4:3"
                src={heroImg}
                alt="Landing page profesional untuk bisnis UMKM"
                width="800"
                height="600"
                className="w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Siap Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
