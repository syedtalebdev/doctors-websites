export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} Dr. Aditya Sharma. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-primary-700 transition-colors">About</a>
            <a href="#qualifications" className="hover:text-primary-700 transition-colors">Qualifications</a>
            <a href="#contact" className="hover:text-primary-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
