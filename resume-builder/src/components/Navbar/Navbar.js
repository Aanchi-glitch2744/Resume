import './nav.css';
import logo from '../../assets/logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar() {
    return (
    <nav className="nav">
       <Link to="/" className="site-title">
            <div className="logo-image">
                <img src={logo} alt="📃" className="img-fluid" />
            </div>
            Resume Builder
        </Link>
        <ul>
            <CustomLink to="/history">Resume History</CustomLink>
            <CustomLink to="/create">Create Resume</CustomLink>
            <CustomLink to="/about">About</CustomLink>
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