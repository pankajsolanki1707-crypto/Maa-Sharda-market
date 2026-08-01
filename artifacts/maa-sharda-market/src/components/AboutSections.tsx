import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ThumbsUp, Zap, Clock, ShieldCheck, Tag, Truck } from 'lucide-react';
const ownerSitting = '/images/owner-sitting.png';
const ownerStanding = '/images/owner-standing.png';

export function WhyChooseUs() {
  const benefits = [
    { icon: <BookOpen className="text-primary" />, title: 'Huge Collection', desc: 'From school to UPSC, we have it all.' },
    { icon: <Tag className="text-secondary" />, title: 'Affordable Prices', desc: 'Best discounts in Bhanwarkua.' },
    { icon: <ShieldCheck className="text-accent" />, title: 'Original Books', desc: '100% authentic publisher prints.' },
    { icon: <Zap className="text-yellow-500" />, title: 'Quick Orders', desc: 'Order via WhatsApp in seconds.' },
    { icon: <ThumbsUp className="text-green-500" />, title: 'Friendly Staff', desc: 'Always ready to help you find it.' },
    { icon: <CheckCircle2 className="text-purple-500" />, title: 'Student Discounts', desc: 'Special rates for college students.' },
    { icon: <Truck className="text-whatsapp" />, title: 'Home Delivery', desc: 'Fast delivery across Bhanwarkua.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Students Trust Us</h2>
          <p className="text-gray-600">For years, we've been the go-to destination for readers and students in Indore.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="p-3 bg-gray-50 rounded-xl">{b.icon}</div>
              <div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Just a quick local import for the icon used above
import { BookOpen } from 'lucide-react';

export function MeetOwner() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={ownerSitting} 
                alt="Owner of Maa Sharda Market at his desk" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-30"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              A Legacy of Supporting Students
            </h2>
            
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-gray-800 leading-relaxed mb-8 border-l-4 border-primary pl-6 py-2">
              "Our goal is to help every student find the right book at the right price. We don't just sell books; we support dreams."
            </blockquote>
            
            <p className="text-gray-600 mb-6 text-lg">
              Located in the heart of Bhanwarkua, Maa Sharda Market was built on the belief that quality education resources should be accessible to everyone. Whether you're preparing for UPSC, starting your engineering degree, or just looking for a good novel for the weekend, we're here for you.
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                 <img src={ownerStanding} alt="Owner" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-heading font-bold text-gray-900">The Owner</p>
                <p className="text-sm text-gray-500">Maa Sharda Market</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
