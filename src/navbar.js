import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./silver-metallic-lion-logo-on-a-black-background-vector-20158388.webp"
import "./style.css"
 
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} className="logo" alt="Challenge" target="blank"></img>
       <span className="header">
       Challenge
        </span>
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">Survey</CustomLink>
        {/* <CustomLink to="/yourfeed">Your Feed</CustomLink> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}