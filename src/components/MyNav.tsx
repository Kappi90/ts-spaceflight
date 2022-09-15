import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar
      className='justify-content-center'
      collapseOnSelect
      expand='md'
      bg='dark'
      variant='dark'
    >
      <Link to='/'>
        <Navbar.Brand className='text-center'>Spaceflight</Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default MyNavbar;
