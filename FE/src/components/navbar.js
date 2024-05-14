import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sideabar from "./Sideabar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav>
        <Link to="/mainPage">
          <img
            className="kmou_logo"
            src="https://www.kmou.ac.kr/images/web/kmou/common/logo3.png"
            alt="kmou_logo"
          />
        </Link>
        <ul className="nav_menu">
          <li>
            <button>
              <Link to="/myPage" className="nav_menuLink">
                공지사항
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/myPage" className="nav_menuLink">
                게시판
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/myPage" className="nav_menuLink">
                학과일정
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/myPage" className="nav_menuLink">
                회의
              </Link>
            </button>
          </li>
          <li>
            <button>링크</button>
          </li>
        </ul>
        <button
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
          className="hamburger"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>

      {sidebarOpen ? (
        <Sideabar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      ) : null}
    </>
  );
};

export default Navbar;
