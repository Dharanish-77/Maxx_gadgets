export default function MaxxGadgetsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black px-6 py-16 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500 text-blue-300 mb-4">
              MAXX GADGETS
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Mobile Accessories <br />
              <span className="text-blue-400">& Service Center</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
              Trendy gadgets, premium mobile accessories, chargers, speakers,
              earbuds, mini fans and trusted mobile service — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/919344607639"
                className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-lg font-semibold shadow-lg"
              >
                WhatsApp Now
              </a>

              <a
                href="https://instagram.com/maxx._.gadgets"
                className="px-6 py-3 rounded-2xl border border-blue-500 hover:bg-blue-500/20 transition text-lg font-semibold"
              >
                Visit Instagram
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">100+</h3>
                <p className="text-gray-400 text-sm">Accessories</p>
              </div>

              <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Fast</h3>
                <p className="text-gray-400 text-sm">Service</p>
              </div>

              <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Best</h3>
                <p className="text-gray-400 text-sm">Quality</p>
              </div>

              <div className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Trusted</h3>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-blue-500/30 blur-3xl rounded-full"></div>

            <img
              src="/mnt/data/file_00000000ed0471fa965797df219e8610"
              alt="Maxx Gadgets Product"
              className="relative z-10 rounded-3xl shadow-2xl border border-blue-500/30"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trending Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Portable Mini Fan',
                price: '₹499',
                desc: 'Rechargeable cooling fan with long battery backup.',
              },
              {
                title: 'Bluetooth Earbuds',
                price: '₹999',
                desc: 'Crystal clear sound with premium bass.',
              },
              {
                title: 'Fast Charging Cable',
                price: '₹199',
                desc: 'Durable and high-speed charging support.',
              },
              {
                title: 'Wireless Neckband',
                price: '₹799',
                desc: 'Comfort fit wireless neckband with deep bass.',
              },
              {
                title: '20W Fast Charger',
                price: '₹599',
                desc: 'Fast charging adapter for Android & iPhone.',
              },
              {
                title: 'Smart Watch',
                price: '₹1499',
                desc: 'Stylish smartwatch with fitness tracking.',
              },
              {
                title: 'Mobile Back Cover',
                price: '₹249',
                desc: 'Trendy protective covers for all models.',
              },
              {
                title: 'Tempered Glass',
                price: '₹149',
                desc: 'Strong edge-to-edge screen protection.',
              },
              {
                title: 'Bluetooth Speaker',
                price: '₹1299',
                desc: 'Portable speaker with powerful sound output.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-blue-950 to-black border border-blue-500/20 rounded-3xl p-6 hover:scale-105 transition duration-300"
              >
                <div className="h-48 rounded-2xl bg-white/5 flex items-center justify-center text-6xl">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
                <p className="text-blue-400 text-xl mt-2">{item.price}</p>
                <p className="text-gray-400 mt-3">{item.desc}</p>

                <a
                  href="https://wa.me/919344607639"
                  className="inline-block mt-6 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition font-semibold"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-r from-blue-950 to-black px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mobile Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Display Change',
              'Battery Replacement',
              'Software Update',
              'Charging Port Repair',
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-blue-500 transition"
              >
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Banner */
      <section className="px-6 md:px-16 py-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
        <h2 className="text-4xl font-extrabold">🔥 Mega Gadget Offers Available 🔥</h2>
        <p className="mt-4 text-lg text-white/90">
          Buy accessories & get exciting discounts on combo offers.
        </p>
      </section>

      {/* Best Sellers */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            Best Sellers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Gaming Earbuds',
              'Premium Smart Watch',
              'RGB Bluetooth Speaker',
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-950 to-black p-8 hover:scale-105 transition duration-300"
              >
                <div className="absolute top-4 right-4 bg-blue-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                  HOT
                </div>

                <div className="text-7xl mb-6">⚡</div>
                <h3 className="text-3xl font-bold">{item}</h3>
                <p className="text-gray-400 mt-4">
                  Trending product with premium quality and best performance.
                </p>

                <button className="mt-6 px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-bold">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Payment */}
      <section className="bg-gradient-to-r from-black to-blue-950 px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Online Payment Available
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure online payments via UPI, Google Pay, PhonePe, Paytm and bank transfer.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {['Google Pay', 'PhonePe', 'Paytm', 'UPI'].map((pay, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 text-xl font-semibold hover:border-blue-500 transition"
              >
                💳 {pay}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919344607639"
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-xl font-bold"
          >
            Pay & Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Best accessories quality 🔥',
              'Fast mobile service and good response.',
              'Affordable price with premium products.',
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-300 text-lg">{review}</p>
                <h4 className="mt-6 text-blue-400 font-semibold">
                  Happy Customer
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      /* Contact */}
      <section className="px-6 md:px-16 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Contact MAXX GADGETS
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            DM us for location, latest offers and product availability.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="tel:9344607639"
              className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-xl font-bold"
            >
              📞 9344607639
            </a>

            <a
              href="https://instagram.com/maxx._.gadgets"
              className="px-8 py-4 rounded-2xl border border-blue-500 hover:bg-blue-500/20 transition text-xl font-bold"
            >
              📸 @maxx._.gadgets
            </a>
          </div>
        </div>
      </section>

      {/* Ecommerce Features */
      <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-14">
            MAXX GADGETS Online Store
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <div className="text-6xl mb-6">🛒</div>
              <h3 className="text-3xl font-bold mb-4">Smart Cart</h3>
              <p className="text-gray-400 leading-relaxed">
                Customers can add products to cart and order easily through WhatsApp and online payment.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <div className="text-6xl mb-6">🚚</div>
              <h3 className="text-3xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-400 leading-relaxed">
                Quick product delivery support for local customers and nearby areas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-3xl font-bold mb-4">Secure Payments</h3>
              <p className="text-gray-400 leading-relaxed">
                Secure checkout with UPI and trusted payment integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Style Banner */}
      <section className="px-6 md:px-16 py-16 bg-black text-center">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-950 to-black p-10 shadow-2xl">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-400">
            Upgrade Your Mobile Experience ⚡
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover stylish accessories, smart gadgets and professional mobile service with MAXX GADGETS.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mt-10">
            <a
              href="https://wa.me/919344607639"
              className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-xl font-bold"
            >
              Shop Now
            </a>

            <a
              href="https://instagram.com/maxx._.gadgets"
              className="px-8 py-4 rounded-2xl border border-blue-500 hover:bg-blue-500/20 transition text-xl font-bold"
            >
              Follow Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Live Features */
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-blue-950 to-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
              Future Ready <span className="text-blue-400">Tech Store</span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              MAXX GADGETS is designed like a premium ecommerce brand with smart UI, secure shopping and modern customer experience.
            </p>

            <div className="mt-10 space-y-5">
              {[
                'AI Chat Support',
                'Instant WhatsApp Orders',
                'Live Offer Notifications',
                'Secure Checkout Experience',
                'Mobile App Style Design',
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="text-3xl">⚡</div>
                  <h3 className="text-xl font-semibold">{feature}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              '24/7 Support',
              'Premium Accessories',
              'Fast Repairs',
              'Trusted Brand',
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white/5 border border-blue-500/20 p-8 text-center hover:scale-105 transition"
              >
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold">{card}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-blue-500/20 bg-gradient-to-r from-black via-blue-950 to-black p-10 text-center shadow-2xl">
          <h2 className="text-5xl font-extrabold text-blue-400">
            MAXX GADGETS APP Coming Soon 🚀
          </h2>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Shop gadgets, accessories and book mobile service directly from your phone with our upcoming mobile app experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-xl font-bold">
              Google Play
            </button>

            <button className="px-8 py-4 rounded-2xl border border-blue-500 hover:bg-blue-500/20 transition text-xl font-bold">
              App Store
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Latest Gadget Updates
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Subscribe for latest offers, gadget launches and discount updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 w-full md:w-[400px] outline-none"
            />

            <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      /* FAQ */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do you provide mobile service?',
                a: 'Yes, we provide display change, battery replacement and software support.',
              },
              {
                q: 'Do you offer online payment?',
                a: 'Yes, Google Pay, PhonePe, Paytm and UPI payments are available.',
              },
              {
                q: 'How to order products?',
                a: 'You can directly order through WhatsApp or Instagram DM.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold text-blue-400">{faq.q}</h3>
                <p className="text-gray-300 mt-3 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      /* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 bg-black">
        © 2026 MAXX GADGETS • All Rights Reserved
      </footer>
    </div>
  )
}
