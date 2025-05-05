'use client'



export default function HeroSection() {
  return (
        <section
          className="relative w-full h-[90vh] text-slate-100 flex items-center justify-center"
        >
    
          {/* オーバーレイ（やや暗くして文字を読みやすく） */}
          <div className="absolute inset-0 bg-black/30 z-10" />
    
          {/* コンテンツ */}
          <div className="relative z-20 text-center px-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-serif tracking-wide mb-6">
              Seen
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              Seenは、感情を投稿できる。<br />
              だけど誰にも見られない。<br />
              そんな“SNS風”アプリです。
            </p>
            <a href="#cta">
              <button className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md hover:scale-105 transition">
                今すぐ投稿してみる
              </button>
            </a>
          </div>
        </section>
      )
    }
    
