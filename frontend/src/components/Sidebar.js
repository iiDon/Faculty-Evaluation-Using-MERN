import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

//import Assets
import control from "../assets/control.png";
import logo from "../assets/logo.png";

const Header = ({ user }) => {
  const email = useSelector(state => state.auth.email)
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("first");
    dispatch(logout());
  };

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const Menus = [
    {
      title: "الصفحة الرئيسية",
      src: "grid-outline",
      link: "/",
      isEnabled: true,
    },
    {
      title: "أعضاء هيئة التدريس",
      src: "people-outline",
      link: "/faculty",
      isEnabled: true,
    },
    {
      title: "التخصصات",
      src: "book-outline",
      link: "/major",
      isEnabled: true,
    },
    {
      title: "المواد",
      src: "bookmark-outline",
      link: "/courses",
      isEnabled: true,
    },
    { title: "إضافة", src: "add-outline", link: "#", isEnabled: true },
    {
      title: "من نحن؟",
      src: "help-circle-outline",
      link: "/about",
      gap: true,
      isEnabled: true,
    },
    {
      title: "تواصل معنا",
      src: "call-outline",
      link: "/contact",
      isEnabled: true,
    },
  ];

  const changheDirectory = (index) => {
    setActive(index);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex">
        <div
          className={` ${
            open ? "w-80" : "w-20 "
          } bg-main h-screen p-5 pt-8 relative duration-300`}
        >
          <img
            src={control}
            alt=""
            className={`absolute cursor-pointer -left-3 top-9 w-7 border-main
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              alt=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-200 ${
                !open && "scale-0"
              }`}
              
            >{email}</h1>
          </div>

          <ul className="pt-6 transition duration-500 ease-in-out">
            {Menus.map((Menu, index) => (
              <Link
                to={Menu.link}
                key={index}
                onClick={() => changheDirectory(index)}
                hidden={!Menu.isEnabled}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-secondary text-white  text-sm items-center gap-x-4 transition duration-500 ease-in-out
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === active &&
                    "bg-secondary duration-500 transition ease-in-out text-[#03045e]"
                  } `}
                >
                  <ion-icon name={Menu.src} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </Link>
            ))}
            <li
              onClick={handleLogout}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-secondary text-white  text-sm items-center gap-x-4 transition duration-500 ease-in-out"
            >
              <ion-icon name="log-out-outline" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                تسحيل الخروج
              </span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
