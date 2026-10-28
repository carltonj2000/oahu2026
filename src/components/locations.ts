export const locations: Record<
  string,
  { google: string; link?: string; catagory?: string; notPlanned?: boolean }
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
    notPlanned: true,
  },
};

export const locationKeys = Object.keys(locations);
/*
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
