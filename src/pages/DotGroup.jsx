import React from 'react'

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow-400 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow-400 before:left-[-50%] before:top-[-50%] z-60`;
  const navlinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="flex flex-col gap-6 fixed top-[40%] right-7">
      {navlinks.map((page, idx) => {
        return (
          <a
            key={idx}
            href={`#${page.toLowerCase()}`}
            className={`${
              selectedPage === page.toLowerCase()
                ? selectedStyles
                : "bg-grey"
            } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage(page.toLowerCase())}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;
