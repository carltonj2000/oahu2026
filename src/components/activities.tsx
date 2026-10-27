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
export const o28wed = () => {
  return <div>tbd</div>;
};

export const o29thur = () => {
  return <div>tbd</div>;
};

export const o30fri = () => {
  return <div>tbd</div>;
};

export const o31sat = () => {
  return <div>tbd</div>;
};

export const n1sun = () => {
  return <div>tbd</div>;
};

export const n2mon = () => {
  return <div>tbd</div>;
};

export const n3tue = () => {
  return <div>tbd</div>;
};

export const n4wed = (activity: boolean = false) => {
  if (activity) return <div>Hiking</div>;
  return <div>tbd</div>;
};

export const getOrdinalDay = (date: Date): string => {
  const day = date.getDate();
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

export type DayT = {
  day: Date;
  weekday: string;
  content: (activity?: boolean) => React.ReactElement;
};

export const DaysO: { [key: string]: DayT } = {
  Wednesday28: {
    day: new Date(2026, 9, 28),
    weekday: "Wed",
    content: o28wed,
  },
  Thursday29: {
    day: new Date(2026, 9, 29),
    weekday: "Thu",
    content: o29thur,
  },
  Friday30: {
    day: new Date(2026, 9, 30),
    weekday: "Fri",
    content: o30fri,
  },
  Saturday31: {
    day: new Date(2026, 9, 31),
    weekday: "Sat",
    content: o31sat,
  },
  Sunday1: {
    day: new Date(2026, 10, 1),
    weekday: "Sun",
    content: n1sun,
  },
  Monday2: {
    day: new Date(2026, 11, 2),
    weekday: "Mon",
    content: n2mon,
  },
  Tuesday3: {
    day: new Date(2026, 11, 3),
    weekday: "Tue",
    content: n3tue,
  },
  Wednesday4: {
    day: new Date(2026, 11, 4),
    weekday: "Wed",
    content: n4wed,
  },
};

export const Days = Object.keys(DaysO);
export type DaysT = keyof typeof DaysO;
