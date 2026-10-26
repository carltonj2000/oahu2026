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

export const DaysO = {
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
