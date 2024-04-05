import icon from "@/images/user.png";
import logo2 from "@/images/logo.png";
import logo from "@/images/logo.png";

export const navItemsdesktop = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: "fa fa-facebook-square",
  },
  {
    id: 2,
    name: "About Us",
    href: "/about",
    icon: "fa fa-facebook-square",
  },
  {
    id: 3,
    name: "Explore",
    href: "/projects-1",
    icon: "fa fa-facebook-square",
  },
  {
    id: 4,
    name: "Activity",
    href: "/faq",
    icon: "fa fa-facebook-square",
  },
  {
    id: 5,
    name: "Profile",
    href: "",
    icon: "fa fa-facebook-square",
    subNavItems: [
      { id: 1, name: "Blog", href: "/news" },
    ],
  },
  {
    id: 6,
    name: "Contact Us",
    href: "/contact",
    icon: "fa fa-facebook-square",
  },
];


export const navItems = [
{
  id: 1,
  name: "Home",
  href: "/",
  icon: "fa fa-home",
},
{
  id: 2,
  name: "Explore",
  href: "/",
  icon: "fa fa-compass",
},
{
    id: 3,
    name: "Update",
    href: "/",
    icon: "fa fa-check-circle-o",
},
{
    id: 4,
    name: "Activity",
    href: "/",
    icon: "fa fa-line-chart",
},
{
  id: 5,
  name: "Profile",
  href: "/",
  icon: "fa fa-user-circle",
}

];

export const socials = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-dribbble",
    href: "#",
  },
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  email: "needhelp@sanjivani.ngo",
  phone: "666 888 0000",
  address: "Pune, India",
  socials,
};

export default headerData;
