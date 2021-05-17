import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>BookToRead.com</h1>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Retour à la liste</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
