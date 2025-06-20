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
    { period: t('period1'), activity: t('application1') },
    { period: t('period2'), activity: t('application2') },
    { period: t("period3"), activity: t('application3') },
    { period: t('period4'), activity: t('application4') },
    { period: t('period5'), activity: t('application5') }
  ];

  const faqs = [
    {
      question: t('question1'),
      answer: t('answer1')
    },
  {
      question: t('question2'),
      answer: t('answer2')
    },
    {
      question: t('question3'),
      answer: t('answer3')
    },
    {
      question: t('question4'),
      answer: t('answer4')
    },
    {
      question: t('question5'),
      answer: t('answer5')
    },
    {
      question: t('question6'),
      answer: t('answer6')
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
              {t('underAdmissionTitle')}
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
              <h3 className="text-xl font-semibold text-white mb-2">{t('preK')} {t('program')}</h3>
              <p className="text-emerald-100">{t('tuitionInfo1')}</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('elementary')}</h3>
              <p className="text-emerald-100">{t('tuitionInfo2')}</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('financialAid')}</h3>
              <p className="text-emerald-100">{t('tuitionInfo3')}</p>
            </div>
          </div>
          <p className="text-emerald-100 mt-8">
            {t('tuitionInfo4')}
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