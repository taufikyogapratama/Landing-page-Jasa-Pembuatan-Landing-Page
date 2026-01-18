import keunggulanImg from "../assets/keunggulan.webp";

const Keunggulan = () => {
  return (
    <>
      <section id="keunggulan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kenapa Memilih Kami?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Fokus pada Konversi, Bukan Sekadar Tampilan
                    </h3>
                    <p className="text-gray-600">
                      Setiap elemen dirancang untuk mengubah pengunjung menjadi
                      pelanggan, bukan hanya terlihat bagus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Desain Modern dan Profesional
                    </h3>
                    <p className="text-gray-600">
                      Tampilan yang up-to-date dan profesional yang membangun
                      kepercayaan pengunjung.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Struktur Landing Page Jelas dan Terarah
                    </h3>
                    <p className="text-gray-600">
                      Alur yang logis dan mudah diikuti pengunjung dari awal
                      hingga melakukan tindakan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Responsif di Semua Perangkat
                    </h3>
                    <p className="text-gray-600">
                      Tampil sempurna di desktop, tablet, dan smartphone untuk
                      menjangkau semua pengunjung.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proses Kerja Simpel dan Transparan
                    </h3>
                    <p className="text-gray-600">
                      Komunikasi jelas di setiap tahap, tanpa proses
                      berbelit-belit atau biaya tersembunyi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-lg font-medium text-blue-900">
                  Kami tidak hanya membuat website, tetapi membantu Anda
                  mendapatkan hasil.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <img
                data-ai="generate"
                data-slot="why-us-main"
                data-prompt="Professional web development team working on landing page optimization, conversion-focused design process"
                data-ar="4:3"
                src={keunggulanImg}
                alt="Tim profesional mengerjakan landing page"
                width="600"
                height="450"
                className="w-full rounded-2xl object-cover shadow-sm"
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

export default Keunggulan;
