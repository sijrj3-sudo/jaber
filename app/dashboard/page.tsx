import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans" dir="rtl">
      
      {/* شريط التنقل العلوي */}
      <nav className="w-full max-w-5xl bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">منصة إنجاز</h1>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-500">أهلاً، سامي</span>
          <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition">
            تسجيل الخروج
          </button>
        </div>
      </nav>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* العمود الأيمن: السيرة الذاتية */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4 mx-auto">
            س
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">سامي</h2>
          <p className="text-center text-gray-500 text-sm mb-6">الصف الثاني ثانوي - مسار علوم الحاسب</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-1">الاهتمامات</h3>
              <p className="text-gray-700 font-medium">الأمن السيبراني، تطوير الويب، إدارة أنظمة لينكس</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-1">المهارات</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">Next.js</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">Linux</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">Cybersecurity</span>
              </div>
            </div>
          </div>
        </aside>

        {/* العمود الأيسر: الإنجازات ورفع الملفات */}
        <main className="lg:col-span-2 space-y-6">
          
          {/* قسم رفع الملفات */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">مساحة الرفع</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                + رفع شهادة جديدة
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
              <p className="text-gray-500 text-sm">اسحب وأفلت الصور أو ملفات PDF هنا، أو اضغط للرفع</p>
            </div>
          </section>

          {/* قسم الملفات المرفوعة */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">أحدث الإنجازات</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="border border-gray-100 p-4 rounded-xl flex gap-4 items-center hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold">
                  PDF
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">شهادة دورة الأمن السيبراني</h4>
                  <p className="text-xs text-gray-400">تم الرفع: قبل يومين</p>
                </div>
              </div>

              <div className="border border-gray-100 p-4 rounded-xl flex gap-4 items-center hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                  IMG
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">ورقة عمل الرياضيات</h4>
                  <p className="text-xs text-gray-400">تم الرفع: قبل أسبوع</p>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
