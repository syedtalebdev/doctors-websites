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
            <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-600 mb-3">
              Book an Appointment
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 leading-tight mb-4">
              Visit the clinic, or call us
            </h2>
            <p className="text-base sm:text-lg text-ink-500 leading-[1.7] mb-8 max-w-lg">
              Walk-in consultations are accepted on weekdays. For confirmed appointments
              and tele-consults, please call the clinic during working hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">Clinic Address</div>
                  <div className="text-sm text-ink-500">
                    Lilavati Hospital, A-791, Bandra Reclamation
                    <br />
                    Bandra (West), Mumbai — 400 050
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">Phone</div>
                  <a
                    href="tel:+919820011111"
                    className="text-sm text-ink-500 hover:text-gold-600 transition-colors"
                  >
                    +91 98200 11111
                  </a>
                  <span className="text-sm text-ink-400"> · </span>
                  <a
                    href="tel:+912226751111"
                    className="text-sm text-ink-500 hover:text-gold-600 transition-colors"
                  >
                    022 2675 1111
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">Email</div>
                  <a
                    href="mailto:appointments@dradityasharma.in"
                    className="text-sm text-ink-500 hover:text-gold-600 transition-colors break-all"
                  >
                    appointments@dradityasharma.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours card */}
          <div className="bg-cream-50 border border-cream-200 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-5 h-5 text-gold-600" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900">Consultation Hours</h3>
            </div>
            <ul className="divide-y divide-cream-200">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 text-sm"
                >
                  <span className="font-semibold text-ink-900">{h.day}</span>
                  <span className="text-ink-500">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-cream-200">
              <p className="text-sm text-ink-500 mb-4">
                For walk-ins, please arrive 15 minutes early. New patients should bring
                previous prescriptions, ECG reports, and any imaging films.
              </p>
              <a
                href="tel:+919820011111"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gold-600 hover:bg-gold-700 text-white font-semibold tracking-[0.5px] px-6 py-3 rounded-md shadow-sm transition-colors min-h-[44px]"
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
