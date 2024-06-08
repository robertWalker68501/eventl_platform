export const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
    iconUrl: "",
  },
  {
    id: 2,
    label: "Create Event",
    url: "/events/create",
    iconUrl: "",
  },
  {
    id: 3,
    label: "My Profile",
    url: "/profile",
    iconUrl: "",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
