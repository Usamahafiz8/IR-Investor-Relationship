import menu_data from "@/data/menu-data"; // Assuming this is the correct path to your menu data file
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      {menu_data?.map((item) => (
        <li
          key={item.id}
          className={` 
          ${item.hasDropdown ? "has-dropdown" : " "}`}
          // ${            item.megaMenu ? "has-dropdown has-mega-menu" : " "} 
        >
          <Link href={item.link}>{item.title}</Link>
          {item.hasDropdown && (
            <ul className="submenu">
              {item.submenus?.map((i, index) => (
                <li key={index}>
                  <Link href={i.link}> {i.title} </Link>
                </li>
              ))}
            </ul>
          )}
          {/* {item.megaMenu && item.pages && item.mega_menus && (
            <ul className="mega-menu">
              {item.mega_menus.map((i, index) => (
                <li key={index}>
                  <Link href="" className="mega-menu-title">
                    {i.title}
                  </Link>
                  <ul>
                    {i.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link href={submenu.link}> {submenu.title} </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )} */}
        </li>
      ))}
    </>
  );
};

export default Menu;
