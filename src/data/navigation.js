let navData = [
  { name: "Home", to: "/home", current: true },
  {
    name: "Our Services",
    current: false,
    children: [
      { name: "Revenue Base Financing", to: "/services/revenue", current: false },
      { name: "Finance Management", to: "/services/finance", current: false },
      { name: "Digital Transformation", to: "/services/digital", current: false },
    ],
  },
  { name: "About Us", to: "/about", current: false },
  { name: "Contact Us", to: "/contact", current: false },
];
export default navData;