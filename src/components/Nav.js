import React, { useState, useEffect } from "react";
import "./Nav.css";
import {useNavigate} from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate =useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange=(e)=>{
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)

  };



  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => (window.location.href = "/react-netflix-clone")}
      />

      <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder="영화를 검색해주세요"/>



      <img
        alt="User logged"
        src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDlfMjcw/MDAxNjI4NDU0Nzk0Mzk1.VN6213_kUVdbP5hsyH7frI05-68TOVbL92Nq0hWT6Rog.LOz7Ciozpsvb9Lo1k-V973QYNGims2_ZrRVCUkS4tiAg.JPEG.begofayo12/IMG_1565.JPG?type=w800"
        className="nav__avatar"
      />
    </nav>
  );
}
