export const event = {
  annual: '2nd Annual',
  name: 'Turkey Ball Classic',
  fullName: 'The Turkey Ball Classic',
  established: 2025,
  weekday: 'Fri',
  dateShort: '11/27',
  dateLong: 'Friday, November 27',
  time: '11:00AM',
  timePretty: '11:00 AM',
  location: 'George Izay Park',
  field: 'Olive Field 3',
  city: 'Burbank, CA',
  mapsUrl: 'https://maps.google.com/?q=George+Izay+Park+Burbank+CA',
  tagline: "Last Night's Turkey.\nToday's Glory.",
  taglineOneLine: "Last Night's Turkey. Today's Glory.",
} as const

export const rules = [
  {
    n: 1,
    text: 'Standard Wiffle Ball with a strike zone; counts for adults and Thrashers start at 1–1.',
  },
  {
    n: 2,
    text: 'Kick-Strike Rule: If you strike out, you get a 4th “Kick-strike” — the pitcher must roll you a kickball to boot (same rules as wiffle ball).',
  },
  {
    n: 3,
    text: 'You can ask for a kick-strike at any point but you only get 1, and if you miss you’re out.',
  },
  {
    n: 4,
    text: '5 inning game with an 8-Run Cap per inning.',
  },
  {
    n: 5,
    text: 'Teams will be drafted the day before. (Green vs. Black)',
  },
] as const

export const features = [
  {
    id: 'gear',
    title: 'All the Gear',
    body: 'Wiffle ball bats, balls, bases, etc.',
  },
  {
    id: 'jerseys',
    title: 'Custom Jerseys',
    body: 'Teams will be drafted the day before. (Green vs. Black)',
  },
  {
    id: 'setup',
    title: 'Setup on Site',
    body: 'Tables & coolers provided.',
  },
  {
    id: 'times',
    title: 'Good Times',
    body: 'Post-holiday determination, beverages, and a few surprises.',
  },
] as const

export const faqs = [
  {
    q: 'Who is this for?',
    a: 'Families, Thrashers, neighbors, and anyone who can still jog to first after leftovers. Kids play. Adults play. The turkey mascot judges quietly.',
  },
  {
    q: 'Do kids and adults play together?',
    a: 'Yes. That’s the whole point. Adults and Thrashers start at 1–1 so the little ones aren’t watching a walk-fest.',
  },
  {
    q: 'What is a Kick-Strike?',
    a: 'The signature rule. Strike out on wiffle and you still get one kickball rolled to you. Same field, same force plays — just a bigger ball and a chance at glory. You can also cash that kick-strike in early, but you only get one.',
  },
  {
    q: 'What should I bring?',
    a: 'Cleats or sneakers, a glove if you have a lucky one, sunscreen, and whatever you want in the cooler. We cover bats, balls, bases, tables, and the official kickball.',
  },
  {
    q: 'Are there jerseys?',
    a: 'Yes. Custom Turkey Ball shirts. Green vs. Black, drafted the day before. Don’t show up already picking sides — that’s how Thanksgiving arguments start.',
  },
  {
    q: 'Where do I park?',
    a: 'George Izay Park in Burbank. Olive Field 3. Lot parking is the usual park situation — roll in early, don’t block the rec-center flow, and walk over.',
  },
  {
    q: 'What if it rains?',
    a: 'It’s late November in Southern California. If the field is actually wet enough to call, we’ll send word to everyone on the RSVP list.',
  },
] as const

export const lastYearVideo = {
  src: '/assets/last-year/first-annual.mp4',
  poster: '/assets/last-year/first-annual-poster.jpg',
  caption: "Last year's tape.",
  title: 'The 1st Annual Turkey Ball Classic',
} as const

export const lastYearPhotos = [
  {
    src: '/assets/last-year/full-crew.jpg',
    alt: 'Green and Black teams packed together on the infield after the 1st Annual',
    caption: 'The whole circus.',
    size: 'wide',
    crop: 'center',
  },
  {
    src: '/assets/last-year/trophy-portrait.jpg',
    alt: 'A boy in a Turkey Ball Classic shirt holding a golden turkey trophy',
    caption: 'Hardware.',
    size: 'tall',
    crop: 'center',
  },
  {
    src: '/assets/last-year/trophy-back.jpg',
    alt: 'A boy seen from behind raising a turkey trophy on the field',
    caption: 'Grass stains included.',
    size: 'tall',
    crop: 'center top',
  },
  {
    src: '/assets/last-year/trophy-lift.jpg',
    alt: 'A boy on someone’s shoulders raising the turkey trophy while the crowd cheers',
    caption: 'Today’s glory.',
    size: 'tall',
    crop: 'center top',
  },
  {
    src: '/assets/last-year/battle-cry.jpg',
    alt: 'A girl in a Turkey Ball Classic shirt yelling on the field',
    caption: 'Required energy.',
    size: 'tall',
    crop: 'center',
  },
  {
    src: '/assets/last-year/black-team.jpg',
    alt: 'The Black team posing on the dirt, one kid sprawled across the front',
    caption: 'Black.',
    size: 'mid',
    crop: 'center',
  },
  {
    src: '/assets/last-year/at-bat.jpg',
    alt: 'A batter in a black Turkey Ball Classic shirt at the plate',
    caption: 'Protect the plate.',
    size: 'tall',
    crop: 'center top',
  },
  {
    src: '/assets/last-year/kick-strike.jpg',
    alt: 'A kick-strike in midair — bat, red kickball, and Wiffle ball all in the frame',
    caption: 'The whole mechanic.',
    size: 'tall',
    crop: 'center',
  },
  {
    src: '/assets/last-year/adult-at-bat.jpg',
    alt: 'An adult in a green Turkey Ball shirt waiting on a pitch',
    caption: 'Adults play too.',
    size: 'tall',
    crop: 'center top',
  },
  {
    src: '/assets/last-year/three-kids.jpg',
    alt: 'Three kids on the infield in Turkey Ball Classic shirts',
    caption: 'Same crew.',
    size: 'mid',
    crop: 'center',
  },
  {
    src: '/assets/last-year/baseline.jpg',
    alt: 'Players lined up along the baseline in black jerseys',
    caption: 'Hats off.',
    size: 'mid',
    crop: 'center',
  },
  {
    src: '/assets/last-year/jerseys.jpg',
    alt: 'Stacked green and black Turkey Ball Classic jerseys with handwritten name tags',
    caption: 'Draft night.',
    size: 'tall',
    crop: 'center',
  },
  {
    src: '/assets/last-year/crossed-bats.jpg',
    alt: 'A kid holding two Turkey Ball Classic Wiffle bats crossed in front of him',
    caption: 'Game faces.',
    size: 'tall',
    crop: 'center',
  },
] as const
