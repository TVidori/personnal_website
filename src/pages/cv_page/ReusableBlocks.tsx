import {ReactNode} from "react";

export function LeftTitleBlock({text}: { text: string }) {
  return (
    <div className="
      secondary-font text-xl mt-5
      font-subtitle
    ">
      {text}
      <div className="pb-0.5 border-b-2 secondary-border w-1/2"></div>
    </div>
  )
}

export function LeftContentBlock({children}: { children: ReactNode }) {
  return (
    <div
      className="secondary-font text-sm"
    >
      {children}
    </div>
  )
}

export function LeftEducationTitleBlock(
  {school, dates, diploma}: { school: string, dates: string, diploma: string }
) {
  return (<>
    <div className="flex justify-between mt-2">
      <div className="secondary-font text-[15px]">{school}</div>
      <div className="secondary-font text-[15px]">{dates}</div>
    </div>
    <div className="secondary-font text-sm mb-1">{diploma}</div>
  </>)
}

export function LeftEducationContentBlock({children}: { children: ReactNode }) {
  return (
    <div
      className="secondary-font text-xs ml-2"
    >
      {children}
    </div>
  )
}

export function RightTitleBlock({text}: { text: string }) {
  return (
    <div className="
      primary-font text-xl mt-1 pb-1 mb-1 border-b-2 primary-border
      font-subtitle
    ">
      {text}
    </div>
  )
}

export function RightSubTitleBlock(
  {position, dates, company, location}: {
    position: string,
    dates: string,
    company: string,
    location: string,
  }
) {
  return (<>
    <div className="flex justify-between mt-1 -mb-1">
      <div className="
        basic-font font-semibold  text-lg
      ">
        {position}
      </div>
      <div>{dates}</div>
    </div>
    <div className="flex justify-between">
      <div>{company}</div>
      <div className="my-auto text-sm">{location}</div>
    </div>
  </>)
}


export function RightContentBlock(
  {children, indent, light}: {
    children: ReactNode, indent?: boolean, light?: boolean
  }
) {
  return (
    <div
      className={`
        basic-font font-custom text-[13px] 
        ${indent ? "ml-2" : ""} ${light ? "font-light" : ""}
      `}
    >
      {children}
    </div>
  )
}