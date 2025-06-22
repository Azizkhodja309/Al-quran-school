import React from 'react';
import { Clock, Users, BookOpen, Palette, Calculator, Globe } from 'lucide-react';
import { languageChooser, useLanguage } from '../contexts/LanguageContext';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      title: t('preK'),
      age: languageChooser('Ages 3-4', '3-4 yosh', '3-4 лет'),
      description: t('preKDescription'),
      features: [t('preKF1'), t('preKF2'), t('preKF3'), t('preKF4'),]
    },
    {
      title: t('kindergarten'),
      age: languageChooser('Ages 5-6', '5-6 yosh', '5-6 лет'),
      description: t('kindergartenDescription'),
      features: [t('kindergartenF1'), t('kindergartenF2'), t('kindergartenF3'), t('kindergartenF4'),]
    },
    {
      title: t('elementary'),
      age: languageChooser('Ages 6-9', '6-9 yosh', '6-9 лет'),
      description: t('elementaryDescription'),
      features: [t('elementaryF1'), t('elementaryF2'), t('elementaryF3'), t('elementaryF5'),]
    },
    {
      title: t('madrasa'),
      age: languageChooser('All Ages', ' Har qanday yoshdagilar uchun', 'Для всех возрастов'),
      description: t('madrasaDescription'),
      features: [t('madrasaF1'), t('madrasaF2'), t('madrasaF3'), t('madrasaF4'),]
    }
  ];

  const curriculum = [
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: t('reading'),
      description: t('curriculumDReading')
    },
    {
      icon: <Calculator className="h-8 w-8 text-emerald-600" />,
      title: t('stem'),
      description: t('curriculumDStem')
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: t('islamicStudies'),
      description: t('curriculumDIslamicStudies')
    },
    {
      icon: <Palette className="h-8 w-8 text-emerald-600" />,
      title: t('arts'),
      description: t('curriculumDArts')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('programsTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {languageChooser(
                'Comprehensive educational programs designed to nurture young minds through Islamic values and academic excellence.',
                'Yosh avlod ongini islomiy qadriyatlar va ilmiy mukammallik orqali tarbiyalashga mo‘ljallangan keng qamrovli ta\'lim dasturlari.',
                'Всеобъемлющие образовательные программы, направленные на воспитание юных умов через исламские ценности и академическое совершенство.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <span className="text-sm text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('curriculum')}</h2>
            <p className="text-xl text-gray-600">{languageChooser(
              'A well-rounded education that prepares students for success',
              'Talabalarni muvaffaqiyatga tayyorlaydigan har tomonlama ta\'lim',
              'Всестороннее образование, готовящее студентов к успеху'
            )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((subject, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject.title}</h3>
                <p className="text-gray-600 text-sm">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">{t('ourTeachingMethodology')}</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {t('teachingMethodologyDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('smallClassSizes')}</h3>
                <p className="text-emerald-100">{t('smallClassSizesDesc')}</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('integratedLearning')}</h3>
                <p className="text-emerald-100">{t('integratedLearningDesc')}</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('structuredEnvironment')}</h3>
                <p className="text-emerald-100">{t('structuredEnvironmentDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;