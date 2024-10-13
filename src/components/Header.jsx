import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { setUser } from "../store/usersSlice";
import { auth } from '../firebase/config.js';


function Header({pageTitle}) {

  const dispatch = useDispatch();
  
  function handleLogout() {
   if(confirm("Are you sure you want to log out?")) {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    }).catch((error) => {
      console.log(error);
    });
  }

   
  }


    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Books
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

                    <button onClick={handleLogout} className="btn transparent">
                      Logout
                    </button>

               
            </div>
    
      </>
    )
  }
  
  export default Header
  