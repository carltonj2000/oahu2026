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
    google: "https://maps.app.goo.gl/Shm8PyT76k6tcRas9",
    catagory: "Hiking",
  },
  ["Pali notches"]: {
    google: "https://maps.app.goo.gl/tKLUK9AmGZNmRMta7",
    catagory: "Hiking",
  },
  ["Kailua Beach"]: {
    google: "",
    catagory: "Beach",
  },
  ["Pillbox"]: {
    google: "https://maps.app.goo.gl/KuezzUch1JU3Mrjx6",
    catagory: "Hiking",
  },
  ["Kayak To Mokes - Rent Soon"]: {
    google: "https://maps.app.goo.gl/QGK9BMoqoKdAsK3f7",
    catagory: "Beach",
    link: "https://www.kailuabeachadventures.com/kailua-lanikai-kayak-rentals",
  },
  ["China Walls"]: {
    google: "",
    catagory: "Cliff Jumping",
  },
  ["Pearl Harbor"]: {
    google: "",
    catagory: "History",
    toSchedule: true,
  },
  ["Highway to heaven backwards"]: {
    google: "",
    catagory: "Hiking",
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
  ["Punchbowl Crater"]: {
    google: "https://maps.app.goo.gl/js75PpTbBX4aP2ws9",
    catagory: "Hike",
  },
  ["View of Waikiki and Diamond Head"]: {
    google: "https://maps.app.goo.gl/AcobTvvPxvswoajE7",
    catagory: "Hike",
  },
  ["Stairway to heaven"]: {
    google: "https://maps.app.goo.gl/XegVmPCYyonwCRbj7",
    catagory: "Hike",
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
