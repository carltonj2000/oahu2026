export const locations: Record<
  string,
  {
    google: string;
    apple: string;
    link?: string;
    catagory?: string;
    toSchedule?: boolean;
  }
> = {
  ["Polynesian Cultural Center"]: {
    google: "https://maps.app.goo.gl/TY6GYmFcCLkVL3X89",
    apple: "https://maps.apple/p/QjAAvNSm256e9D",
    link: "https://www.polynesia.com/",
    catagory: "Cultural",
  },
  ["Apt by HomeWorld"]: {
    google: "",
    apple: "",
    catagory: "Shopping",
  },
  ["HomeWorld"]: {
    google: "https://maps.app.goo.gl/ADFi827mYchbfdVs8",
    apple: "",
    catagory: "Shopping",
  },
  ["C.S. Wo & Sons"]: {
    google: "",
    apple: "",
    catagory: "Shopping",
  },
  ["Elite Discount Furniture"]: {
    google: "",
    apple: "",
    catagory: "Shopping",
  },
  ["Ashley"]: {
    google: "",
    apple: "",
    catagory: "Shopping",
  },
  ["Olomana three notches"]: {
    google: "https://maps.app.goo.gl/Shm8PyT76k6tcRas9",
    apple: "https://maps.apple/p/Lhm~JaAaI824nR",
    catagory: "Hiking",
  },
  ["Pali notches"]: {
    google: "https://maps.app.goo.gl/tKLUK9AmGZNmRMta7",
    apple: "https://maps.apple/p/0SzTcdK1hqocq1",
    catagory: "Hiking",
  },
  ["Kailua Beach"]: {
    google: "https://share.google/CMIFQ1n7o7iYSUGZB",
    apple: "https://maps.apple/p/fmdakmn5RVyM1c",
    catagory: "Beach",
  },
  ["Pillbox"]: {
    google: "https://maps.app.goo.gl/KuezzUch1JU3Mrjx6",
    apple: "https://maps.apple/p/t8Wu1GuG-KiT.D",
    catagory: "Hiking",
  },
  ["Kayak To Mokes Rental"]: {
    google: "https://maps.app.goo.gl/QGK9BMoqoKdAsK3f7",
    apple: "https://maps.apple/p/DR2eiePJeFjDru",
    catagory: "Beach",
    link: "https://www.kailuabeachadventures.com/kailua-lanikai-kayak-rentals",
  },
  ["China Walls"]: {
    google: "",
    apple: "",
    catagory: "Cliff Jumping",
  },
  ["Pearl Harbor"]: {
    google: "https://maps.app.goo.gl/9E72JMCkAKXoCYCV9",
    apple: "https://maps.apple/p/0niQ70z1DV.fw_",
    catagory: "History",
    toSchedule: true,
  },
  ["Highway to heaven backwards"]: {
    google: "",
    apple: "",
    catagory: "Hiking",
  },
  ["Elite Discount Furniture Home Delivery"]: {
    google: "https://maps.app.goo.gl/Uc1LJHbxhuzdai317",
    apple: "https://maps.apple/p/dv_~o5MvvkmUwe",
    catagory: "Home",
  },
  ["Hilton Hawaiian Village Fireworks"]: {
    google: "https://maps.app.goo.gl/CFGUtjCqzLE7eZjf9",
    apple: "https://maps.apple/p/xfhVe8CA1Cemew",
    catagory: "Beach",
  },
  ["Walmart"]: {
    google: "https://maps.app.goo.gl/m2jsbdXtyVg3syvTA",
    apple: "https://maps.apple/p/zf--a9ca3uAU3w",
    catagory: "Shopping",
  },
  ["Punchbowl Crater"]: {
    google: "https://maps.app.goo.gl/js75PpTbBX4aP2ws9",
    apple: "https://maps.apple/p/xrI-VP~LGBrMnA",
    catagory: "Hike",
  },
  ["View of Waikiki and Diamond Head"]: {
    google: "https://maps.app.goo.gl/AcobTvvPxvswoajE7",
    apple: "https://maps.apple/p/tcUpGq2ibx0p_Z",
    catagory: "Hike",
  },
  ["Stairway to heaven"]: {
    google: "https://maps.app.goo.gl/XegVmPCYyonwCRbj7",
    apple: "https://maps.apple/p/6.Muc3HFX0fn9I",
    catagory: "Hike",
  },
  ["Mount Kaʻala"]: {
    google: "https://maps.app.goo.gl/BuqsmabGfmujNMZ19",
    apple: "https://maps.apple/p/dvI4B9jvyBc4BG",
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
