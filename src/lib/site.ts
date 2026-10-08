export const site = {
  name: "Unique Visions Home Care LLC",
  shortName: "Unique Visions",
  pillars: "Compassion. Dignity. Care.",
  tagline: "Care that feels like family.",
  headline: "Care that feels like family.",
  supporting:
    "Professional care. Personal touch. Because your loved one deserves the best.",
  mission:
    "At Unique Visions Home Care LLC, we believe that every individual deserves to be treated with compassion, dignity, and respect in the comfort of their own home.",
  about:
    "Unique Visions Home Care LLC is a non-medical in-home care agency committed to enhancing the quality of life for seniors and individuals with disabilities. With over 10 years of healthcare leadership experience, our team provides reliable, compassionate care tailored to each client's unique needs.",
  acceptingClients: "Now accepting new clients",
  familyLine:
    "At Unique Visions Home Care, you are not just a client — you are family.",
  values: ["Compassion", "Dignity", "Care"] as const,
  phone: "(985) 289-2882",
  phoneHref: "tel:+19852892882",
  fax: "(985) 289-2884",
  email: "uniquevisionshomecare1@outlook.com",
  emailHref: "mailto:uniquevisionshomecare1@outlook.com",
  locations: [
    {
      id: "louisiana",
      label: "Louisiana office",
      line1: "406 W. Morris Ave, Ste. C",
      city: "Hammond",
      state: "LA",
      zip: "70403",
      full: "406 W. Morris Ave, Ste. C, Hammond, LA 70403",
    },
    {
      id: "mississippi",
      label: "Mississippi office",
      line1: "3318 MS Hwy 24",
      city: "Liberty",
      state: "MS",
      zip: "39645",
      full: "3318 MS Hwy 24, Liberty, MS 39645",
    },
  ],
  /** Primary / mailing address (Louisiana) */
  address: {
    line1: "406 W. Morris Ave, Ste. C",
    city: "Hammond",
    state: "LA",
    zip: "70403",
    full: "406 W. Morris Ave, Ste. C, Hammond, LA 70403",
  },
  owner: "Latrice Landry",
  facebook: "https://www.facebook.com/uniquevisionshomecarellc",
  instagram: "https://www.instagram.com/_uniquevisionsllc/",
  npi: "1730051145",
  paymentOptions:
    "Private pay, insurance, VA, and long-term care insurance accepted",
  serviceAreaLine:
    "Serving communities across Louisiana and Mississippi from our Hammond and Liberty offices.",
  serviceRegions: [
    {
      state: "Louisiana",
      areas: [
        "Ascension",
        "Assumption",
        "Bossier",
        "Catahoula",
        "Cameron",
        "East Baton Rouge",
        "East Feliciana",
        "Jefferson",
        "Lafayette",
        "Livingston",
        "Orleans",
        "Plaquemines",
        "Pointe Coupee",
        "St. Bernard",
        "St. Charles",
        "St. James",
        "St. Tammany",
        "Tangipahoa",
        "Terrebonne",
        "Washington",
        "West Baton Rouge",
        "West Feliciana",
      ],
    },
    {
      state: "Mississippi",
      areas: [
        "Amite",
        "Pike",
        "Lincoln",
        "Franklin",
        "Wilkinson",
        "Walthall",
      ],
    },
  ],
  services: [
    {
      slug: "personal-care",
      title: "Personal Care Assistance",
      summary:
        "Help with bathing, dressing, grooming, and other personal care needs—delivered with dignity and patience.",
    },
    {
      slug: "meal-preparation",
      title: "Meal Preparation & Feeding Assistance",
      summary:
        "Nutritious meal preparation and feeding support that respects preferences, routines, and dietary needs.",
    },
    {
      slug: "companionship",
      title: "Companionship & Conversation",
      summary:
        "Friendly presence and meaningful conversation so your loved one feels seen, supported, and less alone at home.",
    },
    {
      slug: "light-housekeeping",
      title: "Light Housekeeping & Laundry",
      summary:
        "Tidying, laundry, and light household help that keep the home comfortable, safe, and welcoming.",
    },
    {
      slug: "medication-reminders",
      title: "Medication Reminders",
      summary:
        "Timely, dependable reminders so medications stay on schedule as part of daily non-medical support.",
    },
    {
      slug: "respite-care",
      title: "Respite Care",
      summary:
        "Trusted relief for family caregivers who need rest while knowing their loved one is in good hands.",
    },
    {
      slug: "transportation",
      title: "Transportation to Appointments",
      summary:
        "Rides to appointments and help with everyday errands so independence stays within reach.",
    },
    {
      slug: "daily-living",
      title: "Daily Living Assistance",
      summary:
        "Flexible daily support—from a few hours of help to extended care—built around each client's unique needs.",
    },
  ],
  whyUs: [
    {
      title: "Personalized care plans",
      body: "Care plans designed for each client’s routines, preferences, and goals.",
    },
    {
      title: "Compassionate, dependable caregivers",
      body: "Carefully screened, background-checked staff trained to provide respectful, quality care.",
    },
    {
      title: "Flexible scheduling",
      body: "From a few hours to extended care—including respite support for family caregivers.",
    },
    {
      title: "Payment options that fit",
      body: "Private pay, insurance, VA, and long-term care insurance accepted.",
    },
    {
      title: "Dignity, safety, and peace of mind",
      body: "We focus on safe, kind support so families can breathe easier.",
    },
    {
      title: "Family-centered communication",
      body: "Open communication with families and personalized support tailored to each client.",
    },
  ],
  careTeam: [
    "Compassionate, dependable caregivers",
    "Carefully screened & background-checked staff",
    "Trained to provide respectful, quality care",
    "Personalized support tailored to each client",
    "Family-centered care & open communication",
    "Over 10 years of healthcare leadership experience",
  ],
  careTeamSummary:
    "Our staff is compassionate, dependable, and dedicated to delivering respectful, quality care. Caregivers are carefully selected, trained, and focused on supporting each client with dignity, safety, and kindness. We treat every client like family.",
} as const;

export type Service = (typeof site.services)[number];
