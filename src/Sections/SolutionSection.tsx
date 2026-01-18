import soluttionImg from "../assets/solution.webp";

const SolutionSection = () => {
  return (
    <>
      <section id="solution-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Solusi Landing Page yang Fokus pada Hasil
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    Desain yang Mengkonversi
                  </h3>
                </div>
                <p className="text-gray-600">
                  Kami menciptakan landing page yang dirancang khusus untuk
                  mengubah pengunjung menjadi pelanggan, bukan sekadar tampilan
                  yang indah.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
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
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Struktur yang Jelas
                  </h3>
                </div>
                <p className="text-gray-600">
                  Setiap elemen diposisikan secara strategis untuk memandu
                  pengunjung menuju tindakan yang diinginkan dengan alur yang
                  natural.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    Call-to-Action yang Kuat
                  </h3>
                </div>
                <p className="text-gray-600">
                  Tombol dan ajakan bertindak yang ditempatkan secara strategis
                  dengan copy yang persuasif untuk memaksimalkan konversi.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                data-ai="generate"
                data-slot="solution-visual"
                data-prompt="High-converting landing page design showcase, before and after comparison, professional layout with clear call-to-action buttons, mobile responsive design"
                data-ar="4:3"
                src={soluttionImg}
                alt="Solusi landing page yang fokus pada konversi dan hasil"
                width="800"
                height="600"
                className="w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✓ Hasil Terbukti
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3x</div>
                  <div className="text-sm text-gray-600">
                    Lebih Tinggi Konversi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
