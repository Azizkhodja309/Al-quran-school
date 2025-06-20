import React from 'react';
import { CheckCircle, Calendar, DollarSign, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RegistrationForm from '../components/RegistrationForm';

const Admissions: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: t('submitApplication'),
      description: t('submitApplicationDesc')
    },
    {
      icon: <Calendar className="h-8 w-8 text-emerald-600" />,
      title: t('scheduleVisit'),
      description: t('scheduleVisitDesc')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: t('interviewProcess'),
      description: t('interviewProcessDesc')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: t('enrollmentConfirmation'),
      description: t('enrollmentConfirmationDesc')
    }
  ];

  const timeline = [
    { period: 'December - February', activity: 'Applications Open' },
    { period: 'March - April', activity: 'Tours & Interviews' },
    { period: 'May', activity: 'Acceptance Notifications' },
    { period: 'June - July', activity: 'Enrollment Finalization' },
    { period: 'August', activity: 'Orientation & School Begins' }
  ];

  const faqs = [
    {
      question: 'What age groups do you serve?',
      answer: 'We serve children from PreK (age 3) through 3rd grade (typically age 8-9).'
    },
    {
      question: 'What are your class sizes?',
      answer: 'We maintain small class sizes of 12-15 students to ensure personalized attention.'
    },
    {
      question: 'Do you provide transportation?',
      answer: 'We do not provide bus transportation. Parents are responsible for drop-off and pick-up.'
    },
    {
      question: 'What is your curriculum like?',
      answer: 'We offer a comprehensive curriculum that integrates Islamic studies with core academic subjects including Math, English, Science, and Social Studies.'
    },
    {
      question: 'Are meals provided?',
      answer: 'Students bring their own lunches. We provide guidance on halal lunch options.'
    },
    {
      question: 'What are your school hours?',
      answer: 'Our full-day program runs from 8:00 AM to 3:30 PM, Monday through Friday.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('admissionsTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our school family and give your child the gift of quality Islamic education combined with academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('howToApply')}</h2>
            <p className="text-xl text-gray-600">{t('howToApplyDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{index + 1}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegistrationForm />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('enrollmentTimeline')}</h2>
            <p className="text-xl text-gray-600">{t('enrollmentTimelineDesc')}</p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-4 h-4 bg-emerald-500 rounded-full mr-6"></div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-600">{item.period}</div>
                  <div className="text-gray-700">{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('tuitionFees')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('preK')} Program</h3>
              <p className="text-emerald-100">Contact us for current tuition rates and payment plans</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('elementary')}</h3>
              <p className="text-emerald-100">Competitive rates with flexible payment options available</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Financial Aid</h3>
              <p className="text-emerald-100">Need-based scholarships available for qualifying families</p>
            </div>
          </div>
          <p className="text-emerald-100 mt-8">
            Please contact our admissions office for detailed tuition information and to discuss payment plans.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('faqs')}</h2>
            <p className="text-xl text-gray-600">{t('faqsDesc')}</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;