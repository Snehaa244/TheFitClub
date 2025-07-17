const plansData = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
          10-4.48 10-10S17.52 2 12 2zm0 18
          c-4.41 0-8-3.59-8-8s3.59-8 8-8
          8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    ),
    name: "BASIC PLAN",
    price: "₹499",
    features: [
      "2 hours of exercises",
      "Free consultation to coaches",
      "Access to the community",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14
          c0 1.1.9 2 2 2h14c1.1 0 2-.9
          2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    ),
    name: "PREMIUM PLAN",
    price: "₹999",
    features: [
      "5 hours of exercises",
      "Free consultation to coaches",
      "Access to minibar",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7V3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    ),
    name: "PRO PLAN",
    price: "₹1499",
    features: [
      "8 hours of exercises",
      "Consultation with Coaches",
      "Free Fitness Merchandise",
    ],
  },
];

export default plansData;
