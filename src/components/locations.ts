export const locations: Record<
  string,
  { google: string; link?: string; catagory?: string; toSchedule?: boolean }
> = {
  ["Polynesian Cultural Center"]: {
    google: "https://maps.app.goo.gl/TY6GYmFcCLkVL3X89",
    link: "https://www.polynesia.com/",
    catagory: "Cultural",
  },
  ["Apt by HomeWorld"]: {
    google: "",
    catagory: "Shopping",
  },
  ["HomeWorld"]: {
    google: "https://maps.app.goo.gl/ADFi827mYchbfdVs8",
    catagory: "Shopping",
  },
  ["C.S. Wo & Sons"]: {
    google: "",
    catagory: "Shopping",
  },
  ["Elite Discount Furniture"]: {
    google: "",
    catagory: "Shopping",
  },
  ["Ashley"]: {
    google: "",
    catagory: "Shopping",
  },
  ["Olomana three notches"]: {
    google: "",
    catagory: "Hiking",
    toSchedule: true,
  },
  ["Pali notches"]: {
    google: "",
    catagory: "Hiking",
    toSchedule: true,
  },
  ["Kailua Beach"]: {
    google: "",
    catagory: "Beach",
    toSchedule: true,
  },
  ["Pillbox"]: {
    google: "",
    catagory: "Hiking",
    toSchedule: true,
  },
  ["Kayak To Mokes - Rent Soon"]: {
    google: "https://maps.app.goo.gl/QGK9BMoqoKdAsK3f7",
    catagory: "Beach",
    link: "https://www.kailuabeachadventures.com/kailua-lanikai-kayak-rentals",
  },
  ["China Walls"]: {
    google: "",
    catagory: "Cliff Jumping",
    toSchedule: true,
  },
  ["Pearl Harbor"]: {
    google: "",
    catagory: "History",
    toSchedule: true,
  },
  ["Highway to heaven backwards"]: {
    google: "",
    catagory: "Hiking",
    toSchedule: true,
  },
  ["Elite Discount Furniture Home Delivery"]: {
    google: "https://maps.app.goo.gl/Uc1LJHbxhuzdai317",
    catagory: "Home",
  },
  ["Hilton Hawaiian Village Fireworks"]: {
    google: "https://maps.app.goo.gl/CFGUtjCqzLE7eZjf9",
    catagory: "Beach",
  },
  ["Walmart"]: {
    google: "https://maps.app.goo.gl/m2jsbdXtyVg3syvTA",
    catagory: "Shopping",
  },
};

export type LocationValues = (typeof locations)[keyof typeof locations];

export const locationKeys = Object.keys(locations);
/*

Queens palace
YMCA high tea
Highway to heaven backwards 
Humane bay
Diamonds head
Lahina 

Big kahuna sandwich shop
Olomana (three notches), and pali notches. I think the latter might be closed
now but I’m sure people still do it. Up to your discretion. Kailua is worth
going to, pillbox hike is there, the beach is really nice, and you can rent a
kayak to get to the Mokes. Not a hike, but China walls is nice for sunset and
watching people cliffjump/surf.

Lots of other peaks and waterfall hikes I can’t remember but easy to look up.
Also, a lot of them are inside neighborhoods or off the side of the road. So
don’t leave anything valuable inside.

Pearl Harbor

*/
