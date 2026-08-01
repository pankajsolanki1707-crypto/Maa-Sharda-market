import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
const storeExterior = '/images/store-exterior.png';
const ownerStanding = '/images/owner-standing.png';
const storePhoto3 = '/images/store-photo3.png';

export function Gallery() {
  const images = [storeExterior, ownerStanding, storePhoto3];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Inside the Store</h2>
          <p className="text-gray-600">Visit us at Bhawarkua Main Road, Indore.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-sm hover:shadow-xl transition-all"
            >
              <img 
                src={img} 
                alt={`Store view ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  const reviews = [
    { name: 'Rahul Sharma', role: 'UPSC Aspirant', text: "Best place for competitive books in Bhanwarkua. The owner is very polite and always gives a good discount." },
    { name: 'Priya Patel', role: 'Medical Student', text: "I ordered via WhatsApp and got home delivery within 2 hours. Very fast service and genuine books." },
    { name: 'Amit Verma', role: 'Engineering Student', text: "Huge collection! If a book is not available, they arrange it for you within a day. Highly recommended." },
    { name: 'Neha Gupta', role: 'Avid Reader', text: "Great collection of Hindi and English novels. Love the ambience and the affordable pricing." },
    { name: 'Sandeep Tiwari', role: 'Student', text: "I have been buying books from here for 3 years. The trust and relationship they build with students is amazing." },
    { name: 'Anjali Desai', role: 'College Student', text: "They accept returns if you buy the wrong book by mistake. Very helpful staff!" }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Readers Say</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-secondary">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <span className="font-semibold text-gray-700">4.9/5 from 414+ reviews</span>
            </div>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {reviews.map((review, index) => (
              <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
                  <div className="flex text-secondary mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow relative z-10 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
