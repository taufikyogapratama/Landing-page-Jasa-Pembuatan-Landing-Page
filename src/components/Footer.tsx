const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">
                LandingPro
              </div>
              <p className="text-gray-300 mb-4">
                Jasa pembuatan landing page profesional untuk UMKM, bisnis
                kecil, dan startup. Fokus pada konversi dan hasil yang terukur.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i data-lucide="mail" className="w-5 h-5"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i data-lucide="phone" className="w-5 h-5"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i data-lucide="instagram" className="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Landing Page UMKM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Landing Page Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio Personal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Custom Landing Page
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>

                <li>
                  <a
                    href="#kontak"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 LandingPro. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
