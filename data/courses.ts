export interface Course {
  id: string;
  name: string;
  description: string;
  ageGroup: 'Kids' | 'Juniors' | 'Adults' | 'All Ages';
  ageRange: string;
  price: number;
  duration: string;
  level: string;
  syllabus: {
    mudras: string[];
    adavus: string[];
    theory: string[];
  };
  prerequisites?: string;
}

export const courses: Course[] = [
  {
    id: 'angikam-basics',
    name: 'Angikam Basics',
    description: 'Introduction to body movements and basic postures in Bharatanatyam. Perfect for young beginners to understand the foundation of this classical dance form.',
    ageGroup: 'Kids',
    ageRange: '5-7 years',
    price: 2500,
    duration: '3 months',
    level: 'Beginner',
    syllabus: {
      mudras: [
        'Pataka (Flag)',
        'Tripataka (Three parts of flag)',
        'Ardhapataka (Half flag)',
        'Kartarimukha (Scissors face)',
        'Mayura (Peacock)'
      ],
      adavus: [
        'Tatta Adavu (Stamping steps) - Basic 8 counts',
        'Natta Adavu (Stretching steps) - Basic 4 counts',
        'Basic standing posture (Aramandi)',
        'Basic hand positions'
      ],
      theory: [
        'Introduction to Bharatanatyam',
        'History and origin',
        'Basic terminology',
        'Understanding rhythm (Tala)',
        'Introduction to Carnatic music'
      ]
    },
    prerequisites: 'None'
  },
  {
    id: 'adavu-module-1',
    name: 'Adavu Module 1',
    description: 'First structured module focusing on fundamental adavus (dance steps) with proper technique and rhythm.',
    ageGroup: 'Kids',
    ageRange: '5-7 years',
    price: 3000,
    duration: '4 months',
    level: 'Beginner',
    syllabus: {
      mudras: [
        'Ardhachandra (Half moon)',
        'Arala (Bent)',
        'Shukatunda (Parrot beak)',
        'Mushti (Fist)',
        'Shikhara (Peak)'
      ],
      adavus: [
        'Tatta Adavu - Complete set (8 variations)',
        'Natta Adavu - Complete set (4 variations)',
        'Kuditta Mettu Adavu (Jumping steps)',
        'Mandi Adavu (Sitting steps) - Basic',
        'Sarikal Adavu (Sliding steps)'
      ],
      theory: [
        'Detailed study of Tatta Adavu',
        'Understanding Adi Tala (8 beat cycle)',
        'Coordination of hands and feet',
        'Basic Abhinaya concepts'
      ]
    },
    prerequisites: 'Angikam Basics or equivalent'
  },
  {
    id: 'adavu-module-2',
    name: 'Adavu Module 2',
    description: 'Advanced adavu training with complex combinations and faster tempos. Building strength and flexibility.',
    ageGroup: 'Juniors',
    ageRange: '8-10 years',
    price: 3500,
    duration: '4 months',
    level: 'Intermediate',
    syllabus: {
      mudras: [
        'Kapitha (Fruit)',
        'Katakamukha (Opening in a bracelet)',
        'Suchi (Needle)',
        'Chandrakala (Crescent moon)',
        'Padmakosha (Lotus bud)'
      ],
      adavus: [
        'Kuditta Mettu Adavu - Advanced variations',
        'Mandi Adavu - Complete set',
        'Sarikal Adavu - Advanced patterns',
        'Tirmanam Adavu (Rhythmic patterns)',
        'Jati Adavu (Combination steps)'
      ],
      theory: [
        'Advanced rhythm patterns',
        'Understanding different Talas',
        'Introduction to Jatis (Rhythmic syllables)',
        'Body alignment and posture correction'
      ]
    },
    prerequisites: 'Adavu Module 1'
  },
  {
    id: 'shloka-mudra-theory',
    name: 'Shloka & Mudra Theory',
    description: 'Comprehensive study of classical hand gestures (Mudras) and Sanskrit verses (Shlokas) used in Bharatanatyam.',
    ageGroup: 'All Ages',
    ageRange: 'All ages',
    price: 2000,
    duration: '2 months',
    level: 'Theory',
    syllabus: {
      mudras: [
        'Asamyuta Hastas (Single hand gestures) - All 28',
        'Samyuta Hastas (Double hand gestures) - All 24',
        'Deva Hastas (Divine gestures)',
        'Dashavatara Hastas (Ten avatars)',
        'Navagraha Hastas (Nine planets)'
      ],
      adavus: [],
      theory: [
        'Abhinaya Darpana - Chapter on Hastas',
        'Meaning and usage of each Mudra',
        'Shloka recitation and meaning',
        'Sanskrit pronunciation',
        'Cultural context and mythology',
        'Application in dance compositions'
      ]
    },
    prerequisites: 'None (Can be taken alongside practical classes)'
  },
  {
    id: 'alarippu-jatiswaram',
    name: 'Alarippu & Jatiswaram',
    description: 'Learning the first two items in a traditional Bharatanatyam recital. Focus on pure dance (Nritta) elements.',
    ageGroup: 'Juniors',
    ageRange: '10+ years',
    price: 4000,
    duration: '5 months',
    level: 'Intermediate',
    syllabus: {
      mudras: [
        'Application of all Asamyuta Hastas',
        'Application of Samyuta Hastas',
        'Mudra combinations for Jatiswaram'
      ],
      adavus: [
        'Complex Adavu combinations',
        'Tirmanam patterns',
        'Jati variations',
        'Speed variations (Vilambit, Madhya, Dhrut)'
      ],
      theory: [
        'Structure of Alarippu',
        'Structure of Jatiswaram',
        'Understanding Swaras (Musical notes)',
        'Raga basics',
        'Tala variations in compositions'
      ]
    },
    prerequisites: 'Adavu Module 2 or equivalent experience'
  },
  {
    id: 'shabdam-abhinaya',
    name: 'Shabdam & Basic Abhinaya',
    description: 'Introduction to expressive dance (Abhinaya) through Shabdam. Learning to convey emotions and stories through dance.',
    ageGroup: 'Juniors',
    ageRange: '11-13 years',
    price: 4500,
    duration: '6 months',
    level: 'Intermediate-Advanced',
    syllabus: {
      mudras: [
        'Abhinaya Mudras (Expressive gestures)',
        'Navarasa Mudras (Nine emotions)',
        'Contextual Mudra usage'
      ],
      adavus: [
        'Abhinaya-oriented Adavu patterns',
        'Slow tempo Adavus for expression',
        'Transition movements'
      ],
      theory: [
        'Introduction to Abhinaya',
        'Navarasa (Nine emotions)',
        'Shabdam structure and meaning',
        'Storytelling through dance',
        'Facial expressions (Mukhabhinaya)',
        'Eye movements (Drishti Bheda)'
      ]
    },
    prerequisites: 'Alarippu & Jatiswaram'
  },
  {
    id: 'varnam-intensive',
    name: 'Varnam Intensive',
    description: 'Master the centerpiece of Bharatanatyam - Varnam. This is the most challenging and important composition combining Nritta and Abhinaya.',
    ageGroup: 'Adults',
    ageRange: '14+ years',
    price: 6000,
    duration: '8 months',
    level: 'Advanced',
    syllabus: {
      mudras: [
        'Advanced Mudra combinations',
        'Complex Abhinaya Mudras',
        'Mudra sequences for Varnam'
      ],
      adavus: [
        'Complex Jati patterns',
        'Advanced Tirmanam',
        'Speed variations and stamina building',
        'Synchronization with music'
      ],
      theory: [
        'Complete Varnam structure',
        'Pallavi, Anupallavi, Charanam',
        'Sahitya (Lyrics) meaning and interpretation',
        'Raga and Tala deep dive',
        'Performance techniques',
        'Endurance and stamina training'
      ]
    },
    prerequisites: 'Shabdam & Basic Abhinaya or 3+ years experience'
  },
  {
    id: 'padam-ashtapadi',
    name: 'Padam & Ashtapadi',
    description: 'Deep dive into expressive dance through Padam and Ashtapadi. Focus on subtle emotions, Bhakti (devotion), and sophisticated Abhinaya.',
    ageGroup: 'Adults',
    ageRange: '14+ years',
    price: 5500,
    duration: '6 months',
    level: 'Advanced',
    syllabus: {
      mudras: [
        'Subtle Abhinaya Mudras',
        'Emotional expression through Mudras',
        'Devotional gestures'
      ],
      adavus: [
        'Minimal Nritta, maximum Abhinaya',
        'Slow, graceful movements',
        'Emotional transitions'
      ],
      theory: [
        'Padam structure and philosophy',
        'Ashtapadi (Jayadeva\'s Gita Govinda)',
        'Bhakti Rasa (Devotional emotion)',
        'Sringara Rasa (Romantic emotion)',
        'Subtlety in expression',
        'Interpretation of poetry',
        'Cultural and historical context'
      ]
    },
    prerequisites: 'Varnam Intensive or equivalent advanced training'
  },
  {
    id: 'thillana-mangalam',
    name: 'Thillana & Mangalam',
    description: 'Learn the concluding items of a Bharatanatyam recital. Thillana showcases technical prowess, while Mangalam offers a devotional conclusion.',
    ageGroup: 'Adults',
    ageRange: '16+ years',
    price: 5000,
    duration: '5 months',
    level: 'Senior',
    syllabus: {
      mudras: [
        'All Mudras in fast sequences',
        'Complex Mudra patterns',
        'Devotional Mudras for Mangalam'
      ],
      adavus: [
        'Fast-paced complex Adavus',
        'Thillana Jati patterns',
        'Technical precision',
        'Performance-ready choreography'
      ],
      theory: [
        'Thillana structure and style',
        'Mangalam - Devotional conclusion',
        'Performance presentation',
        'Stage presence and confidence',
        'Complete Margam understanding'
      ]
    },
    prerequisites: 'Padam & Ashtapadi or 5+ years experience'
  },
  {
    id: 'arangetram-prep',
    name: 'Arangetram Prep',
    description: 'Intensive preparation for Arangetram (debut solo performance). Complete Margam training, stamina building, and performance coaching.',
    ageGroup: 'Adults',
    ageRange: '16+ years',
    price: 12000,
    duration: '12 months',
    level: 'Elite/Professional',
    syllabus: {
      mudras: [
        'Mastery of all Mudras',
        'Performance-ready Mudra sequences',
        'Advanced Abhinaya techniques'
      ],
      adavus: [
        'Complete Margam choreography',
        'Stamina and endurance training',
        'Perfection of all Adavus',
        'Performance-level execution'
      ],
      theory: [
        'Complete Margam (Alarippu to Mangalam)',
        'Performance techniques and stagecraft',
        'Music coordination',
        'Costume and makeup',
        'Stage management',
        'Cultural etiquette',
        'Professional presentation',
        'Arangetram planning and execution'
      ]
    },
    prerequisites: 'Completion of all previous levels or 6+ years intensive training'
  }
];

export const ageGroups = [
  { value: 'all', label: 'All Ages' },
  { value: 'Kids', label: 'Kids (5-8 years)' },
  { value: 'Juniors', label: 'Juniors (9-13 years)' },
  { value: 'Adults', label: 'Adults (14+ years)' }
];

export function getCoursesByAgeGroup(ageGroup: string): Course[] {
  if (ageGroup === 'all') return courses;
  return courses.filter(course => course.ageGroup === ageGroup || course.ageGroup === 'All Ages');
}



