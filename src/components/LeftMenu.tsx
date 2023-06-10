import React from "react";

const NavItemLink = (props: { href: string; itemName: string }) => {
  return (
    <a className="text-light-yellow" href={props.href}>
      {props.itemName}
    </a>
  );
};

const LeftMenu = () => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div className=" text-secondary h2 rounded p-2 m-0">
        {`> console.log(`}
        <NavItemLink href="#skills" itemName="skills" />
        {`)`};
      </div>
      <div className=" text-secondary h2 rounded p-2 m-0">
        {`> console.log(`}
        <NavItemLink href="#projects" itemName="projects" />
        {`)`};
      </div>
      <div className=" text-secondary h2 rounded p-2 m-0">
        {`> console.log(`}
        <NavItemLink href="#experience" itemName="experience" />
        {`)`};
      </div>
      <div className=" text-secondary h2 rounded p-2 m-0">
        {`> console.log(`}
        <NavItemLink href="#contact" itemName="contact me" />
        {`)`};
      </div>
      <div className=" text-secondary h2 rounded p-2 m-0">
        {`> `} <span>|</span>
      </div>
    </div>
  );
};

export default LeftMenu;
