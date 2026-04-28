import { CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    title: 'Cardiac Consultation',
    desc: 'Detailed clinical evaluation, ECG review, and a clear plan tailored to your heart health.',
    duration: '30 – 45 minutes',
    fee: '₹1,500',
  },
  {
    title: 'Echocardiography',
    desc: 'In-clinic 2D / colour-Doppler echo, performed and reported by Dr. Sharma personally.',
    duration: '30 minutes',
    fee: '₹3,500',
  },
  {
    title: 'Stress Test (TMT)',
    desc: 'Treadmill stress test for evaluation of chest pain, exercise capacity, and ischaemia.',
    duration: '45 minutes',
    fee: '₹3,000',
  },
  {
    title: 'Angioplasty &amp; Stenting',
    desc: 'Day-care to short-stay coronary intervention performed at Lilavati Hospital.',
    duration: 'Hospital procedure',
    fee: 'On consultation',
  },
  {
    title: 'Second Opinion',
    desc: 'A focused, evidence-based review of your existing reports, films, and treatment plan.',
    duration: '30 minutes',
    fee: '₹2,000',
  },
  {
    title: 'Tele-consultation',
    desc: 'Secure video consult for follow-ups, prescription review, and minor concerns.',
    duration: '20 minutes',
    fee: '₹1,000',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
            Consultation &amp; Procedures
          </h2>
          <p className="text-slate-600">
            Indicative fees and durations. Procedure costs vary by complexity — please call
            the clinic for a precise estimate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-primary-300 hover:shadow-sm transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-primary-600 mb-3" />
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {s.title.replace('&amp;', '&')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5 min-h-[3rem]">
                {s.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">{s.duration}</span>
                <span className="text-sm font-semibold text-slate-900">{s.fee}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
