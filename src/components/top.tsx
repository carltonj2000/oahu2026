import { LocationE, MapsNname as Mn, Name as N } from "./maps.tsx";
import { Days, DaysO, getOrdinalDay } from "./activities.tsx";

const Top = () => {
  return (
    <main className="max-w-2xl mx-auto flex flex-col items-center bg-fuchsia-50 h-full">
      <div className="flex items-center justify-between w-full bg-fuchsia-300 px-2 py-1 mb-3">
        <h1 className="text-xl font-semibold">Ohau</h1>
        <h1 className="text-xl font-semibold">October 2026</h1>
        <h1 className="text-xl font-semibold">Plan</h1>
      </div>

      <table className="mx-1 mt-3">
        <thead>
          <tr className="bg-fuchsia-300 text-left">
            <th className="py-2 px-3">Date</th>
            <th className="py-2 px-3">Activity</th>
            <th className="py-2 px-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {Days.map((day) => (
            <tr className="even:bg-fuchsia-100 odd:bg-fuchsia-200 text-left">
              <td className="py-1 px-2">
                {DaysO[day].weekday}
                <br />
                {getOrdinalDay(DaysO[day].day)}
              </td>
              <td className="py-1 px-2">{DaysO[day].content(true)}</td>
              <td className="py-1 px-2">{DaysO[day].content()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="mt-4 mb-8 mx-1">
        <thead>
          <tr className="bg-fuchsia-300 text-left">
            <th className="py-2 px-3">Topic</th>
            <th className="py-2 px-3">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-fuchsia-100 odd:bg-fuchsia-200 text-left">
            <td className="py-1 px-2">Activities</td>
            <td className="py-1 px-2 flex flex-col">
              <p>
                <Mn location={LocationE.PolynesianCC} />
              </p>
            </td>
          </tr>
          <tr className="even:bg-fuchsia-100 odd:bg-fuchsia-200 text-left">
            <td className="py-1 px-2">Shopping Areas</td>
            <td className="py-1 px-2 flex flex-col">
              <Mn location={LocationE.FashonShow} />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Top;
