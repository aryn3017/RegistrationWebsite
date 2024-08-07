import React from "react";

const UnOrderedList5 = () => {
  return (
    <div className="w-full">
      <ul className="space-y-3">
        <ListItem
          text="Founder Director, SMARTS, Asian Institute of Technology, Bangkok
"
          lnk={"https://ait.ac.th/2018/08/prof-joyashree-roy-joins-ait-bangabandhu-chair-professor/"}
          hea="Dr Joyashree Roy
"
        />
        <ListItem
          text="Chief Research Scientist, IISc
          
"
          lnk={"https://mgmt.iisc.ac.in/p-balachandra/"}
          hea="Dr Balachandra Patil"
        />
        <ListItem
          text="Open Energy Transition, Global modelling thinktank
OptimalSolution, USA
"
          lnk={""}
          hea="Dr Oleg Lugovoy

"
        />
        <ListItem
          text="Associate Vice President, Environmental Defense Fund
"
          lnk={"https://www.edf.org/people/matthias-fripp"}
          hea="Dr Mathias Fripp

"
        />
        <ListItem
          text="Senior Program Manager, World Resources Institute, India"
          hea="Dr. Varun J"
          lnk={""}
        />
        <ListItem
          text="Assistant Professor, Indian Institute of technology, Roorkee"
          hea="Dr Tarun Sharma"
          lnk={"https://www.iitr.ac.in/~DM/Tarun_Sharma"}
        />
      </ul>
    </div>
  );
};

export default UnOrderedList5;

const ListItem = ({ text, hea, lnk }) => {
  return (
    <li className="flex text-base text-body-color dark:text-dark-6  ">
      <span className="mr-2.5 mt-0.5 text-blue-900">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_980_24852)">
            <path
              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
              fill="currentColor"
            />
            <path
              d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_980_24852">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <a href={lnk} className="flex flex-col p-0  ">
        <h1 className="text-xl mb-0 pb-0 text-blue-800 font-bold">{hea}</h1>
        {text}
      </a>
    </li>
  );
};
