export type Photo = {
  src: string;
  alt: string;
  /** room group label used by the photo tour */
  room: string;
};

/**
 * Photos ordered for the hero grid (first 5 shown) and reused by the
 * photo tour, grouped by room. Sourced from the reference listing.
 */
export const photos: Photo[] = [
  { src: "/photos/lounge.png", alt: "Jacuzzi lounge with wicker seating", room: "Living room 2" },
  { src: "/photos/jacuzzi.png", alt: "Private jacuzzi with mood lighting", room: "Living room 2" },
  { src: "/photos/bedroom.png", alt: "Bedroom with queen bed and mirror", room: "Bedroom" },
  { src: "/photos/living.png", alt: "Living room with sofa and kitchen", room: "Living room 1" },
  { src: "/photos/exterior.png", alt: "Aerial view of the building", room: "Exterior" },
  { src: "/photos/bathroom.png", alt: "Full bathroom with walk-in shower", room: "Full bathroom" },
  { src: "/photos/gym.png", alt: "Shared gym with cardio equipment", room: "Gym" },
  { src: "/photos/pool-1.png", alt: "Shared swimming pool courtyard", room: "Pool" },
];

/** Room groupings for the photo tour left rail + sections */
export const photoTourRooms: { name: string; caption?: string; photos: Photo[] }[] = [
  {
    name: "Living room 1",
    caption: "Sofa · Dining table · Kitchen",
    photos: [photos[3]],
  },
  {
    name: "Living room 2",
    caption: "Jacuzzi · Lounge seating",
    photos: [photos[0], photos[1]],
  },
  {
    name: "Bedroom",
    caption: "Queen bed · Wardrobe",
    photos: [photos[2]],
  },
  {
    name: "Full bathroom",
    caption: "Walk-in shower · Sink",
    photos: [photos[5]],
  },
  {
    name: "Gym",
    caption: "Shared · Cardio & weights",
    photos: [photos[6]],
  },
  {
    name: "Exterior",
    caption: "Building · Neighbourhood",
    photos: [photos[4]],
  },
  {
    name: "Pool",
    caption: "Shared outdoor pool",
    photos: [photos[7]],
  },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: "Candolim, India",
  type: "Entire serviced apartment in Candolim, India",
  specs: ["3 guests", "1 bedroom", "1 bed", "1 bathroom"],
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  host: {
    name: "Mirashya Homes",
    since: "2 years hosting",
    isSuperhost: true,
    avatar: "/photos/host.png",
  },
  highlights: [
    {
      icon: "outdoor",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "fan",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "key",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  description:
    "Offer this luxurious serviced 1 BHK apartment with a private jacuzzi in Candolim, Goa. Wake up to a romantic setting, unwind in the outdoor lounge, and enjoy resort-style amenities including a shared pool and gym. Perfectly located minutes from Candolim and Calangute beaches, cafes, and nightlife — ideal for couples and small families looking for a stylish, comfortable stay.",
  price: {
    total: "₹28,499",
    nights: 5,
    checkIn: "10/18/2026",
    checkOut: "10/23/2026",
    guests: 2,
    freeCancellationBefore: "17 October",
  },
};

export const amenities: { icon: string; label: string; unavailable?: boolean }[] = [
  { icon: "pool", label: "Pool" },
  { icon: "wifi", label: "Wifi" },
  { icon: "kitchen", label: "Kitchen" },
  { icon: "washer", label: "Free washer – In building" },
  { icon: "tv", label: "TV" },
  { icon: "ac", label: "Air conditioning" },
  { icon: "gym", label: "Shared gym in building" },
  { icon: "parking", label: "Free parking on premises" },
  { icon: "workspace", label: "Dedicated workspace" },
  { icon: "hottub", label: "Private hot tub" },
  { icon: "elevator", label: "Elevator" },
  { icon: "cctv", label: "Security cameras on property", unavailable: false },
];

export const reviewCategories: { label: string; icon: string; score: number }[] = [
  { label: "Cleanliness", icon: "sparkle", score: 5.0 },
  { label: "Accuracy", icon: "accuracy", score: 4.9 },
  { label: "Check-in", icon: "key", score: 5.0 },
  { label: "Communication", icon: "chat", score: 5.0 },
  { label: "Location", icon: "pin", score: 4.8 },
  { label: "Value", icon: "tag", score: 4.9 },
];

export type Review = {
  name: string;
  avatarColor: string;
  meta: string;
  rating: number;
  date: string;
  body: string;
};

export const reviews: Review[] = [
  {
    name: "Aarav",
    avatarColor: "#c1846d",
    meta: "3 years on Airbnb",
    rating: 5,
    date: "August 2026",
    body: "Amazing place with a lovely jacuzzi. Super clean and exactly as pictured. Aarav was a great host and very responsive.",
  },
  {
    name: "Priya",
    avatarColor: "#6d8fc1",
    meta: "5 years on Airbnb",
    rating: 5,
    date: "August 2026",
    body: "Absolutely stunning apartment, the private jacuzzi made our anniversary trip so special. The pool and gym were a bonus. Would definitely stay again when we are back in Goa.",
  },
  {
    name: "Meredith",
    avatarColor: "#8d6dc1",
    meta: "Somerville, Massachusetts",
    rating: 5,
    date: "July 2026",
    body: "Beautiful and comfortable stay in a great location.",
  },
  {
    name: "David",
    avatarColor: "#c16d9e",
    meta: "Chicago, Illinois",
    rating: 5,
    date: "July 2026",
    body: "The apartment was spotless and the host went above and beyond to make sure our check-in was smooth. Highly recommend for anyone visiting Candolim — you are close to everything but it still feels private and quiet.",
  },
  {
    name: "Kavya",
    avatarColor: "#6dc19e",
    meta: "Bengaluru, India",
    rating: 5,
    date: "June 2026",
    body: "Loved the interiors and the jacuzzi. Great value for the price and the neighbourhood is lovely.",
  },
  {
    name: "Rahul",
    avatarColor: "#c1a96d",
    meta: "Mumbai, India",
    rating: 5,
    date: "June 2026",
    body: "The whole booking was seamless and the flat is even nicer in person.",
  },
];

export const similarListings: {
  src: string;
  title: string;
  price: string;
  rating: number;
}[] = [
  { src: "/photos/bedroom.png", title: "Serviced apartment in Candolim", price: "₹6,120 night", rating: 4.9 },
  { src: "/photos/living.png", title: "Serviced apartment in Calangute", price: "₹5,480 night", rating: 4.88 },
  { src: "/photos/jacuzzi.png", title: "Villa in Anjuna", price: "₹9,200 night", rating: 4.97 },
  { src: "/photos/lounge.png", title: "Serviced apartment in Baga", price: "₹7,340 night", rating: 4.92 },
];
