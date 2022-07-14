import React, { useState } from "react";
import "./Header.css";
import Logo1 from "../../assets/logo1.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo1} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadious: "5px",
          }}
          onClick={() => setmenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setmenuOpened(false)}
              to="Home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpened(false)}
              to="Programs"
              span={true}
              smooth={true}
            >
              programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpened(false)}
              to="Reasons"
              span={true}
              smooth={true}
            >
              why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpened(false)}
              to="Plans"
              span={true}
              smooth={true}
            >
              plans
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setmenuOpened(false)}
              to="Testimonials"
              span={true}
              smooth={true}
            >
              testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
