import * as React from "react"

const Varios = () => {
  return (
    <div>
        
      <nav
        className="main-menu"
        aria-label="Main navigation"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      > ### Menu Inferior &rarr; 
        <a
          href="https://www.hp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
        >
          hp
        </a>
        <a
          href="https://www.dell.com"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
        >
          dell
        </a>
        <a
          href="https://www.sony.com"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
        >
          Sony
        </a>
        <a
          href="https://urbe.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
        >
          Ir a Urbe.edu
        </a>
      </nav>
    </div>
  )
}

export default Varios