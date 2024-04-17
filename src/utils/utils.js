export const navItem = [
  { href: "/", link: "Home" },
  { href: "/course", link: "Course" },
  { href: "/contact", link: "Contact" },
  { href: "/about", link: "About" },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  midScreen: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 700, min: 493 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};