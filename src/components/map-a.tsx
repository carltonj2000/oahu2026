import { locations, locationKeys } from "./locations.ts";
export const Map = ({ location }: { location: string }) => {
  const goOrNot = (ia: boolean, href: string) =>
    !ia && (window.location.href = href);
  if (locationKeys.includes(location)) {
    const l = locations[location];
    if (!l.apple) return null;
    const inactive = !l.apple || l.apple.length === 0;
    return (
      <button
        className="my-1.5 inline-block"
        onClick={() => goOrNot(inactive, l.apple)}
      >
        <img
          src="/AppleMaps_logo.svg"
          className={`ml-4 inline brightness-75 filter ${inactive ? "grayscale" : ""}`}
          alt={`Apple Maps`}
          width="24"
          height="24"
        />
      </button>
    );
  } else {
    return "Program error did not find ({location}) location. (5)";
  }
};
