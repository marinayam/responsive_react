import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">ホーム</a></p>
  <p><a href="#wtravel">私たちについて</a></p>
  <p><a href="#possibility">会員特典</a></p>
  <p><a href="#features">サービス</a></p>
  <p><a href="#blog">ブログ</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="travel__navbar">
      <div className="travel__navbar-links">
        <div className="travel__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="travel__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="travel__navbar-sign">
        <p>ログイン</p>
        <button type="button">登録</button>
      </div>
      <div className="travel__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="travel__navbar-menu_container scale-up-center">
          <div className="travel__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="travel__navbar-menu_container-links-sign">
            <p>ログイン</p>
            <button type="button">登録</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar