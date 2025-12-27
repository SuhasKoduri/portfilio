import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-left">Koduri Sri Sai Suhas</div>

      {/* Navigation Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#eb" onClick={handleLinkClick}>Educational Background</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      {/* Hamburger */}
      {!open && (
        <div className="hamburger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Close X */}
      {open && (
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>
      )}
    </nav>
  );
};

export default Nav;
