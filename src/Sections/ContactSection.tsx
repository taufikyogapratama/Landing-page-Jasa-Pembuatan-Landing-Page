const ContactSection = () => {
  return (
    <>
      <section id="kontak" className="relative py-20 overflow-hidden">
        <img
          data-ai="generate"
          data-slot="final-cta-bg"
          data-prompt="Modern professional office workspace with laptops, design mockups, and digital marketing materials, soft lighting, clean and inspiring atmosphere"
          data-ar="16:9"
          src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/7cf52240-bbbd-45f9-9e6d-87da7b955184/7cf52240-bbbd-45f9-9e6d-87da7b955184/final-cta/final-cta-bg-332c1cfb46514df195ccbaa1ba275098.png"
          alt="Workspace profesional untuk pengembangan landing page"
          width="1200"
          height="675"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="auto"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memiliki Landing Page yang Bekerja untuk Bisnis Anda?
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Harga disesuaikan dengan kebutuhan dan kompleksitas. Mulai dengan
            konsultasi gratis untuk membahas project Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://wa.link/0ixxtg"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Konsultasi Gratis Sekarang
            </a>

            <a
              href="https://wa.link/168vjd"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Pesan Landing Page
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Proses cepat
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Desain profesional
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Siap online
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Fokus konversi
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
