export interface Book {
  id: string;
  title: string;
  author: string;
  mrp: number;
  salePrice: number;
  description: string;
  category: 'Competitive Exams' | 'Novels' | 'Engineering' | 'Medical' | 'School' | 'Stationery';
  isBestseller?: boolean;
  image?: string;
  availability?: 'In Stock' | 'Out of Stock' | 'Fast Shipping';
}

export const books: Book[] = [
  // 10 Bestselling books as requested with original cover image API links
  {
    id: '1',
    title: 'Parmar SSC Fatman',
    author: 'Parmar Sir',
    mrp: 549,
    salePrice: 449,
    description: 'Complete GK & GS guide for SSC, Railways, and other competitive exams.',
    category: 'Competitive Exams',
    isBestseller: true,
    availability: 'In Stock',
    // High-quality competitive textbook styled visual fallback from Unsplash
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Wings of Fire',
    author: 'Dr. APJ Abdul Kalam',
    mrp: 399,
    salePrice: 149,
    description: 'Inspirational autobiography of Dr. APJ Abdul Kalam tracing his early life and career.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg'
  },
  {
    id: '3',
    title: 'The Courage to Be Disliked',
    author: 'Ichiro Kishimi & Fumitake Koga',
    mrp: 299,
    salePrice: 149,
    description: 'A life-changing book on freedom, confidence, and happiness using Adlerian psychology.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9781501197277-L.jpg'
  },
  {
    id: '4',
    title: 'Power',
    author: 'Robert Greene',
    mrp: 699,
    salePrice: 149,
    description: "Robert Greene's essential lessons on influence, power, and strategic thinking.",
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9780140280197-L.jpg'
  },
  {
    id: '5',
    title: 'Power of Your Subconscious Mind',
    author: 'Dr. Joseph Murphy',
    mrp: 399,
    salePrice: 149,
    description: 'Learn how positive thinking and subconscious reprogramming can transform your life.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9780931442124-L.jpg'
  },
  {
    id: '6',
    title: 'Art of War',
    author: 'Sun Tzu',
    mrp: 399,
    salePrice: 149,
    description: 'Classic strategies for leadership, decision-making, and triumph in high-stakes situations.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9781590300848-L.jpg'
  },
  {
    id: '7',
    title: 'Art of Detachment',
    author: 'Valerie Lane',
    mrp: 299,
    salePrice: 149,
    description: 'Practical guide to emotional balance, mental peace, and letting go of what you cannot control.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '8',
    title: "Don't Believe Everything You Think",
    author: 'Joseph Nguyen',
    mrp: 299,
    salePrice: 149,
    description: 'Learn to overcome anxiety, self-sabotaging thoughts, and chronic overthinking.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9789355431356-L.jpg'
  },
  {
    id: '9',
    title: 'Art of Reading Minds',
    author: 'Henrik Fexeus',
    mrp: 299,
    salePrice: 149,
    description: 'Understand people better using body language, psychology, and non-verbal cues.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9781529391077-L.jpg'
  },
  {
    id: '10',
    title: 'Art of Not Overthinking',
    author: 'Valerie Lane',
    mrp: 299,
    salePrice: 149,
    description: 'Simple techniques to reduce stress, silence negative chatter, and improve daily focus.',
    category: 'Novels',
    isBestseller: true,
    availability: 'In Stock',
    image: 'https://covers.openlibrary.org/b/isbn/9781914283086-L.jpg'
  },

  // Supporting items
  {
    id: '11',
    title: 'UPSC IAS General Studies Mock Papers',
    author: 'Drishti Publications',
    mrp: 450,
    salePrice: 320,
    description: 'UPSC civil services prelims test series with detailed explanations.',
    category: 'Competitive Exams',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '12',
    title: 'Higher Engineering Mathematics',
    author: 'B.S. Grewal',
    mrp: 899,
    salePrice: 699,
    description: 'Comprehensive guide on mathematical methods for engineering and science students.',
    category: 'Engineering',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '13',
    title: 'Textbook of Medical Physiology',
    author: 'Guyton & Hall',
    mrp: 2499,
    salePrice: 1999,
    description: 'The standard textbook reference for clinical medical physiology coursework.',
    category: 'Medical',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '14',
    title: 'Class 10 CBSE Science Textbook',
    author: 'NCERT',
    mrp: 190,
    salePrice: 160,
    description: 'Official NCERT syllabus textbook for high school class 10 standard.',
    category: 'School',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '15',
    title: 'Premium Leather Notebook & Pen Set',
    author: 'Sharda Selection',
    mrp: 499,
    salePrice: 299,
    description: 'Elegant ruled notebook with premium ink ballpoint pen.',
    category: 'Stationery',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop'
  }
];
