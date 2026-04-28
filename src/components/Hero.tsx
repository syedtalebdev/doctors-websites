import { Award, CheckCircle2, MapPin, Stethoscope } from 'lucide-react';

const QUICK_FACTS = [
  { icon: Stethoscope, label: 'MBBS · MD · DM (Cardiology)' },
  { icon: Award, label: '18+ years of clinical experience' },
  { icon: MapPin, label: 'Lilavati Hospital, Mumbai' },
];

const HIGHLIGHTS = [
  'Interventional cardiology & angioplasty',
  'Heart failure management',
  'Preventive cardiac care & echocardiography',
  'Over 12,000 patients treated',
];

export default function Hero() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: About */}
          <div className="lg:col-span-7 fade-up">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 mb-4">
              About the Doctor
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-3">
              Dr. Aditya Sharma
            </h1>

            <p className="text-lg sm:text-xl text-primary-700 font-medium mb-6">
              Senior Consultant Cardiologist
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 max-w-xl">
              Dr. Aditya Sharma is a senior consultant cardiologist with over 18 years
              of clinical experience in interventional cardiology and heart failure
              management. He trained at AIIMS New Delhi and now leads the cardiology
              practice at Lilavati Hospital, Mumbai.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
              He is committed to evidence-based, compassionate care — and to making
              complex cardiac decisions clear, calm, and shared with his patients
              and their families.
            </p>

            {/* Quick facts row */}
            <div className="space-y-2.5 mb-8">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <fact.icon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{fact.label}</span>
                </div>
              ))}
            </div>

            {/* Highlight bullets */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 mb-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Areas of expertise
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition-colors"
              >
                Book an appointment
              </a>
              <a
                href="#qualifications"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-6 py-3 rounded-md transition-colors"
              >
                View qualifications
              </a>
            </div>
          </div>

          {/* Right: HD Doctor photo */}
          <div className="lg:col-span-5 fade-up-delay-1">
            <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {/* Subtle backdrop */}
              <div className="absolute -inset-3 sm:-inset-4 bg-primary-50 rounded-2xl -z-10" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&h=1125&fit=crop&q=85"
                  alt="Dr. Aditya Sharma — Senior Consultant Cardiologist"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Credential card */}
              <div className="absolute left-3 right-3 sm:left-auto sm:right-4 bottom-4 sm:max-w-[18rem] bg-white border border-slate-200 rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 leading-tight">
                      Member, Cardiological Society of India
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Reg. MMC 2007 · 64218</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
