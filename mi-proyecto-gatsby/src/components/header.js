import * as React from "react"
import "./header.css"

const Header = ({ siteTitle = "Mi sitio" }) => {
  const menuItems = ["Inicio", "Servicios", "Blog", "Contacto"]

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">{siteTitle}</div>

        <nav className="main-menu" aria-label="Main navigation">
          {menuItems.map(item => (
            <button key={item} type="button" className="menu-button">
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
