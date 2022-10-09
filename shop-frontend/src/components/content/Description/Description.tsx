import React from "react";

export function Description() {
  return (
    <div
      className="w-full bg-zinc-800 h-full text-white
    font-medium leading-normal font-['Kanit']
    text-5xl flex flex-row flex-wrap justify-center"
    >
      <div className={"mx-8"}>
        <p>100% of</p>
        <ul className="list-disc ml-8 list-inside">
          <li>Cotton</li>
          <li>Comfort</li>
          <li>Speed</li>
          <li>Style</li>
        </ul>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/skateboard-promo.jpg`}
        alt={""}
        className={"w-96 rounded-lg mx-8"}
      />
    </div>
  );
}
