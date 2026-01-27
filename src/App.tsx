import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown, CheckCircle } from 'lucide-react';
import { translations, Language } from './translations';
import { Button } from './components/Button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { SectionCTA } from './components/SectionCTA';
import { TestimonialCard } from './components/TestimonialCard';
import { LessonCard } from './components/LessonCard';
import { VideoCard } from './components/VideoCard';
import { FloatingActionButton } from './components/FloatingActionButton';

// Google Form Links
const GOOGLE_FORM_REVIEW = 'https://forms.gle/gv47ShQy8evdHojG9';
const GOOGLE_FORM_BOOK_LESSON = 'https://forms.gle/8zivcGPFseWp7ekQ8';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => scrollToSection('contact');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl text-[#2D5F3F]">Coach Chris</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('lessons')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.lessons}
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.videos}
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.reviews}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">
                {t.nav.contact}
              </button>
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('lessons')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.lessons}
                </button>
                <button onClick={() => scrollToSection('videos')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.videos}
                </button>
                <button onClick={() => scrollToSection('reviews')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.reviews}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                  {t.nav.contact}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#2D5F3F] to-[#4A8B5C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1765124540365-174dce5433ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG5ldCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk0OTQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Tennis court"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl mb-6 leading-tight font-bold">
              {t.hero.title}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" onClick={scrollToContact}>
                {t.hero.scheduleCTA}
              </Button>
              <div className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call or Text: (949) 247-0290
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#2D5F3F] mb-2">12+</div>
              <div className="text-gray-600">{t.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#2D5F3F] mb-2">2014</div>
              <div className="text-gray-600">{t.stats.coachingSince}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#2D5F3F] mb-2">5</div>
              <div className="text-gray-600">{t.stats.varsityCoach}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">{t.about.title}</h2>
            <p className="text-lg text-gray-600">{t.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-96 lg:h-full">
              <img 
                src="/images/Coach Chris.PNG"
                alt="Coach Chris teaching"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-3 text-[#2D5F3F] font-bold">{t.about.experience.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t.about.experience.description}</p>
                {t.about.experience.highlights && (
                  <ul className="space-y-2">
                    {t.about.experience.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-[#2D5F3F]">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-[#2D5F3F] font-bold">{t.about.philosophy.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t.about.philosophy.description}</p>
                {t.about.philosophy.highlights && (
                  <ul className="space-y-2">
                    {t.about.philosophy.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-[#2D5F3F]">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-[#2D5F3F] font-bold">{t.about.development.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t.about.development.description}</p>
                {t.about.development.highlights && (
                  <ul className="space-y-2">
                    {t.about.development.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-[#2D5F3F]">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Who I Work With */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl mb-6 text-center text-[#2D5F3F] font-bold">{t.about.worksWith.title}</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {t.about.worksWith.categories.map((category, index) => (
                <span 
                  key={index}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#2D5F3F] to-[#4A8B5C] text-white rounded-full text-sm md:text-base"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <SectionCTA text={t.cta.scheduleLesson} onClick={scrollToContact} />
        </div>
      </section>

      {/* Lessons & Pricing Section */}
      <section id="lessons" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">{t.lessons.title}</h2>
            <p className="text-lg text-gray-600">{t.lessons.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <LessonCard
              title={t.lessons.private.title}
              subtitle={t.lessons.private.subtitle}
              price={t.lessons.private.price}
              duration={t.lessons.private.duration}
              features={t.lessons.private.features}
              onSchedule={scrollToContact}
              scheduleText={t.hero.scheduleCTA}
            />
            <LessonCard
              title={t.lessons.group.title}
              subtitle={t.lessons.group.subtitle}
              price={t.lessons.group.price}
              duration={t.lessons.group.duration}
              features={t.lessons.group.features}
              onSchedule={scrollToContact}
              scheduleText={t.hero.scheduleCTA}
            />
          </div>
        </div>
      </section>

      {/* Teaching Videos Section */}
      <section id="videos" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">{t.videos.title}</h2>
            <p className="text-lg text-gray-600">{t.videos.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Top Spin Video - Featured Video */}
            <VideoCard
              title="Top Spin Technique"
              videoSrc="/videos/top spin.MP4"
            />
            {/* Other video categories */}
            {t.videos.categories.slice(1).map((category, index) => {
              const images = [
                'https://images.unsplash.com/photo-1759819599208-0b79a7f3f347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXQlMjBiYWxscyUyMGNvdXJ0fGVufDF8fHx8MTc2OTQ5NDAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1660463528352-50e6f0693e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBzZXJ2ZSUyMHByb2Zlc3Npb25hbCUyMHBsYXllcnxlbnwxfHx8fDE3Njk0OTQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1758346509692-1bf789ac46ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRlbm5pcyUyMHBsYXllciUyMHRyYWluaW5nfGVufDF8fHx8MTc2OTQ5NDAxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1660463531472-a86bb8f9f48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMHRlYWNoaW5nJTIwbGVzc29ufGVufDF8fHx8MTc2OTQ5NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1765124540365-174dce5433ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG5ldCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk0OTQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              ];
              return (
                <VideoCard
                  key={index}
                  title={category}
                  thumbnail={images[index % images.length]}
                  onClick={() => alert(`Video: ${category}`)}
                />
              );
            })}
          </div>

          <SectionCTA text={t.cta.scheduleLesson} onClick={scrollToContact} />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">{t.reviews.title}</h2>
            <p className="text-lg text-gray-600">{t.reviews.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.reviews.items.map((review, index) => (
              <TestimonialCard
                key={index}
                name={review.name}
                role={review.role}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </div>

          <SectionCTA 
            text={t.cta.writeReview} 
            onClick={() => window.open(GOOGLE_FORM_REVIEW, '_blank')} 
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">{t.contact.title}</h2>
            <p className="text-lg text-gray-600">{t.contact.subtitle}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Centered Book a Lesson Button */}
            <div className="flex flex-col items-center justify-center text-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-12 py-4 text-xl"
                onClick={() => window.open(GOOGLE_FORM_BOOK_LESSON, '_blank')}
              >
                {t.contact.form.submit}
              </Button>
              
              <p className="text-sm text-gray-500 mt-4 italic">{t.contact.form.firstTimeOnly}</p>
              
              {/* Contact Info */}
              <div className="mt-10 pt-8 border-t border-gray-200 w-full">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#2D5F3F]" />
                    <span>{t.contact.info.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                    <span>{t.contact.info.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D5F3F] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl mb-2">Coach Chris</h3>
          <p className="text-white/80 mb-4">{t.contact.info.location}</p>
          <p className="text-white/60 text-sm">© 2026 Coach Chris. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <FloatingActionButton text={t.floating.callText} phoneNumber="(949) 247-0290" />
    </div>
  );
}
