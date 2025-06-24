import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const currentLanguage = useLanguage().language;

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: t('faithBasedLearning'),
      description: t('faithBasedLearningDesc')
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: t('academicExcellenceTitle'),
      description: t('academicExcellenceAboutDesc')
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: t('communityFocus'),
      description: t('communityFocusDesc')
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: t('characterDevelopment'),
      description: t('characterDevelopmentDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative max-h-[40vh] from-emerald-50 to-blue-50 bg-gradient-to-tr overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 inline-block px-6 py-3 ">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto px-6 py-3">
            {currentLanguage === 'en'
              ? 'Dedicated to providing quality Islamic education that prepares children for success in both this world and the hereafter.'
              : currentLanguage === 'uz'
                ? 'Farzandlarni bu dunyoda ham, oxiratda ham muvaffaqiyatga tayyorlaydigan sifatli islomiy taʼlim berishga bagʻishlangan.'
                : 'Цель проекта — предоставление качественного исламского образования, которое готовит детей к успеху как в этом мире, так и в загробной жизни.'}
          </p>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mission')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('missionText')}
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('philosophy')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('philosophyText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('ourCoreValues')}</h2>
            <p className="text-xl text-gray-600">{t('coreValuesDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourStory')}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('ourHistoryText1')}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('ourHistoryText2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('ourHistoryText3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg"
                alt="School building"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg"
                alt="Students and teachers"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('accreditationStandards')}</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            {t('accreditationStandardsDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-emerald-100">{t('yearsOfService')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-emerald-100">{t('studentsServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-100">{t('dedicatedStaff')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;