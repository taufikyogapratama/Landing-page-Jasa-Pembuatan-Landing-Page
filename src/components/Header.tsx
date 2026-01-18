const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600">
              LandingPro
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#layanan"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Layanan
            </a>
            <a
              href="#keunggulan"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Keunggulan
            </a>
            <a
              href="#proses"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Proses
            </a>
            <a
              href="#kontak"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Kontak
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.link/0ixxtg"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
