import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-gray-100 font-sans antialiased selection:bg-blue-500 selection:text-white" dir="rtl">
      
      {/* الخلفية المضيئة المتموجة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-900/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* الهيدر الرئيسي للمنصة */}
      <header className="relative max-w-5xl mx-auto pt-20 pb-16 px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          النسخة التجريبية الرسمية v1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-blue-400 mb-6 tracking-tight">
          منصة إنجاز الرقمية
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
          المستقبل يبدأ من هنا. منصة متطورة لتوثيق وبناء السير الذاتية الرقمية لطلاب <span className="text-blue-400 font-bold">ثانوية جابر بن حيان</span> (دفعة 2026).
        </p>
        
        {/* أزرار التنقل السريع */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/dashboard" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5">
            دخول لوحة تحكم الطالب
          </Link>
          <a href="#students" className="px-8 py-3.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 text-gray-300 font-medium rounded-xl transition-all">
            استعراض ملفات الطلاب
          </a>
        </div>
      </header>

      {/* قسم الطلاب والإنجازات الحقيقية */}
      <main id="students" className="relative max-w-6xl mx-auto px-6 pb-24 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 border-b border-gray-800 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">قائمة المطورين والمبدعين</h2>
            <p className="text-gray-500 text-sm">نخبة من طلاب مسار علوم الحاسب والهندسة</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm text-gray-400">
            عدد الطلاب المسجلين: <span className="text-blue-400 font-bold">1</span>
          </div>
        </div>

        {/* شبكة عرض بطاقات الطلاب */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* بطاقة الطالب: سامي */}
          <div className="group bg-gray-900/50 backdrop-blur-md border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">
                S
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">سامي</h3>
                <p className="text-xs text-gray-500">قائد الفريق التقني</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6 h-12 overflow-hidden">
              متخصص في إدارة أنظمة Linux، مهتم بالأمن السيبراني، واختبار الاختراق وتطوير واجهات الويب الذكية.
            </p>

            {/* المهارات التكنولوجية */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">القدرات التقنية</h4>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Next.js</span>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Linux Sysadmin</span>
                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-md text-xs font-medium">OSINT</span>
              </div>
            </div>

            {/* الإنجازات الموثقة والمرفوعة */}
            <div className="border-t border-gray-800/80 pt-4 flex justify-between items-center text-xs text-gray-500">
              <span className="flex items-center gap-1">
                📁 2 ملفات مرفوعة
              </span>
              <Link href="/dashboard" className="text-blue-400 hover:underline font-semibold">
                عرض الملف الكامل ←
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
