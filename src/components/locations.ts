export enum CategoryE {
  Shopping = "Shopping",
  Hiking = "Hiking",
  Activity = "Activity",
}

export const locations: Record<
  string,
  { google: string; link?: string; catagory?: CategoryE }
> = {
  ["Polynesian Cultural Center"]: {
    google: "https://maps.app.goo.gl/TY6GYmFcCLkVL3X89",
    link: "https://www.polynesia.com/",
    catagory: CategoryE.Activity,
  },
  ["Apt by HomeWorld"]: {
    google: "",
    catagory: CategoryE.Shopping,
  },
  ["HomeWorld"]: {
    google: "https://maps.app.goo.gl/ADFi827mYchbfdVs8",
    catagory: CategoryE.Shopping,
  },
  ["C.S. Wo & Sons"]: {
    google: "",
    catagory: CategoryE.Shopping,
  },
  ["Elite Discount Furniture"]: {
    google: "",
    catagory: CategoryE.Shopping,
  },
  ["Ashley "]: {
    google: "",
    catagory: CategoryE.Shopping,
  },
};

export const locationKeys = Object.keys(locations);
export type LocationsT = keyof typeof locations;
