import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 1:00 PM · 5:00 PM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed (emergencies via hospital)' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">
              Book an Appointment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Visit the clinic, or call us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
              Walk-in consultations are accepted on weekdays. For confirmed appointments
              and tele-consults, please call the clinic during working hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Clinic Address</div>
                  <div className="text-sm text-slate-600">
                    Lilavati Hospital, A-791, Bandra Reclamation
                    <br />
                    Bandra (West), Mumbai — 400 050
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Phone</div>
                  <a
                    href="tel:+919820011111"
                    className="text-sm text-slate-600 hover:text-primary-700 transition-colors"
                  >
                    +91 98200 11111
                  </a>
                  <span className="text-sm text-slate-500"> · </span>
                  <a
                    href="tel:+912226751111"
                    className="text-sm text-slate-600 hover:text-primary-700 transition-colors"
                  >
                    022 2675 1111
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Email</div>
                  <a
                    href="mailto:appointments@dradityasharma.in"
                    className="text-sm text-slate-600 hover:text-primary-700 transition-colors break-all"
                  >
                    appointments@dradityasharma.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-5 h-5 text-primary-700" />
              <h3 className="font-display text-xl font-bold text-slate-900">Consultation Hours</h3>
            </div>
            <ul className="divide-y divide-slate-200">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 text-sm"
                >
                  <span className="font-semibold text-slate-900">{h.day}</span>
                  <span className="text-slate-600">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4">
                For walk-ins, please arrive 15 minutes early. New patients should bring
                previous prescriptions, ECG reports, and any imaging films.
              </p>
              <a
                href="tel:+919820011111"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call to book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
