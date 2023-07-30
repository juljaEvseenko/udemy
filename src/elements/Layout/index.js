import { Routes, Route, Outlet, Link } from "react-router-dom";
export const Layout = () => {
    return (
        <div>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <ul>
              <li>
                <Link to="/">ButtonPage</Link>
              </li>
              <li>
                <Link to="/accordion">AccordionPage</Link>
              </li>
              <li>
                <Link to="/dropdown">DropdownPage</Link>
              </li>
              <li>
                <Link to="/modal">ModalPage</Link>
              </li>
              <li>
                <Link to="/table">TablePage</Link>
              </li>
              <li>
                <Link to="/counter">CounterPage</Link>
              </li>
            </ul>
          </nav>
    
          <hr />
    
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
        </div>
      );
}