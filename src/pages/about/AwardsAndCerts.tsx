import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Award, CheckCircle2 } from 'lucide-react';
import { getCloudinaryUrl } from '../../utils/cloudinary';
const isoCert = getCloudinaryUrl('ISO-certi.jpg');
const awardCert = getCloudinaryUrl('Award.jpg');
const gstCert = getCloudinaryUrl('GST.jpg');
const msmeCert = getCloudinaryUrl('MSME.jpg');
const bannerAbout = getCloudinaryUrl('about.jpg');

interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  alt: string;
  details: string;
}

const certifications: CertificationItem[] = [
  {
    id: 'iso',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    category: 'International Standards',
    image: isoCert,
    alt: 'ISO 9001:2015 Quality Management System Certificate - Charu Enterprises',
    details: 'Certified quality standards for manufacturing, hot-dip galvanizing, and global supply of fence fittings.',
  },
  {
    id: 'award',
    title: 'Export Excellence',
    subtitle: 'International Trade Certificate',
    category: 'Government Recognition',
    image: awardCert,
    alt: 'Export Excellence and Outstanding Performance Award - Charu Enterprises',
    details: 'Awarded for outstanding performance in engineering exports and global shipments.',
  },
  {
    id: 'gst',
    title: 'GST',
    subtitle: 'Registration Certificate',
    category: 'Tax & Regulatory Compliance',
    image: gstCert,
    alt: 'Government of India GST Registration Certificate - Charu Enterprises',
    details: 'Registered under Goods and Services Tax (GSTIN: 19AABFC7920J1ZC) for compliant trade.',
  },
  {
    id: 'msme',
    title: 'MSME',
    subtitle: 'Registration Certificate',
    category: 'Ministry of MSME, Govt of India',
    image: msmeCert,
    alt: 'Ministry of MSME Industrial Registration Certificate - Charu Enterprises',
    details: 'Registered MSME enterprise (UDYAM-WB-10-0019534) recognized by the Government of India.',
  },
];

export const AwardsAndCerts: FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="certifications-awards"
      className="relative w-full py-14 sm:py-18 lg:py-20 font-['Outfit',sans-serif] border-b border-blue-200/80 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerAbout}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#DBEAFE]/92" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 justify-center mb-2">
            <span className="w-1.5 h-4 bg-[#f0c75e] rounded-full inline-block" />
            <span className="text-[#2563EB] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Certifications &amp; Awards
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0a1532] tracking-tight leading-[1.2]">
            Certifications &amp; Awards
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal mt-2.5 max-w-2xl mx-auto">
            Certified quality standards and government export awards.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {certifications.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCert(item)}
              className="bg-white rounded-2xl sm:rounded-[22px] p-2.5 sm:p-3 pb-3.5 sm:pb-4 border border-blue-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative"
            >
              {/* Full Area Document Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-1 sm:p-1.5 mb-3 group-hover:border-blue-200 transition-colors">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#0a1532]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-white text-[#2563EB] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
              </div>

              {/* Document Name & Type */}
              <div className="text-center px-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0a1532] tracking-tight group-hover:text-[#2563EB] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5 leading-snug">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Window */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-[#071128]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-[96vw] max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-[92vh] sm:max-h-[90vh] md:h-[86vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-blue-100 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 md:bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </button>

              {/* Certificate Image View */}
              <div className="w-full md:w-[54%] lg:w-[58%] bg-slate-950 flex items-center justify-center p-3 sm:p-5 lg:p-7 overflow-auto min-h-[220px] sm:min-h-[300px] md:min-h-full">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.alt}
                  loading="lazy"
                  className="max-h-[36vh] sm:max-h-[50vh] md:max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Certificate Meta & Details */}
              <div className="w-full md:w-[46%] lg:w-[42%] p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white overflow-y-auto">
                <div className="space-y-4 sm:space-y-5">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DBEAFE] text-[#1E40AF] text-xs font-bold rounded-full border border-blue-200">
                    <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{selectedCert.category}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1532] tracking-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-[#2563EB] mt-0.5">
                      {selectedCert.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedCert.details}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Authentic Government / Accreditation Body Document</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Active Registration &amp; Audit Compliance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Charu Enterprises Quality Archive
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsAndCerts;
