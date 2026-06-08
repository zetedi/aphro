import blindImage from "../assets/images/blind.webp";
import boatImage from "../assets/images/boat.webp";
import candlesImage from "../assets/images/candles.webp";
import elianeImage from "../assets/images/eliane-white.webp";
import facingImage from "../assets/images/facing.webp";
import greetImage from "../assets/images/greet.webp";
import handImage from "../assets/images/hand.webp";
import hourglassImage from "../assets/images/hourglass.webp";
import hugImage from "../assets/images/hug.webp";

export const images = {
  blind: blindImage,
  boat: boatImage,
  candles: candlesImage,
  eliane: elianeImage,
  facing: facingImage,
  greet: greetImage,
  hand: handImage,
  hourglass: hourglassImage,
  hug: hugImage,
};

export const whatsappMessage =
  "Hello Eliane, I would like to book a 15 minute discovery call with House of Aphrodisia.";

export const whatsappLink = `https://wa.me/3293297423897?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const navItems = [
  { label: "Meet me", href: "/meet-me" },
  { label: "The practice", href: "/practice" },
  { label: "Experiences", href: "/experiences" },
  { label: "Aphrodisia members club", href: "/members-club" },
];

export const practiceOfferings = [
  {
    title: "Psychotherapy",
    audience: "Individuals",
    quote:
      '"Until you make the unconscious conscious, it will direct your life, and you will call it fate." - C.G. Jung',
    copy:
      "In our work, I draw from Gestalt and somatic approaches, rooted in a holistic and spiritual perspective, to support you through life's journey. I am not here to heal or provide quick fixes but to help you face fears, break through blockages, and navigate challenges. Together, we connect with your true needs and align with your purpose.",
    cta: "Book a session",
  },
  {
    title: "Transpersonal assisted therapy",
    audience: "Individuals",
    copy:
      "A transformative approach that integrates practices beyond traditional therapy to access deeper parts of consciousness. This work can address depression, anxiety, or trauma while fostering profound transformation, emotional breakthroughs, and a deeper sense of purpose.",
    cta: "Book a session",
  },
  {
    title: "Transform your life from within",
    audience: "Individuals",
    copy:
      "You have achieved success, but something still feels missing. Through somatic practices and deep intimacy work, this journey invites you to reconnect with your body, your intimacy, and the pleasure of being fully alive. Sessions last 2h and can adapt to your transformational retreat.",
    cta: "Book a 15 min interview",
  },
  {
    title: "One2One retreat",
    audience: "Individuals",
    copy:
      "A deeply immersive private retreat in Ibiza where time slows down and transformation unfolds. Gestalt therapy, transpersonal work, counseling, and somatic practices create a gateway to release emotional blockages, awaken vitality, and rediscover desire and purpose.",
    cta: "Book a 30 min interview",
  },
  {
    title: "Couple therapy",
    audience: "Couples / lovers",
    copy:
      "Connection is more important than being right. We begin with the self, reconnecting with the body, emotions, and personal needs, then create a relational space where both partners can be seen, felt, and held in their authenticity.",
    cta: "Book a session",
  },
  {
    title: "Deep Conscious Intimacy Program",
    audience: "Couples / lovers",
    copy:
      "A personalized 3-month journey for couples who want to deepen conscious intimacy, expand pleasure, and awaken full-body connection through breathwork, somatic practices, energy circulation, conscious touch, emotional attunement, and sacred sensuality.",
    cta: "Book a 15 min interview",
  },
  {
    title: "Make intimacy a ritual",
    audience: "Couples / lovers",
    copy:
      "Gift your partner an immersive guided intimacy ritual. Through somatic practices, sensual touch, verbal connection, and presence, you slow down, honor each other, and awaken new dimensions of intimacy. The session lasts 1h20m.",
    cta: "Book a session",
  },
];

export const experiences = [
  {
    title: "U FEEL, Tantra Ibiza",
    label: "Workshop",
    copy:
      "We all crave connection but were not taught how to create it. Through guided and playful experiences, you awaken your senses, connect with your instincts, and discover pleasure from within. The workshop lasts 2h.",
    href: "https://hipsy.eu/events?query=U+FEEL",
    cta: "Check next workshop",
  },
  {
    title: "Customized Experiences",
    label: "Private creation",
    copy:
      "Tell me what you envision: a gathering to celebrate love and connection, a journey into deep presence in nature, or a luxurious soiree designed to awaken your senses. Together with artists, performers, and culinary magicians, we craft an unforgettable experience.",
    href: whatsappLink,
    cta: "Plan the experience",
  },
  {
    title: "Aphrodisia Temple Nights",
    label: "Curated circle",
    copy:
      "The Temple Night is not an event. It is an invitation into a world where sensuality, intimacy, and presence become an art form. Aphrodisia is a safe, sacred playground for self-expression, exploration, and savoring desire, rooted in respect, consent, and integrity.",
    href: "/members-club",
    cta: "Enter the members club",
  },
  {
    title: "Aphrodisia Temple Boats",
    label: "Ibiza waters",
    image: images.boat,
    copy:
      "For eight magical hours, we sail across the turquoise waters of northern Ibiza, guided by the currents of desire, curiosity, and connection. Hidden coves and wild shores become the stage for presence, pleasure, and intimate freedom.",
    href: whatsappLink,
    cta: "Chat with me",
  },
];

export const podcasts = [
  ["Well Quest episode", "https://www.youtube.com/watch?v=vmHKEVaS3d8&t=4s"],
  [
    "Mangu.tv: Re-learning intimacy and ritualising sexual encounters",
    "https://mangu.tv/podcast/eliane-gerzelj/",
  ],
  [
    "Rivoluzione Maschile: Riportare il piacere al centro della nostra vita",
    "https://rb.gy/edn0ug",
  ],
  ["Playful TV: Sober Ibiza", "https://rb.gy/q2n1sj"],
  ["Female pleasure and intimacy tips", "https://youtu.be/U56I135hvZk"],
  ["Interview: The Ibiza Magazine", "https://theibizamagazine.com/"],
];

export const testimonials = [
  "This experience was intense, powerful, and filled with contrasting emotions. I found myself in a bubble that disconnected me from everyday reality. (E. joined a retreat)",
  "A NO for someone else can be a YES for me. (S. joined U FEEL)",
  "I realized that I can show my vulnerability as a strength, allowing myself to become softer. (L. joined U FEEL)",
  "I rediscovered love for myself, for my body, for my soul, and for everything that I am, with all my beautiful imperfections. (G. joined Temple night)",
];

export const conduct = [
  "Confidentiality: what happens at the Aphrodisia Members Club stays here.",
  "Sovereignty: respect each person's autonomy, boundaries, choices, and self-responsibility.",
  "Consent: a yes must be a full yes, a no is a full sentence, and a maybe is a no.",
  "Having fun: joy, playfulness, openness, and lightheartedness are part of the space.",
  "No photos or videos after the official start of the event, except the conscious house photographer.",
  "Playroom etiquette: leave the space tidy, bring what makes you feel playful, and honor the no-penetration boundary of Aphrodisia White Temples.",
];
