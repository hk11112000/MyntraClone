import React from "react";
import { IoPersonSharp, IoMenu } from "react-icons/io5";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import HamBurger from "./HamBurger";
import { hamburgerActions } from "../store/hamburgerSlice";

function Header() {
  const bag = useSelector((store) => store.bag);
  let width = screen.width;
  const dispatch = useDispatch();

  const hamBurgerMenu = useSelector((state) => state.hamburger);
  console.log(hamBurgerMenu);

  const menuToggle = () => {
    dispatch(hamburgerActions.hamBurger());
  };

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            ></img>
          </Link>
        </div>
        {width <= 900 ? null : <NavBar />}
        {hamBurgerMenu ? <HamBurger /> : null}
        {/* <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          ></input>
        </div> */}
        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaFaceGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container " to="/bag">
            <FaShoppingBag className="bagContainer" />
            <span className="action_name actionNameBag">Bag</span>
            <span className="bag-item-count bagCount">{bag.length}</span>
          </Link>
          <div className="action_container">
            {width <= 900 ? <IoMenu onClick={menuToggle} /> : null}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
