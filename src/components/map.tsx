import { locations, locationKeys } from "./locations.ts";
export const Map = ({ location }: { location: string }) => {
  const goOrNot = (ia: boolean, href: string) =>
    !ia && (window.location.href = href);
  if (locationKeys.includes(location)) {
    const l = locations[location];
    const inactive = !l.google || l.google.length === 0;
    return (
      <button
        className="my-1.5 inline-block"
        onClick={() => goOrNot(inactive, l.google)}
      >
        <img
          src="/Google_Maps_ico.svg"
          className={`ml-4 inline brightness-75 filter ${inactive ? "grayscale" : ""}`}
          alt={`Google Maps`}
          width="20"
          height="20"
        />
      </button>
    );
  } else {
    return "Program error did not find ({location}) location. (1)";
  }
};
