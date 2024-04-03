const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Home",
    pluseInco: true,
    link: "/",
    submenus: [
      { title: "Home Style 1", link: "/" },
      { title: "Home Style 2", link: "/home-two" },
      { title: "Home Style 3", link: "/home-three" },
      { title: "Home Style 4", link: "/home-four" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "about us",
    link: "/about",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: true,
    title: "rooms & suites",
    link: "/room-one",
    pluseInco: true,
    submenus: [
      { title: "rooms 1", link: "/room-one" },
      { title: "rooms 2", link: "/room-two" },
      { title: "rooms details", link: "/room-details" },
    ],
  },

  {
    id: 4,
    title: "Pages",
    megaMenu: true,
    link: "",
    pluseInco: true,
    pages: true,
    mega_menus: [
      {
        title: "Page Layout 1",
        link: "",
        submenus: [
          { title: "Offer", link: "/offers" },
          { title: "Offer Details", link: "/offer-details" },
          { title: "Bookinig Form", link: "/booking-form" },
          { title: "Event", link: "/event" },
          { title: "Event details", link: "/event-details" },
          { title: "FAQ", link: "/faq" },
        ],
      },
      {
        title: "Page Layout 2",
        link: "",
        submenus: [
          { title: "Gallery", link: "/gallery" },
          { title: "DINING", link: "/dining" },
          { title: "Login", link: "/login" },
          { title: "Sign Up", link: "/signup" },
          { title: "Forgot Password", link: "/forgot-password" },
          { title: "Pricing Plan", link: "/pricing" },
        ],
      },
      {
        title: "Page Layout 3",
        link: "",
        submenus: [
          { title: "Service", link: "/service" },
          { title: "Service Details", link: "/service-details" },
          { title: "Blog Main", link: "/blog" },
          { title: "Blog Sidebar", link: "/blog-sidebar" },
          { title: "Blog Classic", link: "/blog-classic" },
          { title: "Blog Details", link: "/blog-details" },
        ],
      },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    title: "Blog",
    link: "/blog",
    pluseInco: true,
    submenus: [
      { title: "Blog Main", link: "/blog" },
      { title: "Blog Sidebar", link: "/blog-sidebar" },
      { title: "Blog Classic", link: "/blog-classic" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "contact us ",
    link: "/contact",
    pluseInco: false,
  },
];

export default menu_data;
