export type ContentItem = {
  id: string;
  title: string;
  description: string;
  category: "article" | "ebook" | "summary";
  tags: string[];
  filename: string; // file in /public/downloads/
};

export const articles: ContentItem[] = [
  {
    id: "art-1",
    title: "The Psychology of High Performance",
    description:
      "An exploration of the mental frameworks that separate elite performers from the rest — from focus routines to stress reframing.",
    category: "article",
    tags: ["Psychology", "Performance"],
    filename: "placeholder.pdf",
  },
  {
    id: "art-2",
    title: "Why Your Morning Routine Is Wrong",
    description:
      "Evidence-based principles for designing a morning that primes your body and mind for deep, sustained work.",
    category: "article",
    tags: ["Physiology", "Habits"],
    filename: "placeholder.pdf",
  },
  {
    id: "art-3",
    title: "Longevity: What the Science Actually Says",
    description:
      "Cutting through the noise on fasting, supplementation, and recovery — what actually moves the needle on lifespan.",
    category: "article",
    tags: ["Longevity", "Health"],
    filename: "placeholder.pdf",
  },
];

export const ebooks: ContentItem[] = [
  {
    id: "eb-1",
    title: "Train Your Mind Like a Pro Athlete",
    description:
      "A practical 60-page guide combining sports psychology, neuroscience, and real-world training protocols.",
    category: "ebook",
    tags: ["Mindset", "Training"],
    filename: "placeholder.pdf",
  },
  {
    id: "eb-2",
    title: "The Body Recomposition Blueprint",
    description:
      "Everything you need to lose fat and build muscle simultaneously — nutrition, programming, and recovery.",
    category: "ebook",
    tags: ["Nutrition", "Fitness"],
    filename: "placeholder.pdf",
  },
  {
    id: "eb-3",
    title: "Philosophy for Modern Athletes",
    description:
      "How Stoicism, Existentialism, and Eastern philosophy can reshape the way you approach competition and failure.",
    category: "ebook",
    tags: ["Philosophy", "Mindset"],
    filename: "placeholder.pdf",
  },
];

export const summaries: ContentItem[] = [
  {
    id: "sum-1",
    title: "Can't Hurt Me — David Goggins",
    description:
      "Key lessons from Goggins' journey: the 40% rule, callusing your mind, and building accountability.",
    category: "summary",
    tags: ["Mindset", "Resilience"],
    filename: "placeholder.pdf",
  },
  {
    id: "sum-2",
    title: "Outlive — Peter Attia",
    description:
      "The core framework from Attia's longevity bible: the four horsemen of chronic disease and how to fight them.",
    category: "summary",
    tags: ["Longevity", "Medicine"],
    filename: "placeholder.pdf",
  },
  {
    id: "sum-3",
    title: "Thinking, Fast and Slow — Daniel Kahneman",
    description:
      "System 1 vs System 2 thinking, cognitive biases, and how to make better decisions under pressure.",
    category: "summary",
    tags: ["Psychology", "Decision Making"],
    filename: "placeholder.pdf",
  },
];
