import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "uz" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    newsletter: "News Letter",
    newsletterDesc:
      "Subscribe to our newsletter for the latest updates and news from Al-Quran Islamic School.",
    viewNewsletter: "View News Letter",
    // Navigation
    home: "Home",
    about: "About Us",
    programs: "Programs",
    admissions: "Admissions",
    parentResources: "Parent Resources",
    gallery: "Gallery",
    news: "News & Blog",
    contact: "Contact",

    // Home page
    welcome: "Welcome to Al-Quran Islamic School",
    welcomeSubtitle: "Excellence in Islamic Education for PreK-3rd Grade",
    scheduleTour: "Schedule a Tour",
    enrollNow: "Enroll Now",
    quickFacts: "Quick Facts",
    preK3rd: "PreK to 3rd Grade",
    ohioLocation: "Located in Ohio",
    smallClasses: "Small Class Sizes",
    fullDay: "Full-Day Schedule",
    academicExcellence: "Academic Excellence",
    academicExcellenceDesc:
      "Comprehensive curriculum combining Islamic studies with modern academics",
    islamicValues: "Islamic Values",
    islamicValuesDesc:
      "Character development rooted in Islamic principles and teachings",
    caringCommunity: "Caring Community",
    caringCommunityDesc:
      "Supportive environment where every child is valued and nurtured",
    ourSchoolLife: "Our School Life",
    ourSchoolLifeDesc:
      "Experience the joy of learning in our nurturing environment",
    readyToJoin: "Ready to Join Our School Family?",
    readyToJoinDesc:
      "Contact us today to schedule a tour and learn more about our programs.",

    // About Us
    aboutTitle: "About Al-Quran Islamic School",
    mission: "Our Mission",
    missionText:
      "To provide quality Islamic education that nurtures young minds while instilling strong Islamic values and academic excellence.Our commitment extends beyond traditional academics to encompass the spiritual, moral, and intellectual development of each child. We strive to create confident, caring, and capable Muslim citizens who will contribute positively to society.",
    philosophy: "Our Philosophy",
    philosophyText:
      "We believe in creating a supportive learning environment where children can grow spiritually, academically, and socially.We embrace diverse learning styles and celebrate the unique gifts each child brings to our community. Through small class sizes and personalized attention, we ensure every student reaches their full potential.",
    ourCoreValues: "Our Core Values",
    coreValuesDesc: "The principles that guide everything we do",
    faithBasedLearning: "Faith-Based Learning",
    faithBasedLearningDesc:
      "Integrating Islamic values into every aspect of education",
    academicExcellenceTitle: "Academic Excellence",
    academicExcellenceAboutDesc:
      "Preparing students for success in this world and the hereafter",
    communityFocus: "Community Focus",
    communityFocusDesc:
      "Building strong relationships between students, families, and teachers",
    characterDevelopment: "Character Development",
    characterDevelopmentDesc:
      "Nurturing moral and ethical growth alongside academic achievement",
    ourStory: "Our Story",
    accreditationStandards: "Accreditation & Standards",
    accreditationStandardsDesc:
      "As a non-charter private school, we maintain high educational standards while providing the flexibility to integrate Islamic education throughout our curriculum. Our programs meet and exceed state educational requirements.",
    yearsOfService: "Years of Service",
    studentsServed: "Students Served",
    dedicatedStaff: "Dedicated Staff",
    schoolDescription:
      "Al-Quran Islamic School is a private Islamic educational institution in Ohio, USA, offering a nurturing and faith-centered learning environment for children from Pre-Kindergarten to 3rd Grade. Our mission is to provide high-quality academic instruction integrated with Islamic teachings, helping children grow intellectually, spiritually, and morally.",
    ourHistoryText1:
      "Al-Quran Islamic School was founded with a vision to provide exceptional Islamic education to the Muslim community in Ohio. Our founders recognized the need for a school that would seamlessly integrate Islamic values with academic excellence.",
    ourHistoryText2:
      "Since our establishment, we have grown from a small community initiative to a respected educational institution serving families throughout the region. Our dedicated team of educators shares a common commitment to nurturing the next generation of Muslim leaders.",
    ourHistoryText3:
      "Today, we continue to uphold our founding principles while adapting to meet the evolving needs of our students and community. We are proud to be a non-charter school that maintains high standards of academic and Islamic education.",

    followUs: "Follow Us",
    quickLink: "Quick Links",
    allRightReserved: "Al-Quran Islamic School. All rights reserved.",
    requiredFields:
      "Required fields. By submitting this form, you agree to be contacted by Al-Quran Islamic School regarding your application.",

    // Programs
    programsTitle: "Our Programs",
    kindergarten: "Kindergarten Program",
    preK: "PreK Program",
    elementary: "1st-3rd Grade",
    madrasa: "Full-time Madrasa",
    afterSchool: "After-school Program",
    curriculum: "Curriculum",
    stem: "STEM Education",
    reading: "Reading & Literacy",
    islamicStudies: "Islamic Studies",
    arts: "Arts & Creativity",
    sampleDailySchedule: "Sample Daily Schedule",
    typicalDay: "A typical day at Al-Quran Islamic School",
    ourTeachingMethodology: "Our Teaching Methodology",
    teachingMethodologyDesc:
      "We employ traditional Islamic educational principles combined with modern pedagogical approaches to create an engaging and effective learning environment.",
    smallClassSizes: "Small Class Sizes",
    smallClassSizesDesc: "12-15 students per class for personalized attention",
    integratedLearning: "Integrated Learning",
    integratedLearningDesc: "Islamic values woven throughout all subjects",
    structuredEnvironment: "Structured Environment",
    structuredEnvironmentDesc:
      "Consistent routines that promote learning and growth",

    // Programs Features
    preKDescription:
      "Foundation building through play-based learning and early Islamic education",
    preKF1: "Basic Arabic letters",
    preKF2: "Quran recitation",
    preKF3: "Social skills",
    preKF4: "Motor development",

    kindergartenDescription:
      "Comprehensive preparation for elementary education with Islamic values",
    kindergartenF1: "Reading readiness",
    kindergartenF2: "Math foundations",
    kindergartenF3: "Islamic stories",
    kindergartenF4: "Creative arts",

    elementaryDescription:
      "Full academic curriculum integrated with Islamic studies",
    elementaryF1: "Core subjects",
    elementaryF2: "Quran memorization",
    elementaryF3: "Arabic language",
    elementaryF4: "Science exploration",

    madrasaDescription:
      "Intensive Islamic education focusing on Quran and religious studies",
    madrasaF1: "Quran memorization",
    madrasaF2: "Islamic jurisprudence",
    madrasaF3: "Arabic grammar",
    madrasaF4: "Hadith studies",

    curriculumDReading:
      "Comprehensive literacy program with phonics-based approach",
    curriculumDStem:
      "Mathematics and science education with hands-on experiments",
    curriculumDIslamicStudies:
      "Quran, Hadith, Islamic history, and Arabic language",
    curriculumDArts: "Creative expression through art, music, and storytelling",

    submiting: "Submitting...",
    submitAnotherApp: "Submit Another Application",
    submitDiscus:
      "Thank you for your application. We will contact you soon to discuss the next steps.",
    submitOk: "Application Submitted Successfully!",

    // Admissions
    admissionsTitle: "Admissions",
    howToApply: "How to Apply",
    howToApplyDesc:
      "Follow these simple steps to begin the application process",
    enrollmentTimeline: "Enrollment Timeline",
    enrollmentTimelineDesc: "Important dates for the 2024-2025 school year",
    tuitionFees: "Tuition & Fees",
    faqs: "Frequently Asked Questions",
    faqsDesc: "Common questions about our school and programs",
    submitApplication: "Submit Application",
    submitApplicationDesc:
      "Complete our online registration form with required information",
    scheduleVisit: "Schedule Visit",
    scheduleVisitDesc:
      "Tour our facilities and meet with our administrative team",
    interviewProcess: "Interview Process",
    interviewProcessDesc:
      "Brief interview with parents and student (age-appropriate)",
    enrollmentConfirmation: "Enrollment Confirmation",
    enrollmentConfirmationDesc:
      "Receive acceptance letter and complete enrollment process",
    reasonForRequest:
      "All fields are required. By submitting this form, you agree to be contacted by Al-Quran Islamic School regarding your inquiry.",
    underAdmissionTitle:
      "Join our school family and give your child the gift of quality Islamic education combined with academic excellence.",
    tuitionInfo1: "Contact us for current tuition rates and payment plans",
    tuitionInfo2: "Competitive rates with flexible payment options available",
    tuitionInfo3: "Need-based scholarships available for qualifying families",
    tuitionInfo4:
      "Please contact our admissions office for detailed tuition information and to discuss payment plans.",

    question1: "What age groups do you serve?",
    answer1:
      "We serve children from PreK (age 3) through 3rd grade (typically age 8-9).",
    question2: "What are your class sizes?",
    answer2:
      "We maintain small class sizes of 12-15 students to ensure personalized attention.",
    question3: "Do you provide transportation?",
    answer3:
      "We do not provide bus transportation. Parents are responsible for drop-off and pick-up.",
    question4: "What is your curriculum like?",
    answer4:
      "We offer a comprehensive curriculum that integrates Islamic studies with core academic subjects including Math, English, Science, and Social Studies.",
    question5: "Are meals provided?",
    answer5:
      "Students bring their own lunches. We provide guidance on halal lunch options.",
    question6: "What are your school hours?",
    answer6:
      "Our full-day program runs from 8:00 AM to 3:30 PM, Monday through Friday.",

    program: "Program",
    financialAid: "Financial Aid",

    period1: "December - February",
    application1: "Applications Open",
    period2: "March - April",
    application2: "Tours & Interviews",
    period3: "May",
    application3: "Acceptance Notifications",
    period4: "June - July",
    application4: "Orientation & School Begins",
    period5: "August",
    application5: "Enrollment Finalization",

    registrationForm: "Student Registration Form 2025-2026",
    select: "Select...",

    acceptTerms:
      "Before submitting the form, you must read and accept our Terms and Conditions.",
    acceptforAccidentallyTreatment:
      "* In the event of an accident or illness, if the school is unable to contact emergency contacts and the emergency is acute, I hereby authorize school staff to go to emergency medical care, including ambulance, emergency room. I hereby authorize the responsible physician to perform any emergency treatment necessary at my expense (leave initiation of consent) ",

    medicalHistory: "Student's Medical History",
    medicalTaking: "Medication currently taking",
    allergy: "Allergy to medications",
    foodAllergy: "Food allergies",
    enviromentalAllergy: "Environmental allergies",
    chronicConditions: "Chronic health conditions",
    headInjury: "Did the student ever suffer a head injury?",
    diagnosesByDoctor: "Diagnoses made by a doctor",
    medicalConsent: "Consent for emergency treatment",
    reviewCarefully: "⚠️ Please Review Carefully",
    conset1:
      "I authorize the school to seek emergency medical care for my child.",
    conset2:
      "This may include ambulance transport or emergency room admission.",
    conset3: "I accept full responsibility for any medical expenses incurred.",
    conset4:
      "I understand that the school will make every effort to contact me or my emergency contacts in case of an emergency.",
    parentSignature: "Parent's Signature",
    acceptTerm: "You were agree to all terms and policies. ✔️",
    acceptTerm1: "I have read and agree to all terms and policies.",
    clearSignature: "Clear Signature",
    errorSubmiting:
      "There was an error submitting your application. Please try again or contact us directly.",
    requiredSign:
      "Please sign. By doing so, you agree to our terms and conditions.",
    remindRequiredConset:
      "Please review and accept to the terms and conditions in the application before submitting the form.",
    // Contact
    contactTitle: "Contact Us",
    contactDesc:
      "We'd love to hear from you. Get in touch with us to learn more about our programs or schedule a visit.",
    locations: "Our Locations",
    locationsDesc: "Visit us at any of our convenient locations",
    contactForm: "Contact Form",
    contactFormDesc: "Send us a message and we'll get back to you soon",
    schoolHours: "School Hours",
    stayInformed: "Stay Informed",
    stayInformedDesc:
      "Subscribe to our newsletter to receive the latest news and updates directly in your inbox.",
    contactInquiryType: "Select inquiry type...",

    // Gallery
    galleryDesc:
      "Discover the vibrant life at Al-Quran Islamic School through photos of our students, classrooms, and activities.",
    classroomActivities: "Classroom Activities",
    studentLife: "Student Life",
    events: "Events",
    all: "All",

    // Gallery alts
    galleryAlt1: "Students learning in classroom",
    galleryAlt2: "Interactive learning session",
    galleryAlt3: "Happy students",
    galleryAlt4: "School activities",
    galleryAlt5: "Learning environment",
    galleryAlt6: "Student engagement",
    galleryAlt7: "Educational activities",

    // News
    newsDesc:
      "Stay updated with the latest news, announcements, and insights from Al-Quran Islamic School.",
    featured: "Featured",
    academics: "Academics",
    schoolUpdates: "School Updates",
    values: "Values",
    subscribe: "Subscribe",

    // New articles
    articlesTitle1: "New STEM Program Launches This Fall",
    articlesTitle2: "Parent-Teacher Conference Success",
    articlesTitle3: "Islamic Heritage Month Celebration",
    articlesTitle4: "Reading Program Shows Outstanding Results",
    articlesTitle5: "Character Education: Building Strong Muslims",
    articlesTitle6: "Student Art Exhibition Showcases Creativity",

    articlesExcerpt1:
      "We are excited to introduce our enhanced STEM curriculum that will provide students with hands-on learning experiences in science, technology, engineering, and mathematics.",
    articlesExcerpt2:
      "Our recent parent-teacher conferences saw excellent attendance with meaningful discussions about student progress and collaborative planning for continued growth.",
    articlesExcerpt3:
      "Students and families came together to celebrate Islamic heritage through cultural presentations, traditional foods, and educational displays.",
    articlesExcerpt4:
      "Our phonics-based reading program continues to show remarkable improvements in student literacy rates across all grade levels.",
    articlesExcerpt5:
      "Learn about our approach to character development and how we integrate Islamic values into daily learning experiences.",
    articlesExcerpt6:
      "Our young artists displayed their creative works in our annual art exhibition, demonstrating the importance of creative expression in education.",

    articleDate1: "March 10, 2024",
    articleDate2: "March 5, 2024",
    articleDate3: "February 28, 2024",
    articleDate4: "February 20, 2024",
    articleDate5: "February 15, 2024",
    articleDate6: "February 10, 2024",

    // Parent Resources
    parentResourcesDesc:
      "Everything parents need to stay informed and involved in their child's educational journey.",
    schoolCalendar: "School Calendar",
    schoolCalendarDesc:
      "Important dates, holidays, and school events for the academic year",
    viewCalendar: "View Calendar",
    supplyLists: "Supply Lists",
    supplyListsDesc:
      "Required school supplies and materials for each grade level",
    downloadLists: "Download Lists",
    uniformPolicy: "Uniform Policy",
    uniformPolicyDesc: "Dress code guidelines and uniform requirements",
    viewPolicy: "View Policy",
    parentHandbook: "Parent Handbook",
    parentHandbookDesc: "Comprehensive guide to school policies and procedures",
    downloadPDF: "Download PDF",
    dropoffPickupProcedures: "Drop-off & Pick-up Procedures",
    proceduresDesc: "Important guidelines for student transportation",
    dropoffProcedures: "Drop-off Procedures",
    pickupProcedures: "Pick-up Procedures",
    upcomingEvents: "Upcoming Events",
    upcomingEventsDesc: "Mark your calendars for these important school events",
    stayConnected: "Stay Connected",
    stayConnectedDesc:
      "Subscribe to our newsletter for regular updates about school activities and important announcements.",

    // Parent procedures Description
    dropoffProceduresDesc:
      "Students may be dropped off starting at 7:45 AM. Please use the designated drop-off area and remain in your vehicle. Staff will assist students exiting vehicles.",
    pickupProceduresDesc:
      "Regular dismissal begins at 3:30 PM. Please arrive promptly and display your pick-up tag. Late pick-ups may result in after-care charges.",

    // Important dates
    firstDayOfSchool: "First day of academic school year",
    fallBreak: "Fall break",
    winterBreak: "Winter break",
    springBreak: "Spring break",
    lastDayOfSchool: "Last day of school",
    summerBreak: "Summer break",

    // Upcoming events
    upcomingEventDate1: "March 15",
    upcomingEventDate2: "March 22",
    upcomingEventDate3: "April 5",
    upcomingEventDate4: "April 12",
    upcomingEventDate5: "May 3",

    upcomingEventName1: "Parent-Teacher Conferences",
    upcomingEventName2: "Islamic Heritage Day",
    upcomingEventName3: "Science Fair",
    upcomingEventName4: "Spring Break Begins",
    upcomingEventName5: "Quran Recitation Competition",

    // Form fields
    studentFirstName: "Student's First Name",
    studentLastName: "Student's Last Name",
    dateOfBirth: "Date of Birth",
    residencyAddress: "Residency Address",
    nationality: "Nationality",
    speaksEnglish: "Does your child speak English?",
    languageAtHome: "Language spoken at home",
    motherName: "Mother's Name",
    fatherName: "Father's Name",
    motherPhone: "Mother's Phone",
    fatherPhone: "Father's Phone",
    parentEmail: "Parent's Email",
    emergencyContact: "Emergency Contact Name",
    emergencyPhone: "Emergency Contact Phone",
    submit: "Submit Application",
    required: "Required",
    yes: "Yes",
    no: "No",
    fullName: "Full Name",
    inquiryType: "Inquiry Type",
    generalInquiry: "General Inquiry",
    programDetails: "Program Details",
    enrollmentInformation: "Enrollment Information",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",

    // Common
    learnMore: "Learn More",
    readMore: "Read More",
    viewAll: "View All",
    phone: "Phone",
    email: "Email",
    address: "Address",
    enterYourEmail: "Enter your email",
    submissionSuccess: "Application Submitted Successfully!",
    submissionSuccessDesc:
      "Thank you for your application. We will contact you soon to discuss the next steps.",
    backToContact: "Submit Another Application",
  },
  uz: {
    newsletter: "Yangiliklar",
    newsletterDesc:
      "Al-Quran Islom maktabidan so'nggi yangiliklar va ma'lumotlarni olish uchun yangiliklarimizga obuna bo'ling.",
    viewNewsletter: "Yangiliklarni ko'rish",
    // Navigation
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    programs: "Dasturlar",
    admissions: "Qabul",
    parentResources: "Ota-ona resurslari",
    gallery: "Galereya",
    news: "Yangiliklar va blog",
    contact: "Aloqa",

    // Home page
    welcome: "Al-Quran Islom maktabiga xush kelibsiz",
    welcomeSubtitle:
      "Maktabgacha yoshdan 3-sinfgacha islom ta'limida mukammallik",
    scheduleTour: "Ekskursiya rejalashtirish",
    enrollNow: "Hoziroq ro'yxatdan o'ting",
    quickFacts: "Qisqa ma'lumotlar",
    preK3rd: "Maktabgacha yoshdan 3-sinfgacha",
    ohioLocation: "Ogayo shtatida joylashgan",
    smallClasses: "Kichik sinf o'lchamlari",
    fullDay: "To'liq kunlik jadval",
    academicExcellence: "Akademik mukammallik",
    academicExcellenceDesc:
      "Islom fanlarini zamonaviy akademik fanlar bilan birlashtiruvchi keng qamrovli o'quv dasturi",
    islamicValues: "Islom qadriyatlari",
    islamicValuesDesc:
      "Islom tamoyillari va ta'limotlariga asoslangan xarakter rivojlantirish",
    caringCommunity: "G'amxo'r jamoa",
    caringCommunityDesc:
      "Har bir bola qadrlanadigan va parvarish qilinadigan qo'llab-quvvatlovchi muhit",
    ourSchoolLife: "Bizning maktab hayoti",
    ourSchoolLifeDesc:
      "Bizning g'amxo'r muhitimizda o'rganish quvonchini his eting",
    readyToJoin: "Bizning maktab oilamizga qo'shilishga tayyormisiz?",
    readyToJoinDesc:
      "Ekskursiya rejalashtirish va dasturlarimiz haqida ko'proq ma'lumot olish uchun bugun biz bilan bog'laning.",

    // About Us
    aboutTitle: "Al-Quran Islom maktabi haqida",
    mission: "Bizning vazifamiz",
    missionText:
      "Yosh onglarni tarbiyalab, kuchli islom qadrliyatlari va akademik mukammallikni singdiruvchi sifatli islom ta'limini berish. Bizning majburiyatimiz har bir bolaning ma'naviy, axloqiy va intellektual rivojlanishini qamrab olish uchun an'anaviy akademiklardan tashqariga chiqadi. Biz jamiyatga ijobiy hissa qo'shadigan o'ziga ishongan, g'amxo'r va qobiliyatli musulmon fuqarolarni yaratishga intilamiz.",
    philosophy: "Bizning falsafamiz",
    philosophyText:
      "Biz bolalar ruhiy, akademik va ijtimoiy jihatdan o'sa oladigan qo'llab-quvvatlovchi ta'lim muhitini yaratishga ishonamiz. Biz turli xil ta'lim uslublarini qabul qilamiz va har bir bolaning jamiyatimizga olib keladigan noyob sovg'alarini nishonlaymiz. Kichik sinflar va shaxsiy e'tibor orqali biz har bir talaba o'zining to'liq salohiyatiga erishishini ta'minlaymiz.",
    ourCoreValues: "Bizning asosiy qadriyatlarimiz",
    coreValuesDesc: "Bizning barcha ishlarimizni yo'naltiruvchi tamoyillar",
    faithBasedLearning: "E'tiqodga asoslangan ta'lim",
    faithBasedLearningDesc:
      "Ta'limning har bir jihatiga islom qadriyatlarini singdirish",
    academicExcellenceTitle: "Akademik mukammallik",
    academicExcellenceAboutDesc:
      "O'quvchilarni bu dunyoda va oxiratda muvaffaqiyatga tayyorlash",
    communityFocus: "Jamoa e'tibori",
    communityFocusDesc:
      "O'quvchilar, oilalar va o'qituvchilar o'rtasida mustahkam munosabatlar o'rnatish",
    characterDevelopment: "Xarakter rivojlantirish",
    characterDevelopmentDesc:
      "Akademik yutuqlar bilan birga axloqiy va etik o'sishni tarbiyalash",
    ourStory: "Bizning hikoyamiz",
    accreditationStandards: "Akkreditatsiya va standartlar",
    accreditationStandardsDesc: `Charter bo'lmagan xususiy maktab sifatida biz yuqori ta'lim standartlarini saqlab qolamiz va shu bilan birga o'quv dasturimizga islomiy ta'limni integratsiya qilish uchun moslashuvchanlikni ta'minlaymiz. Bizning dasturlarimiz davlat ta'lim talablariga javob beradi va ulardan oshadi.`,
    yearsOfService: "Yillik xizmat",
    studentsServed: "Xizmat ko'rsatilgan talabalar",
    dedicatedStaff: "Fidoyi xodimlar",
    schoolDescription:
      "Al-Quron Islom maktabi AQShning Ogayo shtatidagi xususiy islom taʼlim muassasasi boʻlib, bolalar bogʻchasidan 3-sinfgacha boʻlgan bolalar uchun tarbiyaviy va eʼtiqodga asoslangan taʼlim muhitini taklif etadi. Bizning vazifamiz islom ta’limotlari bilan uyg‘unlashtirilgan yuqori sifatli akademik ta’lim berish, bolalarning intellektual, ma’naviy va axloqiy jihatdan o‘sishiga yordam berishdir.",
    ourHistoryText1:
      "Al-Qur'on Islom maktabi Ogayo shtatidagi musulmonlar jamoasiga alohida islomiy ta'lim berish niyatida tashkil etilgan. Muassislarimiz islomiy qadriyatlarni akademik mukammallik bilan uzviy bog‘laydigan maktab zarurligini tan oldilar.",
    ourHistoryText2:
      "Tashkil etilganimizdan beri biz kichik jamoat tashabbusidan butun mintaqadagi oilalarga xizmat ko'rsatadigan obro'li ta'lim muassasasiga aylandik. Bizning fidoyi o‘qituvchilar jamoasi musulmon yetakchilarning keyingi avlodini tarbiyalashda umumiy majburiyatga ega.",
    ourHistoryText3:
      "Bugungi kunda biz asos solingan tamoyillarimizga sodiq qolgan holda, o‘quvchilarimiz va jamiyatimizning o‘zgarib borayotgan ehtiyojlariga moslashishda davom etmoqdamiz. Biz akademik va islomiy ta'limning yuqori standartlarini qo'llab-quvvatlaydigan nonizom maktab ekanligimizdan faxrlanamiz.",

    followUs: "Bizni kuzatib boring",
    quickLink: "Tez havolalar",
    allRightReserved: "Al-Quron islom maktabi. Barcha huquqlar himoyalangan.",
    requiredFields: `Majburiy maydonlar. Ushbu shaklni topshirish orqali siz arizangiz bo'yicha Al- Quron Islom maktabi bilan bog'lanishga rozilik bildirasiz.`,

    // Programs
    programsTitle: "Bizning dasturlarimiz",
    kindergarten: "Bog'cha dasturi",
    preK: "Maktabgacha tayyorlov dasturi",
    elementary: "1-3 sinflar",
    madrasa: "To'liq vaqtli madrasa",
    afterSchool: "Maktabdan keyingi dastur",
    curriculum: "O'quv dasturi",
    stem: "STEM ta'limi",
    reading: "O'qish va savodxonlik",
    islamicStudies: "Islom fanlari",
    arts: "San'at va ijodkorlik",
    sampleDailySchedule: "Kunlik jadval namunasi",
    typicalDay: "Al-Quran Islom maktabidagi odatiy kun",
    ourTeachingMethodology: "Bizning o'qitish metodologiyamiz",
    teachingMethodologyDesc:
      "Biz an'anaviy islom ta'lim tamoyillarini zamonaviy pedagogik yondashuvlar bilan birlashtirib, qiziqarli va samarali ta'lim muhitini yaratamiz.",
    smallClassSizes: "Kichik sinf o'lchamlari",
    smallClassSizesDesc: "Shaxsiy e'tibor uchun har sinfda 12-15 o'quvchi",
    integratedLearning: "Integratsiyalashgan ta'lim",
    integratedLearningDesc: "Barcha fanlar bo'ylab o'rilgan islom qadriyatlari",
    structuredEnvironment: "Tuzilgan muhit",
    structuredEnvironmentDesc:
      "O'rganish va o'sishni rag'batlantiruvchi izchil tartiblar",

    // Programs Features
    preKDescription:
      "O‘yin orqali dastlabki o‘quv va islomiy taʼlim asoslarini shakllantirish",
    preKF1: "Arab alifbosi asoslari",
    preKF2: "Qur'on tilovati",
    preKF3: "Ijtimoiy ko‘nikmalar",
    preKF4: "Harakatlanish rivoji",

    kindergartenDescription:
      "Boshlang‘ich ta’limga islomiy qadriyatlar asosida to‘liq tayyorgarlik",
    kindergartenF1: "O‘qishga tayyorgarlik",
    kindergartenF2: "Matematik asoslar",
    kindergartenF3: "Islomiy hikoyalar",
    kindergartenF4: "Ijodiy san’at",

    elementaryDescription:
      "Islomiy taʼlim bilan integratsiyalashgan to‘liq o‘quv dasturi",
    elementaryF1: "Asosiy fanlar",
    elementaryF2: "Qur’on yodlash",
    elementaryF3: "Arab tili",
    elementaryF4: "Fan bilan tanishish",

    madrasaDescription:
      "Qur'on va diniy ta'limga yo'naltirilgan intensiv islomiy ta'lim",
    madrasaF1: "Qur'on yodlash",
    madrasaF2: "Islomiy fiqh",
    madrasaF3: "Arab tili grammatikasi",
    madrasaF4: "Hadis ilmi / Hadislarni o‘rganish",

    curriculumDReading:
      "Fonetikaga asoslangan yondashuv bilan keng qamrovli savodxonlik dasturi.",
    curriculumDStem:
      "Amaliy tajribalar orqali matematika va tabiiy fanlar ta’limi.",
    curriculumDIslamicStudies: "Qur’on, Hadis, Islom tarixi va Arab tili.",
    curriculumDArts: "San’at, musiqa va hikoya orqali ijodiy ifoda.",

    submiting: "Yuborilmoqda...",
    submitAnotherApp: "Boshqa ariza yuboring",
    submitDiscus:
      "Murojaatingiz uchun rahmat. Keyingi qadamlarni muhokama qilish uchun tez orada siz bilan bog'lanamiz.",
    submitOk: `Ariza muvaffaqiyatli topshirildi!`,

    // Admissions
    admissionsTitle: "Qabul",
    howToApply: "Qanday ariza berish",
    howToApplyDesc:
      "Ariza berish jarayonini boshlash uchun ushbu oddiy qadamlarni bajaring",
    enrollmentTimeline: "Ro'yxatga olish jadvali",
    enrollmentTimelineDesc: "2024-2025 o'quv yili uchun muhim sanalar",
    tuitionFees: "O'quv haqi va to'lovlar",
    faqs: "Tez-tez beriladigan savollar",
    faqsDesc: "Maktabimiz va dasturlarimiz haqida umumiy savollar",
    submitApplication: "Ariza yuborish",
    submitApplicationDesc:
      "Kerakli ma'lumotlar bilan onlayn ro'yxatdan o'tish formasini to'ldiring",
    scheduleVisit: "Tashrif rejalashtirish",
    scheduleVisitDesc:
      "Bizning ob'ektlarimizni ko'ring va ma'muriy jamoamiz bilan uchrashing",
    interviewProcess: "Suhbat jarayoni",
    interviewProcessDesc:
      "Ota-onalar va o'quvchi bilan qisqa suhbat (yoshga mos)",
    enrollmentConfirmation: "Ro'yxatga olishni tasdiqlash",
    enrollmentConfirmationDesc:
      "Qabul xatini oling va ro'yxatga olish jarayonini yakunlang",
    reasonForRequest:
      "Barcha maydonlar talab qilinadi. Ushbu shaklni yuborish orqali siz so'rovingiz bo'yicha Al-Quron Islom maktabi bilan bog'lanishga rozilik bildirasiz.",
    underAdmissionTitle: `Bizning maktab oilamizga qo'shiling va farzandingizga sifatli islomiy ta'lim va akademik mukammallikni sovg'a qiling.`,
    tuitionInfo1: `Joriy o'quv stavkalari va to'lov rejalari uchun biz bilan bog'laning`,
    tuitionInfo2: `Moslashuvchan to'lov imkoniyatlari mavjud bo'lgan raqobatbardosh tariflar`,
    tuitionInfo3: `Ehtiyojga asoslangan stipendiyalar malakali oilalar uchun mavjud`,
    tuitionInfo4: `Iltimos, oʻqish toʻlovi haqida batafsil maʼlumot olish va toʻlov rejalarini muhokama qilish uchun qabul komissiyamiz bilan bogʻlaning.`,

    question1: `Siz qaysi yosh guruhlariga xizmat qilasiz?`,
    answer1:
      "Biz PreK (3 yosh) dan 3-sinfgacha (odatda 8-9 yosh) bolalarga xizmat qilamiz.",
    question2: "Sizning sinflaringiz qancha?",
    answer2: `Biz shaxsiy e'tiborni ta'minlash uchun 12-15 o'quvchidan iborat kichik sinflarni saqlaymiz.`,
    question3: "Siz transport bilan ta'minlaysizmi?",
    answer3:
      "Biz avtobus transportini ta'minlamaymiz. Ota-onalar olib ketish va olib ketish uchun javobgardir.",
    question4: `Sizning o'quv dasturingiz qanday?`,
    answer4: `Biz islomiy fanlarni matematika, ingliz tili, fan va ijtimoiy fanlar kabi asosiy akademik fanlar bilan birlashtirgan keng qamrovli o‘quv dasturini taklif etamiz.`,
    question5: `Ovqat beriladimi?`,
    answer5: `Talabalar tushliklarini o'zlari olib kelishadi. Biz halol tushlik variantlari bo'yicha ko'rsatmalar beramiz.`,
    question6: `Sizning maktab soatlaringiz qancha?`,
    answer6: `To'liq kunlik dasturimiz dushanbadan jumagacha soat 8:00 dan 15:30 gacha ishlaydi.`,

    program: "Dastur",
    financialAid: "Moliyaviy yordam",

    registrationForm: "Talaba ro'yxatga olish shakli 2025-2026",
    select: "Tanlang...",

    period1: `Dekabr - fevral`,
    application1: `Ilovalar ochiq`,
    period2: "Mart - aprel",
    application2: "Ekskursiyalar va intervyular",
    period3: "May",
    application3: "Qabul qilish bildirishnomalari",
    period4: "Iyun - iyul",
    application4: "Orientatsiya va maktab boshlanadi",
    period5: "Avgust",
    application5: "Ro'yxatga olishni yakunlash",

    acceptTerms:
      "Formani yuborishdan oldin, siz bizning Foydalanish shartlarimizni o‘qib chiqishingiz va qabul qilishingiz kerak.",
    acceptforAccidentallyTreatment:
      "* Baxtsiz hodisa yoki kasallik yuz bersa va maktab favqulodda aloqa uchun shaxslar bilan bog‘lana olmasa, maktab xodimlariga tez tibbiy yordam ko‘rsatishga (shu jumladan tez yordam chaqirish va kasalxonaga olib borish) ruxsat beraman. Shuningdek, zarurat tug‘ilganda shifokor tomonidan kerakli davolashni amalga oshirishga roziman (bu xizmat xarajatlari mening hisobimdan bo‘ladi).",

    medicalHistory: "Talabaning tibbiy tarixi",
    medicalTaking: "Hozir qabul qilayotgan dori vositalari",
    allergy: "Dori vositalariga allergiya",
    foodAllergy: "Oziq-ovqatga allergiya",
    enviromentalAllergy: "Atrof-muhitga allergiya",
    chronicConditions: "Surunkali kasalliklar",
    headInjury: "Talaba bosh miya jarohati olganmi?",
    diagnosesByDoctor: "Shifokor tomonidan qo‘yilgan tashxis",
    medicalConsent: "Favqulodda davolashga rozilik",
    reviewCarefully: "⚠️ Iltimos, diqqat bilan o‘qing",
    conset1:
      "Farzandim uchun maktabga tez tibbiy yordamga murojaat qilishga ruxsat beraman.",
    conset2:
      "Bunga tez yordam mashinasida olib ketish yoki shoshilinch bo‘limga murojaat qilish kiradi.",
    conset3:
      "Tibbiy xarajatlarning barchasi uchun javobgarlikni o‘z zimmamga olaman.",
    conset4:
      "Favqulodda holatda maktab men yoki favqulodda aloqa shaxslari bilan bog‘lanishga harakat qilishi tushunarli.",
    parentSignature: "Ota-onaning imzosi",
    acceptTerm: "Siz barcha shartlar va siyosatlarga rozilik bildirdingiz. ✔️",
    acceptTerm1: "Men barcha shartlar va siyosatlarni o‘qidim va roziman.",
    clearSignature: "Imzoni tozalash",
    errorSubmiting:
      "Arizangizni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki biz bilan to'g'ridan-to'g'ri bog'laning.",
    requiredSign: `Imzo qo'yishingiz iltimos qilib qolamiz. Bu orqali siz bizning shartlarimizga rozi bo'lasiz.`,
    remindRequiredConset:
      "Iltimos, shaklni yuborishdan oldin quyidagi ilovani ko'rib chiqing va qabul qiling.",

    // Contact
    contactTitle: "Biz bilan aloqa",
    contactDesc:
      "Sizdan eshitishni xohlaymiz. Dasturlarimiz haqida ko'proq ma'lumot olish yoki tashrif rejalashtirish uchun biz bilan bog'laning.",
    locations: "Bizning manzillarimiz",
    locationsDesc:
      "Bizning qulay manzillarimizdan birortasiga tashrif buyuring",
    contactForm: "Aloqa shakli",
    contactFormDesc: "Bizga xabar yuboring va tez orada javob beramiz",
    schoolHours: "Maktab soatlari",
    stayInformed: "Xabardor bo'ling",
    stayInformedDesc:
      "Eng so'nggi yangiliklar va yangilanishlarni to'g'ridan-to'g'ri pochta qutingizga olish uchun bizning yangiliklar byulletenimizga obuna bo'ling.",
    contactInquiryType: "So'rov turini tanlang...",

    // Gallery
    galleryDesc:
      "O'quvchilarimiz, sinflarimiz va faoliyatlarimizning suratlari orqali Al-Quran Islom maktabidagi jonli hayotni kashf eting.",
    classroomActivities: "Sinf faoliyatlari",
    studentLife: "O'quvchi hayoti",
    events: "Tadbirlar",
    all: "Barchasi",

    // Gallery alts
    galleryAlt1: "O‘quvchilar sinfda ta’lim olmoqda",
    galleryAlt2: "Interaktiv o‘quv mashg‘uloti",
    galleryAlt3: "Baxtli o‘quvchilar",
    galleryAlt4: "Maktabdagi mashg‘ulotlar",
    galleryAlt5: "Ta’lim muhiti",
    galleryAlt6: "O‘quvchilar faolligi",
    galleryAlt7: "Ta’limiy mashg‘ulotlar",

    // News
    newsDesc:
      "Al-Quran Islom maktabidan eng so'nggi yangiliklar, e'lonlar va tushunchalar bilan yangilanib turing.",
    featured: "Tanlangan",
    academics: "Akademik",
    schoolUpdates: "Maktab yangiliklari",
    values: "Qadriyatlar",
    subscribe: "Obuna bo'lish",

    // New articles
    articlesTitle1: "Yangi STEM dasturi shu kuzda boshlanadi",
    articlesTitle2: "Ota-ona va o‘qituvchi uchrashuvi muvaffaqiyatli o‘tdi",
    articlesTitle3: "Islomiy meros oyini nishonlash",
    articlesTitle4: "O‘qish dasturi ajoyib natijalarni ko‘rsatmoqda",
    articlesTitle5: "Xarakter tarbiyasi: Kuchli musulmonlarni tarbiyalash",
    articlesTitle6:
      "O‘quvchilar san’at ko‘rgazmasida ijodkorlikni namoyon etdi",

    articlesExcerpt1:
      "Biz o‘quvchilarga fan, texnologiya, muhandislik va matematika bo‘yicha amaliy ta’lim beradigan yangi STEM dasturini joriy qilayotganimizdan xursandmiz.",
    articlesExcerpt2:
      "Yaqinda o‘tkazilgan ota-ona va o‘qituvchi uchrashuvlarida faol ishtirok etildi, o‘quvchilar taraqqiyoti haqida muhim suhbatlar bo‘lib o‘tdi.",
    articlesExcerpt3:
      "O‘quvchilar va oilalar madaniy taqdimotlar, an’anaviy taomlar va ma’rifiy ko‘rgazmalar orqali islomiy merosni nishonladilar.",
    articlesExcerpt4:
      "Fonetik asoslangan o‘qish dasturimiz barcha sinf darajalarida savodxonlik darajasining o‘sishini ko‘rsatmoqda.",
    articlesExcerpt5:
      "Bizning xarakter tarbiyasi yondashuvimiz va islomiy qadriyatlarni kundalik ta’lim jarayoniga qanday qo‘shayotganimiz bilan tanishing.",
    articlesExcerpt6:
      "Yosh rassomlarimiz yillik san’at ko‘rgazmasida o‘z ijodiy ishlarini namoyish qilib, ta’limda ijodkorlikning ahamiyatini ko‘rsatdilar.",

    articleDate1: "2024-yil 10-mart",
    articleDate2: "2024-yil 5-mart",
    articleDate3: "2024-yil 28-fevral",
    articleDate4: "2024-yil 20-fevral",
    articleDate5: "2024-yil 15-fevral",
    articleDate6: "2024-yil 10-fevral",

    // Parent Resources
    parentResourcesDesc:
      "Ota-onalar farzandlarining ta'lim sayohatida xabardor bo'lish va ishtirok etish uchun kerak bo'lgan hamma narsa.",
    schoolCalendar: "Maktab taqvimi",
    schoolCalendarDesc:
      "O'quv yili uchun muhim sanalar, bayramlar va maktab tadbirlari",
    viewCalendar: "Taqvimni ko'rish",
    supplyLists: "Ta'minot ro'yxatlari",
    supplyListsDesc:
      "Har bir sinf darajasi uchun kerakli maktab buyumlari va materiallar",
    downloadLists: "Ro'yxatlarni yuklab olish",
    uniformPolicy: "Forma siyosati",
    uniformPolicyDesc: "Kiyim-kechak qoidalari va forma talablari",
    viewPolicy: "Siyosatni ko'rish",
    parentHandbook: "Ota-ona qo'llanmasi",
    parentHandbookDesc:
      "Maktab siyosati va tartib-qoidalariga keng qamrovli qo'llanma",
    downloadPDF: "PDF yuklab olish",
    dropoffPickupProcedures: "Olib kelish va olib ketish tartiblari",
    proceduresDesc: "O'quvchilarni tashish uchun muhim ko'rsatmalar",
    dropoffProcedures: "Olib kelish tartiblari",
    pickupProcedures: "Olib ketish tartiblari",
    upcomingEvents: "Yaqinlashayotgan tadbirlar",
    upcomingEventsDesc:
      "Ushbu muhim maktab tadbirlari uchun taqvimingizni belgilang",
    stayConnected: "Bog'langan bo'ling",
    stayConnectedDesc:
      "Maktab faoliyatlari va muhim e'lonlar haqida muntazam yangilanishlar uchun bizning yangiliklar byulletenimizga obuna bo'ling.",

    // Parent procedures Description
    dropoffProceduresDesc:
      "O‘quvchilarni ertalab soat 7:45 dan boshlab maktabga olib kelish mumkin. Iltimos, faqat belgilangan tushirish hududidan foydalaning va avtomobilingizdan tushmang. Xodimlar bolalarni mashinadan tushirishda yordam berishadi.",
    pickupProceduresDesc:
      "O‘quvchilarning muntazam chiqish vaqti soat 15:30 da boshlanadi. Iltimos, o‘z vaqtida keling va olib ketish belgisi ni ko‘rsatib turing. Kech olib ketish holatlarida qo‘shimcha g'amxo'rlik uchun to‘lovi olinishi mumkin.",

    // Important dates
    firstDayOfSchool: "Yangi o‘quv yilining birinchi kuni",
    fallBreak: "Kuzgi ta’til",
    winterBreak: "Qishki ta’til",
    springBreak: "Bahorgi ta’til",
    lastDayOfSchool: "Maktabning so‘nggi kuni",
    summerBreak: "Yozgi ta’til",

    // Upcoming events
    upcomingEventDate1: "Mart 15",
    upcomingEventDate2: "Mart 22",
    upcomingEventDate3: "Aprel 5",
    upcomingEventDate4: "Aprel 12",
    upcomingEventDate5: "May 3",

    upcomingEventName1: "Ota-onalar va o‘qituvchilar uchrashuvi",
    upcomingEventName2: "Islomiy meros kuni",
    upcomingEventName3: "Ilmiy ko‘rgazma",
    upcomingEventName4: "Bahorgi ta’til boshlanishi",
    upcomingEventName5: "Qur’on tilovati bo‘yicha musobaqa",

    // Form fields
    studentFirstName: "O'quvchining ismi",
    studentLastName: "O'quvchining familiyasi",
    dateOfBirth: "Tug'ilgan sanasi",
    residencyAddress: "Yashash manzili",
    nationality: "Millati",
    speaksEnglish: "Bolangiz ingliz tilida gapiradimi?",
    languageAtHome: "Uyda gapiriluvchi til",
    motherName: "Onaning ismi",
    fatherName: "Otaning ismi",
    motherPhone: "Onaning telefoni",
    fatherPhone: "Otaning telefoni",
    parentEmail: "Ota-onaning elektron pochtasi",
    emergencyContact: "Favqulodda vaziyat uchun aloqa",
    emergencyPhone: "Favqulodda vaziyat telefoni",
    submit: "Ariza yuborish",
    required: "Majburiy",
    yes: "Ha",
    no: "Yo'q",
    fullName: "To'liq ism",
    inquiryType: "So'rov turi",
    generalInquiry: "Umumiy so'rov",
    programDetails: "Dastur tafsilotlari",
    enrollmentInformation: "Ro'yxatga olish ma'lumotlari",
    subject: "Mavzu",
    message: "Xabar",
    sendMessage: "Xabar yuborish",

    // Common
    learnMore: "Batafsil",
    readMore: "Davomini o'qish",
    viewAll: "Barchasini ko'rish",
    phone: "Telefon",
    email: "Elektron pochta",
    address: "Manzil",
    enterYourEmail: "Elektron pochtangizni kiriting",
    submissionSuccess: "Ariza muvaffaqiyatli yuborildi!",
    submissionSuccessDesc:
      "Arizangiz uchun rahmat. Keyingi qadamlarni muhokama qilish uchun tez orada siz bilan bog'lanamiz.",
    backToContact: "Yana bir ariza yuborish",
  },
  ru: {
    newsletter: "Новости",
    newsletterDesc:
      "Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления от Исламской школы Аль-Коран.",
    viewNewsletter: "Просмотреть рассылку",
    // Navigation
    home: "Главная",
    about: "О нас",
    programs: "Программы",
    admissions: "Поступление",
    parentResources: "Ресурсы для родителей",
    gallery: "Галерея",
    news: "Новости и блог",
    contact: "Контакты",

    // Home page
    welcome: "Добро пожаловать в исламскую школу Аль-Коран",
    welcomeSubtitle:
      "Превосходство в исламском образовании для детей от дошкольного до 3-го класса",
    scheduleTour: "Записаться на экскурсию",
    enrollNow: "Записаться сейчас",
    quickFacts: "Краткие факты",
    preK3rd: "От дошкольного до 3-го класса",
    ohioLocation: "Расположена в Огайо",
    smallClasses: "Малые размеры классов",
    fullDay: "Полный день обучения",
    academicExcellence: "Академическое превосходство",
    academicExcellenceDesc:
      "Комплексная учебная программа, сочетающая исламские науки с современными академическими предметами",
    islamicValues: "Исламские ценности",
    islamicValuesDesc:
      "Развитие характера, основанное на исламских принципах и учениях",
    caringCommunity: "Заботливое сообщество",
    caringCommunityDesc:
      "Поддерживающая среда, где каждый ребенок ценится и воспитывается",
    ourSchoolLife: "Наша школьная жизнь",
    ourSchoolLifeDesc: "Испытайте радость обучения в нашей заботливой среде",
    readyToJoin: "Готовы присоединиться к нашей школьной семье?",
    readyToJoinDesc:
      "Свяжитесь с нами сегодня, чтобы запланировать экскурсию и узнать больше о наших программах.",

    // About Us
    aboutTitle: "Об исламской школе Аль-Коран",
    mission: "Наша миссия",
    missionText:
      "Предоставить качественное исламское образование, которое воспитывает молодые умы, прививая сильные исламские ценности и академическое превосходство. Наша приверженность выходит за рамки традиционных академических дисциплин, охватывая духовное, моральное и интеллектуальное развитие каждого ребенка. Мы стремимся создать уверенных, заботливых и способных мусульманских граждан, которые внесут позитивный вклад в общество.",
    philosophy: "Наша философия",
    philosophyText:
      "Мы верим в создание поддерживающей учебной среды, где дети могут расти духовно, академически и социально. Мы принимаем разнообразные стили обучения и празднуем уникальные дары, которые каждый ребенок приносит в наше сообщество. Благодаря небольшим размерам классов и индивидуальному вниманию мы гарантируем, что каждый ученик полностью раскроет свой потенциал.",
    ourCoreValues: "Наши основные ценности",
    coreValuesDesc: "Принципы, которые направляют все, что мы делаем",
    faithBasedLearning: "Обучение на основе веры",
    faithBasedLearningDesc:
      "Интеграция исламских ценностей во все аспекты образования",
    academicExcellenceTitle: "Академическое превосходство",
    academicExcellenceAboutDesc:
      "Подготовка студентов к успеху в этом мире и в загробной жизни",
    communityFocus: "Фокус на сообществе",
    communityFocusDesc:
      "Построение крепких отношений между учениками, семьями и учителями",
    characterDevelopment: "Развитие характера",
    characterDevelopmentDesc:
      "Воспитание морального и этического роста наряду с академическими достижениями",
    ourStory: "Наша история",
    accreditationStandards: "Аккредитация и стандарты",
    accreditationStandardsDesc:
      "Как частная школа без устава, мы поддерживаем высокие образовательные стандарты, обеспечивая гибкость для интеграции исламского образования в нашу учебную программу. Наши программы соответствуют государственным образовательным требованиям и превосходят их.",
    yearsOfService: "Лет служения",
    studentsServed: "Обслуженных студентов",
    dedicatedStaff: "Преданных сотрудников",
    schoolDescription:
      "Al-Quran Islamic School — частное исламское учебное заведение в Огайо, США, предлагающее благоприятную и ориентированную на веру среду обучения для детей от дошкольного возраста до 3-го класса. Наша миссия — предоставлять высококачественное академическое обучение, интегрированное с исламскими учениями, помогая детям расти интеллектуально, духовно и нравственно.",
    ourHistoryText1:
      "Al-Quran Islamic School была основана с целью предоставить исключительное исламское образование мусульманской общине в Огайо. Наши основатели осознали необходимость школы, которая бы органично интегрировала исламские ценности с академическим превосходством.",
    ourHistoryText2:
      "С момента нашего основания мы выросли из небольшой общественной инициативы в уважаемое образовательное учреждение, обслуживающее семьи по всему региону. Наша преданная команда педагогов разделяет общую приверженность воспитанию следующего поколения мусульманских лидеров.",
    ourHistoryText3:
      "Сегодня мы продолжаем придерживаться наших основополагающих принципов, при этом приспосабливаясь к меняющимся потребностям наших студентов и сообщества. Мы гордимся тем, что являемся нечартерной школой, которая поддерживает высокие стандарты академического и исламского образования.",

    followUs: "Подписывайтесь на нас",
    quickLink: "Быстрые ссылки",
    allRightReserved: "Исламская школа Аль-Коран. Все права защищены.",
    requiredFields:
      "Обязательные поля. Отправляя эту форму, вы соглашаетесь, чтобы с вами связались представители Исламской школы Аль-Коран по поводу вашей заявки.",

    // Programs
    programsTitle: "Наши программы",
    kindergarten: "Программа детского сада",
    preK: "Дошкольная программа",
    elementary: "1-3 классы",
    madrasa: "Полнодневная медресе",
    afterSchool: "Послешкольная программа",
    curriculum: "Учебная программа",
    stem: "STEM образование",
    reading: "Чтение и грамотность",
    islamicStudies: "Исламские науки",
    arts: "Искусство и творчество",
    sampleDailySchedule: "Примерное ежедневное расписание",
    typicalDay: "Типичный день в исламской школе Аль-Коран",
    ourTeachingMethodology: "Наша методология преподавания",
    teachingMethodologyDesc:
      "Мы используем традиционные исламские образовательные принципы в сочетании с современными педагогическими подходами для создания увлекательной и эффективной учебной среды.",
    smallClassSizes: "Малые размеры классов",
    smallClassSizesDesc: "12-15 учеников в классе для персонального внимания",
    integratedLearning: "Интегрированное обучение",
    integratedLearningDesc: "Исламские ценности, вплетенные во все предметы",
    structuredEnvironment: "Структурированная среда",
    structuredEnvironmentDesc:
      "Последовательные распорядки, способствующие обучению и росту",

    // Programs Features
    preKDescription: "Образование через игру и основы исламского воспитания",
    preKF1: "Основы арабского алфавита",
    preKF2: "Чтение Корана",
    preKF3: "Социальные навыки",
    preKF4: "Моторное развитие",

    kindergartenDescription:
      "Всесторонняя подготовка к начальному образованию с исламскими ценностями",
    kindergartenF1: "Подготовка к чтению",
    kindergartenF2: "Основы математики",
    kindergartenF3: "Исламские истории",
    kindergartenF4: "Творческое искусство",

    elementaryDescription:
      "Полный учебный план, интегрированный с исламскими науками",
    elementaryF1: "Основные предметы",
    elementaryF2: "Заучивание Корана",
    elementaryF3: "Арабский язык",
    elementaryF4: "Изучение науки",

    madrasaDescription:
      "Интенсивное исламское образование с упором на Коран и религиозные науки",
    madrasaF1: "Заучивание Корана",
    madrasaF2: "Исламская юриспруденция",
    madrasaF3: "Арабская грамматика",
    madrasaF4: "Изучение хадисов",

    curriculumDReading:
      "Всеобъемлющая программа по грамотности с подходом, основанным на фонетике.",
    curriculumDStem:
      "Обучение математике и естественным наукам с практическими экспериментами.",
    curriculumDIslamicStudies: "Коран, Хадисы, история ислама и арабский язык.",
    curriculumDArts:
      "Творческое самовыражение через искусство, музыку и рассказы.",

    submiting: "Отправка...",
    submitAnotherApp: "Подать еще одну заявку",
    submitDiscus:
      "Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время, чтобы обсудить дальнейшие шаги.",
    submitOk: "Заявка успешно отправлена!",

    // Admissions
    admissionsTitle: "Поступление",
    howToApply: "Как подать заявление",
    howToApplyDesc:
      "Следуйте этим простым шагам, чтобы начать процесс подачи заявления",
    enrollmentTimeline: "График зачисления",
    enrollmentTimelineDesc: "Важные даты для учебного года 2024-2025",
    tuitionFees: "Плата за обучение",
    faqs: "Часто задаваемые вопросы",
    faqsDesc: "Общие вопросы о нашей школе и программах",
    submitApplication: "Подать заявление",
    submitApplicationDesc:
      "Заполните нашу онлайн-форму регистрации с необходимой информацией",
    scheduleVisit: "Запланировать визит",
    scheduleVisitDesc:
      "Осмотрите наши помещения и встретьтесь с нашей административной командой",
    interviewProcess: "Процесс собеседования",
    interviewProcessDesc:
      "Краткое собеседование с родителями и учеником (соответствующее возрасту)",
    enrollmentConfirmation: "Подтверждение зачисления",
    enrollmentConfirmationDesc:
      "Получите письмо о зачислении и завершите процесс регистрации",
    reasonForRequest:
      "Все поля обязательны для заполнения. Отправляя эту форму, вы соглашаетесь, чтобы с вами связались представители Исламской школы Аль-Коран по поводу вашего запроса.",
    underAdmissionTitle:
      "Присоединяйтесь к нашей школьной семье и подарите своему ребенку качественное исламское образование в сочетании с академическим превосходством.",
    tuitionInfo1:
      "Свяжитесь с нами, чтобы узнать текущие расценки на обучение и планы оплаты.",
    tuitionInfo2: "Конкурентоспособные цены и гибкие варианты оплаты",
    tuitionInfo3:
      "Стипендии, основанные на нуждах, доступны для семей, имеющих на это право",
    tuitionInfo4:
      "Пожалуйста, свяжитесь с нашей приемной комиссией для получения подробной информации о стоимости обучения и обсуждения планов оплаты.",

    question1: "Какие возрастные группы вы обслуживаете?",
    answer1:
      "Мы обслуживаем детей от дошкольного (3 года) до 3-го класса (обычно 8–9 лет).",
    question2: "Каковы размеры ваших классов?",
    answer2:
      "Мы поддерживаем небольшие группы по 12–15 человек, чтобы обеспечить индивидуальный подход.",
    question3: "Предоставляете ли вы транспорт?",
    answer3:
      "Мы не предоставляем автобусный транспорт. Родители несут ответственность за доставку и сбор детей.",
    question4: "Какова ваша учебная программа?",
    answer4:
      "Мы предлагаем комплексную учебную программу, которая объединяет исламоведение с основными академическими предметами, включая математику, английский язык, естественные науки и обществознание.",
    question5: "Предоставляется ли питание?",
    answer5:
      "Студенты приносят свои обеды. Мы предоставляем рекомендации по выбору халяльных обедов.",
    question6: "Каковы часы занятий в школе?",
    answer6:
      "Наша программа полного дня проводится с 8:00 до 15:30 с понедельника по пятницу.",

    program: "Программа",
    financialAid: "Финансовая помощь",

    registrationForm: "Регистрационная форма студента 2025-2026",
    select: "Выбирать...",

    period1: "Декабрь - Февраль",
    application1: "Приложения открыты",
    period2: "Март - Апрель",
    application2: "Экскурсии и интервью",
    period3: "Mай",
    application3: "Уведомления о принятии",
    period4: "Июнь - Июль",
    application4: "Ориентация и начало школы",
    period5: "Август",
    application5: "Завершение регистрации",

    acceptTerms:
      "Перед отправкой формы вы должны прочитать и принять наши Условия использования.",
    acceptforAccidentallyTreatment:
      "* В случае несчастного случая или болезни, если школа не может связаться с экстренными контактами и ситуация требует неотложной помощи, я разрешаю сотрудникам школы обратиться за экстренной медицинской помощью, включая скорую помощь и приёмное отделение. Я также разрешаю врачу оказать необходимое лечение за мой счёт (оставляя согласие).",
    remindRequiredConset:
      "Пожалуйста, ознакомьтесь с условиями и политиками, прежде чем подписывать и отправлять форму.",

    medicalHistory: "Медицинская история учащегося",
    medicalTaking: "Принимаемые лекарства",
    allergy: "Аллергия на медикаменты",
    foodAllergy: "Пищевая аллергия",
    enviromentalAllergy: "Аллергия на окружающую среду",
    chronicConditions: "Хронические заболевания",
    headInjury: "Были ли у ученика травмы головы?",
    diagnosesByDoctor: "Диагноз, поставленный врачом",
    medicalConsent: "Согласие на экстренное лечение",
    reviewCarefully: "⚠️ Пожалуйста, внимательно ознакомьтесь",
    conset1:
      "Я разрешаю школе обращаться за экстренной медицинской помощью для моего ребёнка.",
    conset2:
      "Это может включать транспортировку на скорой помощи или обращение в приёмное отделение.",
    conset3:
      "Я беру на себя полную ответственность за все понесённые медицинские расходы.",
    conset4:
      "Я понимаю, что школа предпримет все усилия, чтобы связаться со мной или экстренными контактами в случае чрезвычайной ситуации.",
    parentSignature: "Подпись родителя",
    acceptTerm: "Вы согласны со всеми условиями и политиками. ✔️",
    acceptTerm1:
      "Я прочитал(а) и согласен(на) со всеми условиями и политиками.",
    clearSignature: "Очистить подпись",
    errorSubmiting:
      "Произошла ошибка при отправке вашей заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.",
    requiredSign:
      "Пожалуйста, подпишите. Поступая таким образом, вы соглашаетесь с нашими условиями.",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactDesc:
      "Мы хотели бы услышать от вас. Свяжитесь с нами, чтобы узнать больше о наших программах или запланировать визит.",
    locations: "Наши адреса",
    locationsDesc: "Посетите нас по любому из наших удобных адресов",
    contactForm: "Форма обратной связи",
    contactFormDesc: "Отправьте нам сообщение, и мы скоро ответим",
    schoolHours: "Школьные часы",
    stayInformed: "Оставайтесь в курсе",
    stayInformedDesc:
      "Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления прямо в свой почтовый ящик.",

    // Gallery
    galleryDesc:
      "Откройте для себя яркую жизнь исламской школы Аль-Коран через фотографии наших учеников, классных комнат и мероприятий.",
    classroomActivities: "Классные мероприятия",
    studentLife: "Студенческая жизнь",

    // Gallery alts
    galleryAlt1: "Ученики учатся в классе",
    galleryAlt2: "Интерактивное учебное занятие",
    galleryAlt3: "Счастливые ученики",
    galleryAlt4: "Школьные мероприятия",
    galleryAlt5: "Учебная среда",
    galleryAlt6: "Активность учеников",
    galleryAlt7: "Образовательные мероприятия",

    // News
    newsDesc:
      "Будьте в курсе последних новостей, объявлений и идей исламской школы Аль-Коран.",
    featured: "Рекомендуемые",
    academics: "Академические",
    events: "События",
    schoolUpdates: "Школьные обновления",
    values: "Ценности",
    all: "Все",
    subscribe: "Подписаться",

    // New articles
    articlesTitle1: "Новая STEM-программа стартует этой осенью",
    articlesTitle2: "Успешное проведение родительско-учительской встречи",
    articlesTitle3: "Празднование месяца исламского наследия",
    articlesTitle4: "Программа чтения демонстрирует отличные результаты",
    articlesTitle5: "Воспитание характера: Формирование сильных мусульман",
    articlesTitle6: "Выставка ученических работ демонстрирует творчество",

    articlesExcerpt1:
      "Мы рады представить нашу усовершенствованную STEM-программу, которая даст ученикам практический опыт в науке, технологиях, инженерии и математике.",
    articlesExcerpt2:
      "На недавних встречах родителей и учителей было отличное присутствие, обсуждались успехи учеников и совместное планирование дальнейшего развития.",
    articlesExcerpt3:
      "Ученики и их семьи объединились, чтобы отметить исламское наследие с помощью культурных презентаций, традиционной кухни и обучающих экспозиций.",
    articlesExcerpt4:
      "Наша программа чтения на основе фонетики продолжает показывать заметные улучшения уровня грамотности среди учеников всех классов.",
    articlesExcerpt5:
      "Узнайте о нашем подходе к воспитанию характера и о том, как мы интегрируем исламские ценности в повседневное обучение.",
    articlesExcerpt6:
      "Наши юные художники представили свои творческие работы на ежегодной выставке, подчеркнув важность самовыражения в образовании.",

    articleDate1: "10 марта 2024 г.",
    articleDate2: "5 марта 2024 г.",
    articleDate3: "28 февраля 2024 г.",
    articleDate4: "20 февраля 2024 г.",
    articleDate5: "15 февраля 2024 г.",
    articleDate6: "10 февраля 2024 г.",

    // Parent Resources
    parentResourcesDesc:
      "Все, что нужно родителям, чтобы оставаться информированными и участвовать в образовательном путешествии своего ребенка.",
    schoolCalendar: "Школьный календарь",
    schoolCalendarDesc:
      "Важные даты, праздники и школьные мероприятия на учебный год",
    viewCalendar: "Посмотреть календарь",
    supplyLists: "Списки принадлежностей",
    supplyListsDesc:
      "Необходимые школьные принадлежности и материалы для каждого класса",
    downloadLists: "Скачать списки",
    uniformPolicy: "Политика формы",
    uniformPolicyDesc: "Правила дресс-кода и требования к форме",
    viewPolicy: "Посмотреть политику",
    parentHandbook: "Справочник для родителей",
    parentHandbookDesc:
      "Комплексное руководство по школьной политике и процедурам",
    downloadPDF: "Скачать PDF",
    dropoffPickupProcedures: "Процедуры высадки и забора",
    proceduresDesc: "Важные рекомендации по транспортировке учеников",
    dropoffProcedures: "Процедуры высадки",
    pickupProcedures: "Процедуры забора",
    upcomingEvents: "Предстоящие события",
    upcomingEventsDesc:
      "Отметьте в своих календарях эти важные школьные мероприятия",
    stayConnected: "Оставайтесь на связи",
    stayConnectedDesc:
      "Подпишитесь на нашу рассылку для регулярных обновлений о школьных мероприятиях и важных объявлениях.",

    // Parent procedures Description
    dropoffProceduresDesc:
      "Ученики могут прибывать в школу начиная с 7:45 утра. Пожалуйста, используйте специально отведённую зону высадки и оставайтесь в автомобиле. Персонал поможет детям выйти из машины.",
    pickupProceduresDesc:
      "Обычное время окончания занятий — 15:30. Пожалуйста, приходите вовремя и показывайте ваш бейдж для получения ребёнка. В случае опоздания может взиматься дополнительная плата за присмотр.",

    // Important dates
    firstDayOfSchool: "Первый учебный день",
    fallBreak: "Осенние каникулы",
    winterBreak: "Зимние каникулы",
    springBreak: "Весенние каникулы",
    lastDayOfSchool: "Последний учебный день",
    summerBreak: "Летние каникулы",

    // Upcoming events
    upcomingEventDate1: "Марта 15",
    upcomingEventDate2: "Марта 2",
    upcomingEventDate3: "Апреля 5",
    upcomingEventDate4: "Апреля 12",
    upcomingEventDate5: "Мая 3",

    upcomingEventName1: "Родительско-учительская конференция",
    upcomingEventName2: "День исламского наследия",
    upcomingEventName3: "Научная ярмарка",
    upcomingEventName4: "Начало весенних каникул",
    upcomingEventName5: "Конкурс чтения Корана",

    // Form fields
    studentFirstName: "Имя ученика",
    studentLastName: "Фамилия ученика",
    dateOfBirth: "Дата рождения",
    residencyAddress: "Адрес проживания",
    nationality: "Национальность",
    speaksEnglish: "Говорит ли ваш ребенок по-английски?",
    languageAtHome: "Язык общения дома",
    motherName: "Имя матери",
    fatherName: "Имя отца",
    motherPhone: "Телефон матери",
    fatherPhone: "Телефон отца",
    parentEmail: "Email родителей",
    emergencyContact: "Контакт для экстренной связи",
    emergencyPhone: "Телефон экстренной связи",
    submit: "Отправить заявление",
    required: "Обязательно",
    yes: "Да",
    no: "Нет",
    fullName: "Полное имя",
    inquiryType: "Тип запроса",
    generalInquiry: "Общий запрос",
    programDetails: "Детали программы",
    enrollmentInformation: "Информация о зачислении",
    subject: "Тема",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",
    contactInquiryType: "Выберите тип запроса...",

    // Common
    learnMore: "Узнать больше",
    readMore: "Читать далее",
    viewAll: "Посмотреть все",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",
    enterYourEmail: "Введите ваш email",
    submissionSuccess: "Заявление успешно отправлено!",
    submissionSuccessDesc:
      "Спасибо за ваше заявление. Мы свяжемся с вами в ближайшее время, чтобы обсудить следующие шаги.",
    backToContact: "Отправить еще одно заявление",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export function languageChooser(
  enText: string,
  uzText: string,
  ruText: string
): string {
  const { language } = useLanguage();
  return language === "en" ? enText : language === "uz" ? uzText : ruText;
}
