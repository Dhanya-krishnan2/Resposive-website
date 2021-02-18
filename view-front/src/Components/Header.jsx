import React, { useRef, useEffect} from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import './Header.css';
import About from './About';
import Home from './Home';
import Frequently from './Faq';
import Services from './Services';
import Contact from './Contact';
// here we using useref hooks to collapse the navmenu
export default function Header() {
    const navBarLinks = useRef(null);
    const handleNavbarButton = () => {
      navBarLinks.current.classList.toggle('menu-collapse');
    };
    // this is to hide the menu
    const hideNavMenu = () => {
      if(!navBarLinks.current.classList.contains('menu-collapse')){
          navBarLinks.current.classList.add('menu-collapse');
      }
    }
    // above gives the conditions to collapse the menu when needed
  return (
    <div className="Header">
    <BrowserRouter>
       <nav className="navbar">
       <div className="navbar-container">
       <a href="#" className='brand-title'> Ausind Solar</a>
       <button onClick={(e) => {handleNavbarButton(e);}} className='navbar-toggler'> 
        <span className='nabar-toggle-icon'></span>
       </button>
      <div ref= {navBarLinks} className='navbar-links menu-collapse'>
      <ul className='links-list'>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About us</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact us</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/frequently'>FAQ</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/services'>Services</NavLink>
        </li>
      </ul>
      </div>
       </div>
       </nav>
    </BrowserRouter>
      
    </div>
  );
}
// this function uses useEffect hooks to hide the menu
function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);
   return(
      <Switch>
      <Route path="/" component={Home}>
      </Route>
      <Route path="/" component={Contact}>
      </Route>
       
      <Route path="/" component={About}>
      </Route>
      <Route path="/" component={Services}>
      </Route>
      </Switch>
   );

}