import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container">

        {/* TOP ROW */}
        <div className="top-row">
          <div className="logo">Drunk City</div>

          <nav className="nav">
            <a>Home</a>
            <a>Shop</a>
            <a>About</a>
          </nav>
        </div>

        {/* CATEGORY ROW */}
        <div className="category-row">
          <a>Hot Deals</a>
          <a>New</a>
          <div className="cat-item">Spirits <span className="arrow">▼</span></div>
          <div className="cat-item">Wines <span className="arrow">▼</span></div>
          <div className="cat-item">Ready to Drink <span className="arrow">▼</span></div>
          <div className="cat-item">Gifts <span className="arrow">▼</span></div>
          <div className="cat-item">Brands <span className="arrow">▼</span></div>
        </div>

      </div>
    </header>
  );
}
