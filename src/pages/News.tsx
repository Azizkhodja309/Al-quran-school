import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { t } = useLanguage();
  const currentLanguage = useLanguage().language;

  const articles_en = [
    {
      id: 1,
      title: 'New STEM Program Launches This Fall',
      excerpt: 'We are excited to introduce our enhanced STEM curriculum that will provide students with hands-on learning experiences in science, technology, engineering, and mathematics.',
      date: 'March 10, 2024',
      author: 'Admin Team',
      category: 'Academics',
      image: 'https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg'
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference Success',
      excerpt: 'Our recent parent-teacher conferences saw excellent attendance with meaningful discussions about student progress and collaborative planning for continued growth.',
      date: 'March 5, 2024',
      author: 'Principal',
      category: 'School Updates',
      image: 'https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg'
    },
    {
      id: 3,
      title: 'Islamic Heritage Month Celebration',
      excerpt: 'Students and families came together to celebrate Islamic heritage through cultural presentations, traditional foods, and educational displays.',
      date: 'February 28, 2024',
      author: 'Events Committee',
      category: 'Events',
      image: 'https://i.postimg.cc/dVtmNmQB/photo-2025-06-04-12-21-53.jpg'
    },
    {
      id: 4,
      title: 'Reading Program Shows Outstanding Results',
      excerpt: 'Our phonics-based reading program continues to show remarkable improvements in student literacy rates across all grade levels.',
      date: 'February 20, 2024',
      author: 'Academic Director',
      category: 'Academics',
      image: 'https://i.postimg.cc/7YqgbMzk/photo-2025-06-04-12-17-23.jpg'
    },
    {
      id: 5,
      title: 'Character Education: Building Strong Muslims',
      excerpt: 'Learn about our approach to character development and how we integrate Islamic values into daily learning experiences.',
      date: 'February 15, 2024',
      author: 'Islamic Studies Team',
      category: 'Values',
      image: 'https://i.postimg.cc/tCXV91bS/photo-2025-06-04-12-20-12.jpg'
    },
    {
      id: 6,
      title: 'Student Art Exhibition Showcases Creativity',
      excerpt: 'Our young artists displayed their creative works in our annual art exhibition, demonstrating the importance of creative expression in education.',
      date: 'February 10, 2024',
      author: 'Art Teacher',
      category: 'Events',
      image: 'https://i.postimg.cc/prkrmZv0/photo-2025-06-04-12-19-42.jpg'
    }
  ];

  const articles_uz = [
    {
      id: 1,
      title: 'Yangi STEM dasturi shu kuzda boshlanadi',
      excerpt: 'Biz ilm-fan, texnologiya, muhandislik va matematikani amaliy o‘rganishga asoslangan yangilangan STEM dasturimizni taqdim etishdan xursandmiz.',
      date: '2024-yil 10-mart',
      author: 'Admin jamoasi',
      category: 'Akademik',
      image: 'https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg'
    },
    {
      id: 2,
      title: 'Ota-ona va o‘qituvchilar uchrashuvi muvaffaqiyatli o‘tdi',
      excerpt: 'Yaqinda bo‘lib o‘tgan ota-ona va o‘qituvchi uchrashuvlarida yuqori ishtirok va samarali muloqotlar bo‘ldi.',
      date: '2024-yil 5-mart',
      author: 'Direktor',
      category: 'Maktab yangiliklari',
      image: 'https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg'
    },
    {
      id: 3,
      title: 'Islomiy meros oyi nishonlandi',
      excerpt: 'O‘quvchilar va oilalar islomiy merosni madaniy taqdimotlar, milliy taomlar va ta’limiy ko‘rgazmalar orqali nishonladilar.',
      date: '2024-yil 28-fevral',
      author: 'Tadbirlar komissiyasi',
      category: 'Tadbirlar',
      image: 'https://i.postimg.cc/dVtmNmQB/photo-2025-06-04-12-21-53.jpg'
    },
    {
      id: 4,
      title: 'O‘qish dasturi ajoyib natijalarni ko‘rsatmoqda',
      excerpt: 'Fonetik asosga ega o‘qish dasturimiz barcha bosqichlarda o‘quvchilarning savodxonligini sezilarli darajada oshirdi.',
      date: '2024-yil 20-fevral',
      author: 'Ta’lim direktori',
      category: 'Akademik',
      image: 'https://i.postimg.cc/7YqgbMzk/photo-2025-06-04-12-17-23.jpg'
    },
    {
      id: 5,
      title: 'Xarakter tarbiyasi: kuchli musulmonlarni tarbiyalash',
      excerpt: 'Bizning xarakter tarbiyasi yondashuvimiz va islomiy qadriyatlarni kundalik ta’limga qo‘shish usullarimiz bilan tanishing.',
      date: '2024-yil 15-fevral',
      author: 'Islomiy ta’lim jamoasi',
      category: 'Qadriyatlar',
      image: 'https://i.postimg.cc/tCXV91bS/photo-2025-06-04-12-20-12.jpg'
    },
    {
      id: 6,
      title: 'O‘quvchilarning san’at ko‘rgazmasi ijodkorlikni namoyon etdi',
      excerpt: 'Yosh rassomlarimiz yillik san’at ko‘rgazmasida o‘z ijod mahsullarini taqdim etishdi, bu esa ta’limdagi ijodiy ifodaning ahamiyatini ko‘rsatdi.',
      date: '2024-yil 10-fevral',
      author: 'San’at o‘qituvchisi',
      category: 'Tadbirlar',
      image: 'https://i.postimg.cc/prkrmZv0/photo-2025-06-04-12-19-42.jpg'
    }
  ];

  const articles_ru = [
    {
      id: 1,
      title: 'Новая STEM-программа стартует этой осенью',
      excerpt: 'Мы рады представить нашу обновлённую STEM-программу, которая предоставит учащимся практические занятия по науке, технологии, инженерии и математике.',
      date: '10 марта 2024 г.',
      author: 'Администрация',
      category: 'Академические',
      image: 'https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg'
    },
    {
      id: 2,
      title: 'Успешная встреча родителей и учителей',
      excerpt: 'На недавней встрече родителей и учителей присутствовало много участников, обсуждались успехи учеников и планы на будущее.',
      date: '5 марта 2024 г.',
      author: 'Директор',
      category: 'Школьные обновления',
      image: 'https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg'
    },
    {
      id: 3,
      title: 'Празднование месяца исламского наследия',
      excerpt: 'Ученики и семьи совместно отпраздновали исламское наследие с культурными презентациями, традиционными блюдами и образовательными выставками.',
      date: '28 февраля 2024 г.',
      author: 'Комитет мероприятий',
      category: 'События',
      image: 'https://i.postimg.cc/dVtmNmQB/photo-2025-06-04-12-21-53.jpg'
    },
    {
      id: 4,
      title: 'Программа чтения показывает отличные результаты',
      excerpt: 'Наша программа чтения, основанная на фонетике, демонстрирует значительное улучшение грамотности учащихся на всех уровнях.',
      date: '20 февраля 2024 г.',
      author: 'Академический директор',
      category: 'Академические',
      image: 'https://i.postimg.cc/7YqgbMzk/photo-2025-06-04-12-17-23.jpg'
    },
    {
      id: 5,
      title: 'Воспитание характера: формирование сильных мусульман',
      excerpt: 'Узнайте о нашем подходе к воспитанию характера и интеграции исламских ценностей в повседневное обучение.',
      date: '15 февраля 2024 г.',
      author: 'Команда исламских наук',
      category: 'Ценности',
      image: 'https://i.postimg.cc/tCXV91bS/photo-2025-06-04-12-20-12.jpg'
    },
    {
      id: 6,
      title: 'Выставка ученических работ демонстрирует креативность',
      excerpt: 'Наши юные художники представили свои работы на ежегодной выставке, демонстрируя важность творческого самовыражения в образовании.',
      date: '10 февраля 2024 г.',
      author: 'Учитель искусства',
      category: 'События',
      image: 'https://i.postimg.cc/prkrmZv0/photo-2025-06-04-12-19-42.jpg'
    }
  ];

  const articles = currentLanguage === 'en' ? articles_en : currentLanguage === 'uz' ? articles_uz : articles_ru;


  const categories = [t('all'), t('academics'), t('schoolUpdates'), t('events'), t('values')];
  const [activeCategory, setActiveCategory] = React.useState(t('all'));

  const filteredArticles = activeCategory === t('all')
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('news')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('newsDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                      {filteredArticles[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{t('featured')}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {filteredArticles[0].date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {filteredArticles[0].author}
                      </div>
                    </div>
                    <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                      {t('readMore')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${article.category === t('academics') ? 'bg-blue-100 text-blue-800' :
                        article.category === t('events') ? 'bg-purple-100 text-purple-800' :
                          article.category === t('values') ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                      }`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                      {t('readMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('stayInformed')}</h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t('stayInformedDesc')}
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;