import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, MessageCircle, Instagram, Phone } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState({
    contactInfo: false,
    contactForm: false,
  });

  const sectionRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);

  const whatsappNumber = '201062485133';
  const phoneNumber = '+20 106 248 5133';
  const emails = ['support@BreatyWomen.com'];
  const instagramHandle = '@BreatyWomen_official';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => {
            setElementsVisible({
              contactInfo: true,
              contactForm: true,
            });
          }, 300);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: lang === 'ar' ? 'تم إرسال الرسالة بنجاح ✅' : 'Message sent successfully ✅',
        showConfirmButton: false,
        timer: 2000,
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-16 transition-all duration-700 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#762B8B] dark:text-pink-400 mb-6 text-center">
          {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          <span className="block mx-auto mt-2 w-16 h-1 bg-[#D62E7C] rounded-full"></span>
        </h2>
        <p className="text-lg text-[#D62E7C] font-semibold mb-4 text-center">
          {lang === 'ar'
            ? 'نحن هنا للإجابة على جميع استفساراتك حول منتجاتنا والعناية ببشرتك. تواصلي معنا الآن!'
            : "We're here to answer all your questions about our products and skincare. Get in touch with us now!"}
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Left Side: Contact Info */}
          <div
            ref={contactInfoRef}
            className={`flex-1 flex flex-col justify-center space-y-5 text-gray-700 dark:text-gray-300 transition-all duration-700 transform ${
              elementsVisible.contactInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 w-full border border-pink-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <MapPin className="text-[#D62E7C] flex-shrink-0" size={20} />
                <span>{lang === 'ar' ? 'الفيوم - المحمدية' : 'Fayoum - El Mohamadeya'}</span>
              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <Phone className="text-[#D62E7C] flex-shrink-0" size={20} />
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-[#D62E7C] transition-colors"
                  dir="ltr"
                >
                  {phoneNumber}
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <MessageCircle className="text-[#25D366] flex-shrink-0" size={20} />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                  dir="ltr"
                >
                  {lang === 'ar' ? 'تواصل واتساب' : 'WhatsApp'}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <Instagram className="text-[#D62E7C] flex-shrink-0" size={20} />
                <a
                  href="https://instagram.com/BreatyWomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D62E7C] transition-colors"
                >
                  {instagramHandle}
                </a>
              </div>

              {/* Emails */}
              {emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2"
                >
                  <Mail className="text-[#D62E7C] flex-shrink-0" size={20} />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#D62E7C] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            ref={contactFormRef}
            className={`flex-1 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform border border-pink-100 dark:border-gray-700 ${
              elementsVisible.contactForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold text-[#762B8B] mb-6">
              {lang === 'ar' ? 'أرسلي لنا رسالة' : 'Send us a Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    {lang === 'ar'
                      ? field === 'name'
                        ? 'الاسم'
                        : 'البريد الإلكتروني'
                      : field === 'name'
                        ? 'Name'
                        : 'Email'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-700 
                               rounded-lg px-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-[#762B8B]
                               transition-all duration-300 hover:border-[#762B8B]
                               bg-white dark:bg-gray-700
                               text-gray-900 dark:text-white
                               placeholder-gray-400 dark:placeholder-gray-300"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  {lang === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 
                             rounded-lg px-4 py-3 
                             focus:outline-none focus:ring-2 focus:ring-[#762B8B]
                             transition-all duration-300 hover:border-[#762B8B]
                             resize-none
                             bg-white dark:bg-gray-700
                             text-gray-900 dark:text-white
                             placeholder-gray-400 dark:placeholder-gray-300"
                  placeholder={lang === 'ar' ? 'اكتبي رسالتك هنا...' : 'Type your message here...'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full bg-[#762B8B] hover:bg-[#5a2269] text-white font-medium py-3 rounded-full transition-all duration-300 disabled:opacity-70 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                <Send size={18} />
                {loading
                  ? lang === 'ar'
                    ? 'جارٍ الإرسال...'
                    : 'Sending...'
                  : lang === 'ar'
                    ? 'إرسال'
                    : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
