import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { languageChooser, useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  // const currentLanguage = useLanguage().language;
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locations = [
    {
      name: 'Location #1',
      address: '8967 Cincinnati Columbus Rd, West Chester Township, OH 45069',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.8744444444444!2d-84.2977777!3d39.3422222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDIwJzMyLjAiTiA4NMKwMTcnNTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890'
    },
    {
      name: 'Location #2',
      address: '7372 Kingsgate Way, West Chester, OH 45069',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.8744444444444!2d-84.3877777!3d39.3522222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDIxJzA4LjAiTiA4NMKwMjMnMTYuMCJX!5e0!3m2!1sen!2sus!4v1234567890'
    },
    {
      name: 'Location #3',
      address: '11231 Cornell Park Dr, Cincinnati OH 45242',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.8744444444444!2d-84.4977777!3d39.2822222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE2JzU2LjAiTiA4NMKwMjknNTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const validateForm = (): boolean => {
    const requiredFields: (keyof ContactFormData)[] = [
      'fullName',
      'email',
    ];

    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        setError('Please fill in all required fields');
        return false;
      }
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        formType: 'contact'
      };

      const response = await fetch('https://eop4tm9utu2mpym.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response is successful
      const responseText = await response.text();
      console.log('Submission response:', responseText);

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setError('There was an error submitting your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {t('submissionSuccess')}
          </h3>
          <p className="text-green-700 mb-6">
            {t('submissionSuccessDesc')}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            {t('backToContact')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] from-emerald-50 to-blue-50 bg-gradient-to-tr overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('phone')}</h3>
              <p className="text-gray-600">(347) 486-9469</p>
              <p className="text-gray-600">(631) 691-8207</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('email')}</h3>
              <p className="text-gray-600">alquranislamicschool@gmail.com</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('schoolHours')}</h3>
              <p className="text-gray-600">{languageChooser('Monday - Friday', 'Dushanba – Juma', 'Понедельник – Пятница')}</p>
              <p className="text-gray-600">8:00 AM - 3:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contactForm')}</h2>
            <p className="text-xl text-gray-600">{t('contactFormDesc')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiryType')}
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">{t('contactInquiryType')}</option>
                    <option value="general">{t('generalInquiry')}</option>
                    <option value="tour">{t('scheduleTour')}</option>
                    <option value="enrollment">{t('enrollmentInformation')}</option>
                    <option value="programs">{t('programDetails')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="text-red-500">*</span> {t('reasonForRequest')}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    {t('sendMessage')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('locations')}</h2>
            <p className="text-xl text-gray-600">{t('locationsDesc')}</p>
          </div>

          <div className="space-y-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-64 lg:h-full"
                    ></iframe>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-200">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;