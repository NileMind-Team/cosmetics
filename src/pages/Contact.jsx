import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

  const whatsappNumber = '966506751303';
  const emails = ['genralpedwi@gmail.com', 'sdwr2000@gmail.com'];
  const taxNumber = '312864606400003';

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

    const serviceId = 'service_g8rofl4';
    const templateId = 'template_6gkgqwj';
    const publicKey = 'f47TUCCm9Zno_KThM';

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: emails.join(','),
        },
        publicKey
      )
      .then(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: lang === 'ar' ? 'تم إرسال الرسالة بنجاح ✅' : 'Message sent successfully ✅',
            showConfirmButton: false,
            timer: 2000,
          });
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error('FAILED...', error);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: lang === 'ar' ? 'حدث خطأ أثناء إرسال الرسالة ❌' : 'Something went wrong ❌',
            text: error.text || error.message || '',
            showConfirmButton: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-16 transition-all duration-700 bg-sky-50 dark:bg-gray-800 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0056B3] dark:text-blue-400 mb-6 text-center">
          {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          <span className="block mx-auto mt-2 w-16 h-1 bg-[#FF7A00] rounded-full"></span>
        </h2>
        <p className="text-lg text-[#FF7A00] font-semibold mb-4 text-center">
          {lang === 'ar'
            ? 'هل لديك أي استفسار أو تحتاج إلى مزيد من المعلومات؟ يسعدنا تواصلك معنا في أي وقت.'
            : "Have any questions or need more information? We're happy to hear from you anytime."}
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
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 w-full">
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <MapPin className="text-[#FF7A00] flex-shrink-0" />
                <span>
                  {lang === 'ar' ? 'بريدة، المملكة العربية السعودية' : 'Buraidah, Saudi Arabia'}
                </span>
              </div>

              {/* WhatsApp Link */}
              <div className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <MessageCircle className="text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  +966 50 675 1303
                </a>
              </div>

              {/* Emails */}
              {emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2"
                >
                  <Mail className="text-[#FF7A00] flex-shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#FF7A00] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              ))}

              {/* Tax Registration Number */}
              <div className="flex flex-wrap items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-[#FF7A00]">
                  {lang === 'ar' ? 'رقم التسجيل الضريبي:' : 'Tax Registration No:'}
                </span>
                <span>{taxNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            ref={contactFormRef}
            className={`flex-1 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform ${
              elementsVisible.contactForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold text-[#FF7A00] mb-6">
              {lang === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
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
                               focus:outline-none focus:ring-2 focus:ring-[#FF7A00]
                               transition-all duration-300 hover:border-[#FF7A00]
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
                             focus:outline-none focus:ring-2 focus:ring-[#FF7A00]
                             transition-all duration-300 hover:border-[#FF7A00]
                             resize-none
                             bg-white dark:bg-gray-700
                             text-gray-900 dark:text-white
                             placeholder-gray-400 dark:placeholder-gray-300"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full bg-[#FF7A00] hover:bg-[#ff8c1a] text-white font-medium py-3 rounded-full transition-all duration-300 disabled:opacity-70 transform hover:scale-105 active:scale-95"
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
