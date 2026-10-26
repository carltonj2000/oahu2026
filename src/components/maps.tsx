export enum LocationE {
  FashonShow = "Fashon Show",
  PolynesianCC = "Polynesian Cultural Center",
}

const locations: Record<LocationE, { google: string; link?: string }> = {
  [LocationE.FashonShow]: {
    google: "https://maps.app.goo.gl/K1h7w7jm4Vf47od67",
  },
  [LocationE.PolynesianCC]: {
    google: "https://maps.app.goo.gl/TY6GYmFcCLkVL3X89",
    link: "https://www.polynesia.com/",
  },
};

export const Maps = ({ location }: { location: LocationE }) => {
  const l = locations[location];
  return (
    <span className="inline-block my-1.5">
      <a href={l.google}>
        <img
          src="/Google_Maps_ico.svg"
          className="filter brightness-75 inline ml-4"
          alt={`Google Maps`}
          width="20"
          height="20"
        />
      </a>
    </span>
  );
};

export const Name = ({ location }: { location: LocationE }) => {
  const l = locations[location];
  console.log(l);
  if (Object.hasOwn(l, "link")) {
    return (
      <a href={l.link} className="underline text-blue-400">
        {location}
      </a>
    );
  } else {
    return <>{location}</>;
  }
};

export const MapsNname = ({ location }: { location: LocationE }) => {
  return (
    <span className="inline-block my-1.5">
      <Name location={location} /> <Maps location={location} />
    </span>
  );
};
