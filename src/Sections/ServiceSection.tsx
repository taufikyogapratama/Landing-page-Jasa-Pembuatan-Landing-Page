import service1 from "../assets/services-1.webp";
import service2 from "../assets/services-2.webp";
import service3 from "../assets/services-3.webp";
import service4 from "../assets/services-4.webp";

const ServiceSection = () => {
  return (
    <>
      <section id="layanan" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan yang Kami Sediakan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  data-ai="generate"
                  data-slot="services-1"
                  data-prompt="Modern business landing page design on laptop screen, professional UMKM business website interface"
                  data-ar="4:3"
                  src={service1}
                  alt="Landing Page Bisnis UMKM"
                  width="400"
                  height="300"
                  className="w-full rounded-lg object-cover mb-4"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Landing Page Bisnis / UMKM
              </h3>
              <p className="text-gray-600">
                Landing page khusus untuk bisnis dan UMKM yang fokus pada
                konversi pelanggan dan peningkatan penjualan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  data-ai="generate"
                  data-slot="services-2"
                  data-prompt="Digital advertising campaign landing page with conversion tracking, ads optimization interface"
                  data-ar="4:3"
                  src={service2}
                  alt="Landing Page untuk Iklan"
                  width="400"
                  height="300"
                  className="w-full rounded-lg object-cover mb-4"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Landing Page untuk Iklan (Ads)
              </h3>
              <p className="text-gray-600">
                Landing page yang dioptimalkan khusus untuk kampanye iklan
                digital dengan tingkat konversi tinggi.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  data-ai="generate"
                  data-slot="services-3"
                  data-prompt="Personal portfolio website design, professional personal branding landing page"
                  data-ar="4:3"
                  src={service3}
                  alt="Landing Page Personal Portfolio"
                  width="400"
                  height="300"
                  className="w-full rounded-lg object-cover mb-4"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Landing Page Personal / Portfolio
              </h3>
              <p className="text-gray-600">
                Showcase profesional untuk personal branding, portfolio, atau
                layanan freelance yang menarik klien.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  data-ai="generate"
                  data-slot="services-4"
                  data-prompt="Custom web development process, bespoke landing page design with unique features"
                  data-ar="4:3"
                  src={service4}
                  alt="Custom Landing Page"
                  width="400"
                  height="300"
                  className="w-full rounded-lg object-cover mb-4"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom Landing Page
              </h3>
              <p className="text-gray-600">
                Solusi landing page yang disesuaikan dengan kebutuhan spesifik
                dan fitur khusus untuk bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
