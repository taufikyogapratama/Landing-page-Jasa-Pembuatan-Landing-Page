import prosesImg from "../assets/proses.webp";

const ProcessSection = () => {
  return (
    <>
      <section id="proses" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proses Pengerjaan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proses yang jelas dan transparan dari konsultasi hingga landing
              page siap online
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                data-ai="generate"
                data-slot="workflow-illustration"
                data-prompt="Step-by-step web development workflow illustration, professional landing page creation process"
                data-ar="4:3"
                src={prosesImg}
                alt="Proses pengerjaan landing page"
                width="600"
                height="450"
                className="w-full rounded-2xl object-cover shadow-sm"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Konsultasi Kebutuhan dan Tujuan
                    </h3>
                    <p className="text-gray-600">
                      Kami mendengarkan kebutuhan bisnis Anda, target audience,
                      dan tujuan yang ingin dicapai melalui landing page.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Penyusunan Struktur dan Konten
                    </h3>
                    <p className="text-gray-600">
                      Merancang struktur halaman dan konten yang strategis untuk
                      memaksimalkan konversi sesuai tujuan bisnis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Desain dan Pengembangan
                    </h3>
                    <p className="text-gray-600">
                      Mengembangkan landing page dengan desain profesional yang
                      responsif dan dioptimalkan untuk semua perangkat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Revisi Sesuai Kesepakatan
                    </h3>
                    <p className="text-gray-600">
                      Melakukan penyesuaian dan revisi berdasarkan feedback Anda
                      hingga sesuai dengan ekspektasi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Landing Page Siap Online
                    </h3>
                    <p className="text-gray-600">
                      Landing page dipublish dan siap digunakan untuk mendukung
                      pertumbuhan bisnis dan kampanye pemasaran Anda.
                    </p>
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

export default ProcessSection;
