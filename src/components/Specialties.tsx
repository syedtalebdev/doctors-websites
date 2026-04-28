import { Activity, HeartPulse, Microscope, ShieldCheck, Stethoscope, Syringe } from 'lucide-react';

const SPECIALTIES = [
  {
    icon: HeartPulse,
    title: 'Interventional Cardiology',
    desc: 'Coronary angioplasty, stenting, and complex coronary intervention for acute and chronic heart conditions.',
  },
  {
    icon: Activity,
    title: 'Heart Failure Management',
    desc: 'Long-term care for patients with reduced ejection fraction, including device therapy and follow-up.',
  },
  {
    icon: Microscope,
    title: 'Echocardiography',
    desc: 'Trans-thoracic and trans-oesophageal echo for accurate diagnosis of structural and functional heart disease.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Cardiology',
    desc: 'Personalised risk assessment, cholesterol management, and lifestyle counselling to prevent cardiac events.',
  },
  {
    icon: Stethoscope,
    title: 'Hypertension & Lipid Disorders',
    desc: 'Diagnosis and treatment of resistant hypertension, dyslipidaemia, and metabolic risk factors.',
  },
  {
    icon: Syringe,
    title: 'Cardiac Diagnostics',
    desc: 'Stress testing, Holter monitoring, ambulatory BP monitoring, and tilt-table evaluations.',
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-600 mb-3">
            Areas of Practice
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 leading-tight mb-3">
            Specialties
          </h2>
          <p className="text-ink-500">
            Comprehensive cardiac care across diagnostics, intervention, and long-term management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALTIES.map((s) => (
            <div
              key={s.title}
              className="border border-cream-200 rounded-xl p-6 bg-white hover:border-gold-300 hover:shadow-sm transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-gold-50 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-500 leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
