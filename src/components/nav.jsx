import { useState, useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const scrollToSection = (id) => {
    // 1️⃣ Close menu first
    setOpen(false);

    // 2️⃣ Wait for mobile layout to stabilize (CRITICAL)
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 180); // DO NOT reduce on mobile
  };

  return (
    <nav className="nav">
      <div className="nav-left">Koduri Sri Sai Suhas</div>

      {/* Navigation Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("about")}>About</span>
        <span onClick={() => scrollToSection("projects")}>Projects</span>
        <span onClick={() => scrollToSection("eb")}>Educational Background</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </div>

      {/* Hamburger */}
      {!open && (
        <div className="hamburger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Close Button */}
      {open && (
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>
      )}
    </nav>
  );
};

export default Nav;
