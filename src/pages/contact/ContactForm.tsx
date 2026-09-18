import { useState, type FC, type FormEvent } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, Building2, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../data/companyData';
import { getCloudinaryUrl } from '../../utils/cloudinary';
const contactUsImg = getCloudinaryUrl('contact-us.jpg');

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20 font-['Outfit',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Left Column: Form Card with rounded border & inputs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[28px] border border-slate-200/90 p-6 sm:p-7 lg:p-8 xl:p-9 shadow-sm h-full flex flex-col justify-between">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-auto py-10 px-4 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1532]">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
                    Thank you for reaching out to Charu Enterprises. Our sales and export team will review your requirements and send a quote quickly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                      });
                    }}
                    className="group mt-4 bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-2.5 rounded-full inline-flex items-center gap-3 text-sm transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span className="transition-colors">Send Another Inquiry</span>
                    <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between space-y-4 sm:space-y-4.5">
                  <div className="border-b border-slate-100 pb-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0a1532]">
                      Request a Quote
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      FCL container shipments and custom fabrication orders
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-form-name"
                      className="block text-xs sm:text-sm font-semibold text-[#0a1532] mb-1"
                    >
                      Name &amp; Company *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      placeholder="e.g. John Smith, Acme Supply"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all text-slate-800 text-sm sm:text-base bg-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-form-email"
                      className="block text-xs sm:text-sm font-semibold text-[#0a1532] mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all text-slate-800 text-sm sm:text-base bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="contact-form-phone"
                      className="block text-xs sm:text-sm font-semibold text-[#0a1532] mb-1"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all text-slate-800 text-sm sm:text-base bg-white"
                    />
                  </div>

                  {/* Service You Need */}
                  <div>
                    <label
                      htmlFor="contact-form-service"
                      className="block text-xs sm:text-sm font-semibold text-[#0a1532] mb-1"
                    >
                      Products Required *
                    </label>
                    <input
                      id="contact-form-service"
                      type="text"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="e.g. Barbed Arms, Brace Bands, Gate Hinges"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all text-slate-800 text-sm sm:text-base bg-white"
                    />
                  </div>

                  {/* Message / Notes */}
                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="contact-form-message"
                      className="block text-xs sm:text-sm font-semibold text-[#0a1532] mb-1"
                    >
                      Port, Quantity &amp; Notes *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={5}
                      required
                      placeholder="Please specify destination port, estimated quantity, item numbers, or drawing details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[130px] lg:min-h-[145px] px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all text-slate-800 text-sm sm:text-base resize-none bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-[#3B82F6] hover:bg-[#DBEAFE] text-white hover:text-black font-bold pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-3 text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-lg font-['Outfit',sans-serif] disabled:opacity-60"
                    >
                      <span className="transition-colors">
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#3B82F6] flex items-center justify-center text-[#3B82F6] group-hover:text-white shadow-sm shrink-0 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Information & Showcase Image */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* Header Section */}
            <div className="space-y-2 sm:space-y-2.5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
                <span className="text-[#3B82F6] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Contact Information
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0a1532] tracking-tight leading-[1.15]">
                Charu Enterprises
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                Manufacturer and exporter of chain link fence fittings, post caps, brace bands, gate hardware, and custom sheet metal parts since 1969.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3.5 text-xs sm:text-sm lg:text-base text-slate-700">
              {/* Registered Office */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a1532] text-xs sm:text-sm">Registered Office:</div>
                  <div className="text-slate-600 text-xs sm:text-sm leading-relaxed">{COMPANY_INFO.addresses.office.full}</div>
                </div>
              </div>

              {/* Works & Factory */}
              <div className="flex items-start gap-3">
                <Building2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a1532] text-xs sm:text-sm">Works &amp; Factory:</div>
                  <div className="text-slate-600 text-xs sm:text-sm leading-relaxed">{COMPANY_INFO.addresses.factory.full}</div>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a1532] text-xs sm:text-sm">Direct Phone &amp; WhatsApp:</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-slate-600 text-xs sm:text-sm">
                    <a href={`tel:${COMPANY_INFO.phones.indiaPrimary.replace(/\s+/g, '')}`} className="hover:text-[#3B82F6] transition-colors font-medium">
                      🇮🇳 India: {COMPANY_INFO.phones.indiaPrimary}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones.usaPrimary.replace(/[^0-9+]/g, '')}`} className="hover:text-[#3B82F6] transition-colors font-medium">
                      🇺🇸 USA Desk: {COMPANY_INFO.phones.usaPrimary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a1532] text-xs sm:text-sm">Official Email:</div>
                  <div className="flex flex-wrap gap-x-4 text-slate-600 text-xs sm:text-sm">
                    <a
                      href={`mailto:${COMPANY_INFO.emails.primary}`}
                      className="hover:text-[#3B82F6] transition-colors font-medium"
                    >
                      {COMPANY_INFO.emails.primary}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emails.official}`}
                      className="hover:text-[#3B82F6] transition-colors font-medium"
                    >
                      {COMPANY_INFO.emails.official}
                    </a>
                  </div>
                </div>
              </div>

              {/* Badges / Registration */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <Globe2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0" />
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700">
                  ISO 9001:2015 Certified • ASTM A153 Galvanizing • Port: Kolkata Sea
                </div>
              </div>
            </div>

            {/* Bottom Showcase Image */}
            <div className="pt-1">
              <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[24px] overflow-hidden aspect-[16/8.2] sm:aspect-[16/8] lg:aspect-[16/8] w-full shadow-md border border-slate-200/80 bg-slate-100 group">
                <img
                  src={contactUsImg}
                  alt="Charu Enterprises precision manufacturing facility and container loading"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
