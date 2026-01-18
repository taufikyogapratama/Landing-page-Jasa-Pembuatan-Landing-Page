import problemImg from "../assets/problem.webp";

const ProblemSection = () => {
  return (
    <>
      <section id="problem-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Masalah Umum yang Sering Dialami Bisnis
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                data-ai="generate"
                data-slot="problem-illustration"
                data-prompt="Frustrated business owner looking at declining website analytics, low conversion rates, unprofessional website design problems"
                data-ar="16:9"
                src={problemImg}
                alt="Masalah website bisnis yang tidak menghasilkan pelanggan"
                width="1200"
                height="675"
                className="w-full rounded-2xl object-cover shadow-sm"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Belum memiliki website
                  </h3>
                  <p className="text-gray-600">
                    pelanggan tidak dapat menemukan informasi tentang bisnis
                    anda, bahkan tidak tau kalau bisnis anda ada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Website sudah ada tapi tidak menghasilkan pelanggan
                  </h3>
                  <p className="text-gray-600">
                    Banyak bisnis memiliki website yang terlihat bagus namun
                    gagal mengkonversi pengunjung menjadi pelanggan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Landing page terlihat tidak profesional
                  </h3>
                  <p className="text-gray-600">
                    Desain yang kurang menarik dapat mengurangi kepercayaan
                    calon pelanggan terhadap bisnis Anda.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tidak optimal di perangkat mobile
                  </h3>
                  <p className="text-gray-600">
                    Mayoritas pengunjung menggunakan smartphone, namun website
                    tidak responsif dengan baik.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 font-medium">
                  Sering kali masalahnya bukan pada produk atau layanan Anda,
                  melainkan pada landing page yang kurang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
