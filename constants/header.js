export const header = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "MEMBERSHIP",
    path: "/membership-landing",
  },
  {
    label: "ABOUT US",
    path: "/story",
  },
  {
    label: "MEMBER PORTAL",
    path: "/membership-portal",
  },
  {
    label: "JOIN NOW",
    path: "/membership",
    computeStyle: (isActive) => ({
      textDecoration: isActive ? "none" : "underline",
    }),
  },
];
