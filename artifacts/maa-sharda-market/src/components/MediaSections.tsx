import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const storeExterior = '/images/store-exterior.png';
const ownerStanding = '/images/owner-standing.png';
const storePhoto3 = '/images/store-photo3.png';

export function Gallery() {
  // Store Images: Shelves, Books, Students, Owner
  const images = [
    { src: storeExterior, label: 'Store Exterior & Entrance' },
    { src: ownerStanding, label: 'Massive Competitive Book Stack' },
    { src: storePhoto3, label: 'Fully Stocked Academic Shelves' }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
            Inside the Store
          </h2>
          <p className="text-gray-600 font-sans">
            Take a look inside Maa Sharda Market on Bhawarkua Main Road, Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-md hover:shadow-xl transition-all cursor-zoom-in"
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-heading font-semibold text-sm">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = [
    { name: 'Rahul Sharma', role: 'UPSC Aspirant', text: "Best place for competitive books in Bhanwarkua. They have a great collection of UPSC/MPPSC study material at highly affordable rates." },
    { name: 'Priya Patel', role: 'Medical Student', text: "I ordered my pharmacy books via WhatsApp and got home delivery in Bhanwarkua within 2 hours. Very fast response and genuine publishers." },
    { name: 'Amit Verma', role: 'Engineering Student', text: "The owner is very friendly and always gives a good discount to students. If any book is hard-to-find, they arrange it quickly." },
    { name: 'Neha Gupta', role: 'Reader', text: "They have a huge collection of Hindi novels and general literature. Clean environment and very organized bookshelves." },
    { name: 'Sandeep Tiwari', role: 'UPSC Aspirant', text: "Quick orders, original prints, and friendly owner. Maa Sharda Market is our favorite bookstore since college years." },
    { name: 'Anjali Desai', role: 'College Student', text: "Excellent customer service and home delivery options. Very simple ordering via WhatsApp." }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header with Stats and Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
              Loved by 414+ Students
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex text-[#F9A825]">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={22} className="stroke-[1.5]" />)}
              </div>
              <span className="font-heading font-extrabold text-gray-800 text-lg">4.9 / 5 Rating</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 font-sans text-sm font-semibold">414+ Verified Google Reviews</span>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button 
              onClick={scrollPrev}
              className="p-3 bg-gray-50 hover:bg-red-50 hover:text-primary rounded-full border border-gray-100 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 bg-gray-50 hover:bg-red-50 hover:text-primary rounded-full border border-gray-100 transition-colors shadow-sm cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Embla Slide Wrapper */}
        <div className="embla overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="embla__container flex">
            {reviews.map((review, index) => (
              <div className="embla__slide flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
                <div className="bg-[#FAFAFA] border border-gray-100 p-8 rounded-2xl h-full flex flex-col justify-between relative hover:border-red-100 transition-colors duration-300">
                  <Quote className="absolute top-6 right-6 text-gray-200/80 stroke-[1.5]" size={42} />
                  <div>
                    <div className="flex text-[#F9A825] mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} className="stroke-[1.5]" />)}
                    </div>
                    <p className="text-[#555555] font-sans text-sm md:text-base mb-6 leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm font-heading">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-gray-900 text-sm flex items-center gap-1">
                        {review.name}
                        <span className="bg-green-100 text-green-700 text-[8px] font-extrabold px-1 rounded-sm flex items-center gap-0.5"><Check size={8} strokeWidth={3}/> Verified</span>
                      </h4>
                      <p className="text-xs text-gray-500 font-semibold">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Action CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/KSyg18eVN2WKzUTi9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-primary hover:text-primary bg-white text-gray-700 px-6 py-3 rounded-xl font-heading font-bold text-sm transition-colors shadow-sm cursor-pointer"
          >
            ⭐ Write a Google Review
          </a>
        </div>

      </div>
    </section>
  );
}
