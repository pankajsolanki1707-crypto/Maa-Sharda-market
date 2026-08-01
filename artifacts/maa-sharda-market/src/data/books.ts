const collectorSahibaCover = '/images/collector-sahiba.png';
const darkPsychologyCover = '/images/dark-psychology.png';

export interface Book {
  id: string;
  title: string;
  author?: string;
  mrp: number;
  salePrice: number;
  description: string;
  genre: 'Competitive' | 'Self-Help' | 'Biography' | 'Psychology' | 'Fiction';
  image?: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Parmar SSC Fatman',
    mrp: 549,
    salePrice: 449,
    description: 'Complete GK & GS guide for SSC and competitive exams.',
    genre: 'Competitive',
  },
  {
    id: '2',
    title: 'Wings of Fire',
    author: 'APJ Abdul Kalam',
    mrp: 399,
    salePrice: 149,
    description: 'Inspirational autobiography of Dr. APJ Abdul Kalam.',
    genre: 'Biography',
  },
  {
    id: '3',
    title: 'The Courage to Be Disliked',
    mrp: 299,
    salePrice: 149,
    description: 'A life-changing book on freedom, confidence, and happiness.',
    genre: 'Self-Help',
  },
  {
    id: '4',
    title: 'Power',
    author: 'Robert Greene',
    mrp: 699,
    salePrice: 149,
    description: "Robert Greene's lessons on influence and strategic thinking.",
    genre: 'Psychology',
  },
  {
    id: '5',
    title: 'Power of Your Subconscious Mind',
    author: 'Joseph Murphy',
    mrp: 399,
    salePrice: 149,
    description: 'Learn how positive thinking transforms life.',
    genre: 'Self-Help',
  },
  {
    id: '6',
    title: 'Art of War',
    author: 'Sun Tzu',
    mrp: 399,
    salePrice: 149,
    description: 'Classic strategies for leadership and decision-making.',
    genre: 'Self-Help',
  },
  {
    id: '7',
    title: 'Art of Detachment',
    mrp: 299,
    salePrice: 149,
    description: 'Practical guide to emotional balance and peace.',
    genre: 'Self-Help',
  },
  {
    id: '8',
    title: "Don't Believe Everything You Think",
    mrp: 349,
    salePrice: 149,
    description: 'Learn to overcome anxiety and overthinking.',
    genre: 'Psychology',
  },
  {
    id: '9',
    title: 'Art of Reading Minds',
    mrp: 299,
    salePrice: 149,
    description: 'Understand people better using psychology.',
    genre: 'Psychology',
  },
  {
    id: '10',
    title: 'Collector Sahiba (कलेक्टर साहिबा)',
    mrp: 299,
    salePrice: 149,
    description: 'UPSC वाला लव — a bestselling Hindi novel.',
    genre: 'Fiction',
    image: collectorSahibaCover,
  },
  {
    id: '11',
    title: 'Dark Psychology',
    mrp: 499,
    salePrice: 149,
    description: '3 Books in 1: Manipulation, Persuasion & Dark NLP.',
    genre: 'Psychology',
    image: darkPsychologyCover,
  },
];
