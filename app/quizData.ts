export type Personality =
  | "Bold Adventurer"
  | "Cozy Classic"
  | "Zen Minimalist"
  | "Social Butterfly"
  | "Artisan Snob";

export interface CoffeeResult {
  personality: Personality;
  coffee: string;
  tagline: string;
  image: string;
  description: string;
}

export interface Answer {
  emoji: string;
  text: string;
  personality: Personality;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export const coffeeResults: Record<Personality, CoffeeResult> = {
  "Bold Adventurer": {
    personality: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    image: "/images/double-espresso.jpg",
    description:
      "You don't do anything halfway. Life's too short for weak coffee and safe choices. Your double espresso matches your fearless energy.",
  },
  "Cozy Classic": {
    personality: "Cozy Classic",
    coffee: "Medium Roast Drip",
    tagline: "Comfort in every cup",
    image: "/images/medium-roast.jpg",
    description:
      "You find joy in the familiar and beauty in simplicity. Your medium roast drip is like a warm hug in a mug — reliable, comforting, and always welcome.",
  },
  "Zen Minimalist": {
    personality: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    image: "/images/black-coffee.jpg",
    description:
      "You've mastered the art of less-is-more. No sugar, no cream, no distractions. Just pure, clean coffee — exactly how you approach life.",
  },
  "Social Butterfly": {
    personality: "Social Butterfly",
    coffee: "Cappuccino",
    tagline: "Coffee is better with company",
    image: "/images/cappuccino.jpg",
    description:
      "For you, coffee is about connection. A cappuccino is best enjoyed across the table from someone you love — and you always know someone at every cafe.",
  },
  "Artisan Snob": {
    personality: "Artisan Snob",
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like",
    image: "/images/pour-over.jpg",
    description:
      "You appreciate the craft. You know the difference between a good cup and a great one, and you're not afraid to wait for perfection.",
  },
};

export const questions: Question[] = [
  {
    question: "Pick your ideal Saturday morning",
    answers: [
      { emoji: "🏔️", text: "Up at dawn for a hike or adventure", personality: "Bold Adventurer" },
      { emoji: "📖", text: "Slow morning with a book and a warm blanket", personality: "Cozy Classic" },
      { emoji: "🧘", text: "Meditation, journaling, quiet time", personality: "Zen Minimalist" },
      { emoji: "🥂", text: "Brunch with friends, the more the merrier", personality: "Social Butterfly" },
      { emoji: "🎨", text: "Exploring a new cafe or farmer's market", personality: "Artisan Snob" },
    ],
  },
  {
    question: "You're picking a movie. What are you watching?",
    answers: [
      { emoji: "💥", text: "Action thriller with non-stop intensity", personality: "Bold Adventurer" },
      { emoji: "🎬", text: "A feel-good classic you've seen 10 times", personality: "Cozy Classic" },
      { emoji: "🎞️", text: "A quiet, beautifully shot indie film", personality: "Zen Minimalist" },
      { emoji: "🗳️", text: "Whatever the group votes for", personality: "Social Butterfly" },
      { emoji: "🏆", text: "A critically acclaimed foreign film", personality: "Artisan Snob" },
    ],
  },
  {
    question: "What's your dream vacation?",
    answers: [
      { emoji: "🎒", text: "Backpacking through Patagonia", personality: "Bold Adventurer" },
      { emoji: "🏕️", text: "A cabin in the mountains with a fireplace", personality: "Cozy Classic" },
      { emoji: "🏯", text: "A silent retreat in Kyoto", personality: "Zen Minimalist" },
      { emoji: "👯", text: "A group trip with your closest friends", personality: "Social Butterfly" },
      { emoji: "🍝", text: "A culinary tour through Italy", personality: "Artisan Snob" },
    ],
  },
  {
    question: "Pick a superpower",
    answers: [
      { emoji: "💪", text: "Super strength", personality: "Bold Adventurer" },
      { emoji: "⏰", text: "Time travel (to relive your favorite moments)", personality: "Cozy Classic" },
      { emoji: "🧠", text: "Telekinesis (no wasted movement)", personality: "Zen Minimalist" },
      { emoji: "🔮", text: "Mind reading (know what everyone's thinking)", personality: "Social Butterfly" },
      { emoji: "✨", text: "Perfect taste (instantly know the best of anything)", personality: "Artisan Snob" },
    ],
  },
  {
    question: "What color are you drawn to?",
    answers: [
      { emoji: "🔴", text: "Red — intense and alive", personality: "Bold Adventurer" },
      { emoji: "🟤", text: "Warm beige — soft and familiar", personality: "Cozy Classic" },
      { emoji: "⚪", text: "White — clean and calming", personality: "Zen Minimalist" },
      { emoji: "🟡", text: "Yellow — bright and cheerful", personality: "Social Butterfly" },
      { emoji: "🟢", text: "Deep green — refined and natural", personality: "Artisan Snob" },
    ],
  },
  {
    question: "How do you take notes?",
    answers: [
      { emoji: "📋", text: "Bullet points, fast and direct", personality: "Bold Adventurer" },
      { emoji: "📓", text: "A well-worn notebook with doodles", personality: "Cozy Classic" },
      { emoji: "📱", text: "One perfectly organized app", personality: "Zen Minimalist" },
      { emoji: "🎙️", text: "Voice memos while talking to someone", personality: "Social Butterfly" },
      { emoji: "🖊️", text: "A leather-bound journal with a specific pen", personality: "Artisan Snob" },
    ],
  },
  {
    question: "Pick a coffee shop vibe",
    answers: [
      { emoji: "🧍", text: "Standing at the bar, quick and intense", personality: "Bold Adventurer" },
      { emoji: "🛋️", text: "The corner couch with soft music", personality: "Cozy Classic" },
      { emoji: "🪟", text: "A quiet window seat, just you and the cup", personality: "Zen Minimalist" },
      { emoji: "🪑", text: "The big communal table", personality: "Social Butterfly" },
      { emoji: "👨‍🍳", text: "The one where the barista explains the origin story", personality: "Artisan Snob" },
    ],
  },
];
