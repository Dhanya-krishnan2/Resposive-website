import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import './Header.css';
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

function HeaderResponsive() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div className='navbar-container'>
            <a href="#" className='brand-title'>Brand Name</a>
            <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
              <ul className='links-list'>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
      <Route path="/about" component={About}>
      </Route>
      <Route path="/contact" component={Contact}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
    </Switch>
  );
}
// this is place where we calling home
// function Home() {
//   return (
//     <h1>This is home page</h1>
//   );
// }
// here is the function where we use About
// function About() {
//   return (
//     <h1>This is about page</h1>
//   );
// }
// Here is the Contact information
// function Contact() {
//   return (
//     <h1>This is contact page</h1>
//   );
// }
// WE can add as many as links in the menu when needs arrives
export default HeaderResponsive;
