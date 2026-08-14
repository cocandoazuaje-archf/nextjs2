import * as React from "react"
import "./header.css"

const Header = ({ siteTitle = "Mi sitio" }) => {
  const menuItems = [
    { label: "Inicio", url: "http://localhost:8000/" },
    { label: "Servicios", url: "https://about.google/products/" },
    { label: "Blog", url: "https://blog.google/" },
    { label: "Contacto", url: "https://about.google/contact-google/" },
    { label: "Ir a Urbe.edu", url: "https://urbe.edu" },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">{siteTitle}</div>

        <nav className="main-menu" aria-label="Main navigation">
          {menuItems.map(item => (
            <a
              key={item.label}
              href={item.url}
              target={item.url.includes("localhost") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="menu-button"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header