import { Briefcase } from 'lucide-react';

const ROLES = [
  {
    period: '2015 – Present',
    role: 'Senior Consultant Cardiologist',
    org: 'Lilavati Hospital, Mumbai',
    points: [
      'Lead the interventional cardiology unit and the heart-failure clinic',
      'Performed over 4,500 angioplasty procedures',
      'Mentor for DM Cardiology trainees and visiting fellows',
    ],
  },
  {
    period: '2011 – 2015',
    role: 'Consultant Cardiologist',
    org: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai',
    points: [
      'Built the structural-heart programme for valvular interventions',
      'Co-investigator in two multicentre clinical trials in heart failure',
      'Set up the preventive cardiology outpatient service',
    ],
  },
  {
    period: '2009 – 2011',
    role: 'Interventional Fellow',
    org: 'Cleveland Clinic, USA',
    points: [
      'Trained under Dr. E. Murat Tuzcu in complex coronary intervention',
      'Published 4 peer-reviewed papers in JACC and Circulation',
    ],
  },
];

const STATS = [
  { value: '18+', label: 'Years of practice' },
  { value: '12,000+', label: 'Patients treated' },
  { value: '4,500+', label: 'Angioplasty cases' },
  { value: '20+', label: 'Peer-reviewed papers' },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-cream-50 border-y border-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-600 mb-3">
            Career
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 leading-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-ink-500">
            Eighteen years across India&apos;s leading hospitals and a US fellowship — clinical
            care, research, and teaching.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-cream-200 rounded-xl p-5 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-gold-700 mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="space-y-4 sm:space-y-5">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className="bg-white border border-cream-200 rounded-xl p-5 sm:p-6 lg:p-7"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="lg:w-56 flex-shrink-0 mb-3 lg:mb-0">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md">
                    <Briefcase className="w-3.5 h-3.5" />
                    {r.period}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900 mb-0.5">
                    {r.role}
                  </h3>
                  <p className="text-ink-500 mb-3">{r.org}</p>
                  <ul className="space-y-1.5">
                    {r.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-ink-300 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
