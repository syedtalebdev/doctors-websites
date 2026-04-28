import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Dr. Sharma took the time to explain my father’s angioplasty options without the rush you usually see. The procedure went smoothly and his follow-up has been thorough.',
    name: 'Rahul Mehta',
    relation: 'Patient’s son · Andheri',
  },
  {
    quote:
      'I came for a second opinion on my echo report. Dr. Sharma was honest, did not push for unnecessary procedures, and gave me a clear lifestyle plan. Six months on, my numbers have improved.',
    name: 'Sneha Iyer',
    relation: 'Patient · Bandra',
  },
  {
    quote:
      'Calm, methodical, and genuinely listens. I have referred three of my own patients to him for cardiology evaluation and the feedback has been excellent every time.',
    name: 'Dr. Priya Menon',
    relation: 'General Physician',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">
            Patient Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
            What patients say
          </h2>
          <p className="text-slate-600">A few notes from people Dr. Sharma has cared for.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-slate-100">
                <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.relation}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
