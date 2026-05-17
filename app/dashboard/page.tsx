export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#080c16] text-gray-200 font-sans" dir="rtl">
      <nav className="border-b border-gray-800 bg-[#0a0f1d]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">إنجاز DASHBOARD</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-gray-300">الجلسة: مشفرة الآمنة</span>
            <button className="text-xs bg-red-950/40 text-red-400 border border-red-900/30 px-3 py-1.5 rounded-lg hover:bg-red-900/20 transition">تسجيل خروج</button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 bg-gray-900/40 border border-gray-800 rounded-2xl p-6 h-fit">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg shadow-blue-500/10">
            S
          </div>
          <h2 className="text-lg font-bold text-center text-white">سامي</h2>
          <p className="text-center text-xs text-blue-400 font-mono mt-1">@sijrj3-sudo</p>
          <div className="mt-6 space-y-4 border-t border-gray-800 pt-4 text-sm">
            <div>
              <span className="text-gray-500 text-xs block mb-1">المسار الأكاديمي</span>
              <p className="font-medium text-gray-300">ثاني ثانوي - علوم حاسب</p>
            </div>
            <div>
              <span className="text-gray-500 text-xs block mb-1">النظام الأساسي</span>
              <p className="font-mono text-xs text-emerald-400">Linux Mint / Bash</p>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-3 space-y-6">
          <section className="bg-gray-900/20 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-md font-bold text-white mb-4 flex items-center gap-2">
              <span>⚡</span> نظام إدارة ورفع الملفات والشواهد
            </h3>
            <div className="border-2 border-dashed border-gray-800 hover:border-blue-500/40 rounded-xl p-10 text-center bg-gray-900/10 cursor-pointer transition-all">
              <p className="text-sm text-gray-400 mb-1 font-medium">اسحب شهاداتك، أوراق العمل، أو مبادراتك هنا</p>
              <p className="text-xs text-gray-600">يدعم صيغ PNG, JPG, PDF بحد أقصى 5MB</p>
            </div>
          </section>

          <section className="bg-gray-900/20 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-md font-bold text-white mb-4">الملفات الحالية الموثقة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-800/80 bg-gray-900/30 p-4 rounded-xl flex items-center justify-between hover:border-gray-700 transition">
                <div className="flex items-center gap-3">
                  <div className="text-xl">📄</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-200">شهادة دورة برمجية</h4>
                    <p className="text-xs text-gray-500">مكتملة - PDF</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-800/80 bg-gray-900/30 p-4 rounded-xl flex items-center justify-between hover:border-gray-700 transition">
                <div className="flex items-center gap-3">
                  <div className="text-xl">📊</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-200">مبادرة تطوير المدرسة</h4>
                    <p className="text-xs text-gray-500">مسودة العرض - PPTX</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
