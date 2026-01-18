import benefitImg from "../assets/benefits.webp";

const BenefitSection = () => {
  return (
    <>
      <section id="benefit" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apa yang Akan Anda Dapatkan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Investasi Anda akan menghasilkan landing page yang benar-benar
              bekerja untuk bisnis Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Landing Page Siap Pakai
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Langsung online dan siap menerima pengunjung tanpa setup
                    tambahan
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4m-6-4a2 2 0 01-2-2V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Desain Profesional
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tampilan modern yang membangun kepercayaan dan kredibilitas
                    bisnis
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Struktur CTA yang Jelas
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Call-to-action strategis yang mengarahkan pengunjung menjadi
                    pelanggan
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Responsif Mobile &#x26; Desktop
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tampil sempurna di semua perangkat dan ukuran layar
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sm:col-span-2">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Siap untuk Promosi dan Iklan
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dioptimalkan untuk kampanye digital marketing dan iklan
                    berbayar
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                data-ai="generate"
                data-slot="benefits-visual"
                data-prompt="Professional business team celebrating success with laptops and digital devices, modern office setting, happy clients looking at conversion results on screens"
                data-ar="4:3"
                src={benefitImg}
                alt="Tim profesional merayakan kesuksesan dengan hasil konversi landing page"
                width="800"
                height="600"
                className="w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitSection;
