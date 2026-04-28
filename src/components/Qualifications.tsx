import { GraduationCap } from 'lucide-react';

const QUALIFICATIONS = [
  {
    year: '2009',
    degree: 'DM (Cardiology)',
    institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    detail: 'Super-specialty in Cardiology · Gold Medalist',
  },
  {
    year: '2006',
    degree: 'MD (Internal Medicine)',
    institution: 'Seth GS Medical College & KEM Hospital, Mumbai',
    detail: 'Three-year residency · Best Outgoing Resident, 2006',
  },
  {
    year: '2002',
    degree: 'MBBS',
    institution: 'Grant Medical College & JJ Hospital, Mumbai',
    detail: 'University Rank 7 · Distinction in Medicine and Surgery',
  },
];

const CERTIFICATIONS = [
  'Fellowship in Interventional Cardiology — Cleveland Clinic, USA (2011)',
  'Advanced Echocardiography Certification — American Society of Echocardiography',
  'Member, Cardiological Society of India (CSI)',
  'Member, Indian College of Cardiology',
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
            Qualifications &amp; Training
          </h2>
          <p className="text-slate-600">
            Trained at India&apos;s top medical institutions and a leading US fellowship
            programme — with a focus on cardiology since 2006.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4">
            {QUALIFICATIONS.map((q) => (
              <div
                key={q.degree}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-primary-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {q.degree}
                      </h3>
                      <span className="text-sm font-semibold text-primary-700">{q.year}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 mb-1">{q.institution}</p>
                    <p className="text-sm text-slate-500">{q.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
              Fellowships &amp; Memberships
            </h3>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
