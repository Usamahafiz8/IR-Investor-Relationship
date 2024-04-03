import menu_data from "@/data/menu-data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      {menu_data?.map((item) => (
        <li
          key={item.id}
          className={` ${
            item.megaMenu === true ? "has-dropdown has-mega-menu" : " "
          } ${item.hasDropdown === true ? "has-dropdown" : " "}`}
        >
          <Link href={item.link}>{item.title}</Link>
          {item.hasDropdown === true && (
            <ul className="submenu">
              {item?.submenus?.map((i, index) => (
                <li key={index}>
                  <Link href={i.link}> {i.title} </Link>
                </li>
              ))}
            </ul>
          )}
          {item.megaMenu === true && (
            <ul className="mega-menu">
              {item.pages === true &&
                item.mega_menus.map((i, index) => (
                  <li key={index}>
                    <Link href="" className="mega-menu-title">
                      {i.title}
                    </Link>
                    <ul>
                      {i.submenus.map((submenu, index) => (
                        <li key={index}>
                          <Link href={submenu.link}> {submenu.title} </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Menu;
