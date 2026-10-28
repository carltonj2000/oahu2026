export const locations: Record<
  string,
  { google: string; link?: string; catagory?: string }
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
  ["Ashley "]: {
    google: "",
    catagory: "Shopping",
  },
};

export const locationKeys = Object.keys(locations);
