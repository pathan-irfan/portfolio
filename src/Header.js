// import { Link } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link';

const Header = () => {


  




  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark position:fixed "  id='header'>
    <div className=" container-fluid "  >
     
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 color-red " id='nav' >
          <li className="nav-item"  >
            <Link className="nav-link active text-light text-alin-center "  id='left'aria-current="page" smooth to="#home">Home</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link  text-light   mx-auto" smooth to="#about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-light" smooth to="#resume">Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-light"  smooth to="#skill">Skill</Link>
          </li>
          <li className="nav-item">
      
          </li> <li className="nav-item">
            <Link className="nav-link  text-light" smooth to="#contact">Contact me</Link>
          </li>
        
         </ul>
         
      </div>
    </div>
  </nav>
  
  </>
  )
}

export default Header
