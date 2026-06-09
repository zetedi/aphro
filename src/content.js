import beardImage from "../assets/images/beard.webp";
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
  uFeelTantraIbiza: beardImage,
};

export const whatsappPhone = "393297423897";

export const whatsappMessages = {
  houseDiscovery15:
    "Hello Eliane, I would like to book a 15 minute discovery call with House of Aphrodisia.",
  practiceDiscovery15:
    "Hello Eliane, I would like to book a 15 minute discovery call with you to get to know more about your practice.",
  practiceDiscovery30:
    "Hello Eliane, I would like to book a 30 minute discovery call with you to get to know more about your practice.",
};

export const whatsappQualificationFlows = {
  practice: {
    question: "Which practice are you interested in?",
    options: [
      "Psychotherapy",
      "Couples Therapy",
      "Deep Conscious Intimacy Program",
      "One-to-One Retreat",
      "Not sure yet",
    ],
  },
  experience: {
    question: "Which experience are you interested in?",
    options: [
      "Temple Night",
      "Private Creation",
      "Aphrodisia on the Sea",
      "U FEEL Tantra Ibiza",
      "Aphrodisia Members Club",
    ],
  },
};

export function createWhatsAppLink(message, context) {
  const contextCopy = context?.answer
    ? ` I'm interested in: ${context.answer}.`
    : "";

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `${message}${contextCopy}`,
  )}`;
}

export function createExperienceWhatsAppLink(experience) {
  return createWhatsAppLink(whatsappMessages.houseDiscovery15, {
    question: whatsappQualificationFlows.experience.question,
    answer: experience,
  });
}

export function createPracticeWhatsAppLink(practice, minutes = 15) {
  const message =
    minutes === 30
      ? whatsappMessages.practiceDiscovery30
      : whatsappMessages.practiceDiscovery15;

  return createWhatsAppLink(message, {
    question: whatsappQualificationFlows.practice.question,
    answer: practice,
  });
}

export const whatsappLinks = {
  houseDiscovery15: createWhatsAppLink(whatsappMessages.houseDiscovery15),
  practiceDiscovery15: createWhatsAppLink(whatsappMessages.practiceDiscovery15),
  practiceDiscovery30: createWhatsAppLink(whatsappMessages.practiceDiscovery30),
  templeNightDiscovery15: createExperienceWhatsAppLink("Temple Night"),
  privateCreationDiscovery15: createExperienceWhatsAppLink("Private Creation"),
  aphrodisiaSeaDiscovery15: createExperienceWhatsAppLink("Aphrodisia on the Sea"),
  uFeelTantraIbizaDiscovery15: createExperienceWhatsAppLink("U FEEL Tantra Ibiza"),
  membersClubDiscovery15: createExperienceWhatsAppLink(
    "Aphrodisia Members Club",
  ),
};

export const whatsappExperienceChoiceOptions =
  whatsappQualificationFlows.experience.options.map((option) => ({
    label: option,
    href: createExperienceWhatsAppLink(option),
  }));

export const navItems = [
  { label: "Meet me", href: "/meet-me" },
  { label: "The practice", href: "/practice" },
  { label: "Aphrodisia Experiences", href: "/experiences" },
  { label: "Aphrodisia Members Club", href: "/members-club" },
];

export const practiceOfferings = [
  {
    title: "Psychotherapy",
    audience: "Individuals",
    quote:
      '"Until you make the unconscious conscious, it will direct your life, and you will call it fate." - C.G. Jung',
    copy:
      "In our work, I draw from Gestalt and somatic approaches, rooted in a grounded yet spiritual perspective, to support you through life's journey. I am not here to heal or provide quick fixes but to help you face fears, break through blockages, and navigate challenges. Together, we connect with your true needs and align with your purpose.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink("Psychotherapy"),
  },
  {
    title: "Transpersonal assisted therapy",
    audience: "Individuals",
    copy:
      "A transformative approach that integrates practices beyond traditional therapy to access deeper parts of consciousness. This work can address depression, anxiety, or trauma while fostering profound transformation, emotional breakthroughs, and a deeper sense of purpose.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink("Transpersonal assisted therapy"),
  },
  {
    title: "Transform your life from within",
    audience: "Individuals",
    copy:
      "You have achieved success, but something still feels missing. Through somatic practices and deep intimacy work, this journey invites you to reconnect with your body, your intimacy, and the pleasure of being fully alive. Sessions last 2h and can adapt to your transformational retreat.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink("Transform your life from within"),
  },
  {
    title: "One-to-One Retreat",
    audience: "Individuals",
    copy:
      "A deeply immersive private retreat in Ibiza where time slows down and transformation unfolds. Gestalt therapy, transpersonal work, counseling, and somatic practices create a gateway to release emotional blockages, awaken vitality, and rediscover desire and purpose.",
    discoveryMinutes: 30,
    whatsappHref: createPracticeWhatsAppLink("One-to-One Retreat", 30),
  },
  {
    title: "Couples Therapy",
    audience: "COUPLES / LOVERS",
    copy:
      "Connection is more important than being right. We begin with the self, reconnecting with the body, emotions, and personal needs, then create a relational space where both partners can be seen, felt, and held in their authenticity.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink("Couples Therapy"),
  },
  {
    title: "Deep Conscious Intimacy Program",
    audience: "COUPLES / LOVERS",
    copy:
      "A personalized 3-month journey for couples who want to deepen conscious intimacy, expand pleasure, and awaken full-body connection through embodiment, somatic practices, energy circulation, conscious touch, emotional attunement, and sacred sensuality.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink(
      "Deep Conscious Intimacy Program",
    ),
  },
  {
    title: "Make intimacy a ritual",
    audience: "COUPLES / LOVERS",
    copy:
      "Gift your partner an immersive guided intimacy ritual. Through somatic practices, sensual touch, verbal connection, and presence, you slow down, honor each other, and awaken new dimensions of intimacy. The session lasts 1h20m.",
    discoveryMinutes: 15,
    whatsappHref: createPracticeWhatsAppLink("Make intimacy a ritual"),
  },
];

export const experiences = [
  {
    title: "U FEEL Tantra Ibiza",
    label: "Workshop",
    image: images.uFeelTantraIbiza,
    copy:
      "We all crave connection but were not taught how to create it. Through guided and playful experiences, you awaken your senses, connect with your instincts, and discover pleasure from within. The workshop lasts 2h. The workshop takes place every Tuesday evening in Ibiza.",
    href: "https://hipsy.eu/events?query=U+FEEL",
    cta: "Check next workshop",
  },
  {
    title: "Aphrodisia Experiences",
    label: "Private creation",
    image: images.facing,
    copy:
      "Tell me what you envision: a gathering to celebrate love and connection, a journey into deep presence in nature, or a luxurious soiree designed to awaken your senses. Together with artists, performers, and culinary magicians, we craft an unforgettable experience.",
    href: whatsappLinks.privateCreationDiscovery15,
    cta: "Plan the experience",
  },
  {
    title: "Temple Nights",
    label: "Curated circle",
    image: images.blind,
    copy:
      "Temple Nights are not events. They are invitations into a world where sensuality, intimacy, and presence become an art form. Aphrodisia is a safe, sacred playground for self-expression, exploration, and savoring desire, rooted in respect, consent, and integrity.",
    href: "/members-club",
    cta: "Enter the Aphrodisia Members Club",
  },
  {
    title: "Aphrodisia on the Sea",
    label: "Ibiza waters",
    image: images.boat,
    copy:
      "For eight magical hours, we sail across the turquoise waters of northern Ibiza, guided by the currents of desire, curiosity, and connection. Hidden coves and wild shores become the stage for presence, pleasure, and intimate freedom.",
    href: whatsappLinks.aphrodisiaSeaDiscovery15,
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
  [
    "Interview: The Ibiza Magazine",
    "https://theibizamagazine.com/eliane-gerzelj-conscious-intimacy-ibiza-interview/",
  ],
];

export const testimonials = [
  "This experience was intense, powerful, and filled with contrasting emotions. I found myself in a bubble that disconnected me from everyday reality. (E. joined a retreat)",
  "A NO for someone else can be a YES for me. (S. joined U FEEL)",
  "I realized that I can show my vulnerability as a strength, allowing myself to become softer. (L. joined U FEEL)",
  "I rediscovered love for myself, for my body, for my soul, and for everything that I am, with all my beautiful imperfections. (G. joined Temple Nights)",
];

export const conduct = [
  "Confidentiality: what happens at the Aphrodisia Members Club stays here.",
  "Sovereignty: respect each person's autonomy, boundaries, choices, and self-responsibility.",
  "Consent: a yes must be a full yes, a no is a full sentence, and a maybe is a no.",
  "Having fun: joy, playfulness, openness, and lightheartedness are part of the space.",
  "No photos or videos by participants. We have a conscious house photographer. You can opt not to be portrayed.",
  "Playroom etiquette: leave the space tidy, bring what makes you feel playful, and honor the no-penetration boundary of Aphrodisia White Temples. Unleash your creativity.",
];
