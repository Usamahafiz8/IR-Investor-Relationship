import { AppContext } from '@/contextApi/AppProvider';
import menu_data from '@/data/menu-data';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useState, useContext } from 'react';

const MobileMenu = () => {
  const { toggleSideMenu } = useContext(AppContext) as AppContextType
  const [open, setopen] = useState<boolean>(false);
  const [menuNum, setmenuNum] = useState<number>(0);
  const [open2, setopen2] = useState<boolean>(false);
  const [menuNum2, setmenuNum2] = useState<number>(0);
  const handleOpenSubmenu = (id: number) => {
    setmenuNum(id)
    setopen(!open)

  };
  const handleOpenMegaMenu = (id: number) => {
    setmenuNum2(id)
    setopen2(!open2)

  };

  return (
    <>
      {menu_data?.map((item) => (
        <li
          key={item.id}
          className={` ${item.megaMenu === true ? "has-dropdown has-mega-menu " : " "
            } ${item.hasDropdown === true ? "has-dropdown" : " "}`}
        >
          <Link onClick={toggleSideMenu} href={item.link}>{item.title}</Link>
          {item.hasDropdown === true && (
            <ul className="submenu" style={menuNum === item.id && open ? { display: "block" } : { display: "none" }}>
              {item?.submenus?.map((i, index) => (
                <li key={index}>
                  <Link onClick={toggleSideMenu} href={i.link}> {i.title} </Link>
                </li>
              ))}
            </ul>
          )}

          {item.hasDropdown === true && <Link href="#" onClick={() => handleOpenSubmenu(item.id)} className="mean-expand" style={{ fontSize: "18px" }}><i className={`bi fa-light ${menuNum === item.id && open ? "fa-minus" : "fa-plus"}`}></i></Link>}
          {item.megaMenu === true && <Link href="#" onClick={() => handleOpenSubmenu(item.id)} className="mean-expand" style={{ fontSize: "18px" }}><i className={`bi fa-light ${menuNum === item.id && open ? "fa-minus" : "fa-plus"}`}></i></Link>}

          {item.megaMenu === true && (
            <ul className="mega-menu">
              {item.pages === true &&
                item.mega_menus.map((i, index) => (
                  <li key={index} style={menuNum === item.id && open ? { display: "block" } : { display: "none" }}>
                    <Link href="" className="mega-menu-title">
                      {i.title}
                    </Link>
                    <Link href="#" onClick={() => handleOpenMegaMenu(index + 6)} className="mean-expand" style={{ fontSize: "18px" }}><i className={`bi fa-light ${menuNum2 === index + 6 && open2 ? "fa-minus" : "fa-plus"}`}></i></Link>
                    <ul style={menuNum2 === index + 6 && open2 ? { display: "block" } : { display: "none" }}>
                      {i.submenus.map((submenu, index) => (
                        <li key={index}>
                          <Link onClick={toggleSideMenu} href={submenu.link}> {submenu.title} </Link>
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

export default MobileMenu;