const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
    pluseInco: false,
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Analyst Bios",
    link: "/analyst-bios",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "News",
    link: "/news",
    pluseInco: false,
  },

  {
    id: 4,
    title: "Research Reports",
    link: "/reports",
    pluseInco: false,
  },
  {
    id: 5,
    hasDropdown: false,
    title: "Tickers",
    link: "/tickers-list",
    pluseInco: false,
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Our Partners",
    link: "/our-partners",
    pluseInco: false,
  },
  {
    id: 7,
    hasDropdown: false,
    title: "contact us ",
    link: "/contact-us",
    pluseInco: false,
  },
  {
    id: 8,
    hasDropdown: true,
    title: "Subscribe",
    link: "/subscribe/free-digest",
    pluseInco: true,
    pages: true,
    submenus: [
      { title: "Free Digest", link: "/subscribe/free-digest" },
      { title: "IR Premium", link: "/subscribe/premium-digest" },
    ],
  },
];

export default menu_data;
