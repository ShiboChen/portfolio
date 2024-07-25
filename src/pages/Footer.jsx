import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center px-6 py-4 bg-blue">
      <p>Shibo Chen &copy; {currentYear}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
