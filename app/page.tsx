import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8 font-sans" dir="rtl">
      <header className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ملف الإنجاز الرقمي</h1>
        <p className="text-xl text-blue-600 font-medium">لطلاب ثانوية جابر بن حيان - دفعة 2026</p>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          منصة رقمية لتوثيق مشاريع الطلاب، إنجازاتهم الأكاديمية، ومهاراتهم التقنية استعداداً للمستقبل.
        </p>
      </header>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">قائمة الطلاب</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">الطالب: سامي</h3>
            <p className="text-gray-600 mb-4">قائد فريق التطوير التقني - مهتم بالأمن السيبراني وتطوير الويب.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
