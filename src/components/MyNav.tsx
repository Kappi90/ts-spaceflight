import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar
      className='justify-content-center myNav'
      collapseOnSelect
      expand='md'
    >
      <Link to='/'>
        <Navbar.Brand
          style={{ fontSize: "3vh" }}
          className='text-center navBrand'
        >
          SPACEFLIGHT
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default MyNavbar;
