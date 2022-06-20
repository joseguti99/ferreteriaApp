import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import {IoMdAddCircleOutline} from "react-icons/io"
import {FaEdit} from "react-icons/fa"
import { Link } from "react-router-dom";
const NavBarAdmin = ({ children }) => {
  const [collapse, setCollapse] = useState("sb-nav-fixed");

  const isOpen = () => {
    if (collapse === "sb-nav-fixed") {
      setCollapse("sb-nav-fixed sb-sidenav-toggled");
    } else {
      setCollapse("sb-nav-fixed");
    }
  };

  return (
    <div className={collapse}>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <h1 className="display-6 fs-4 text-white mx-5 mx-lg-5">
          Panel Ferreteria
        </h1>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 mx-auto"
          onClick={isOpen}
        >
          <FiMenu className="text-white fs-1" />
        </button>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">PRECIOS</div>
                <Link to="/PreciosBerger" className="nav-link pointer">
                  BERGER
                </Link>
                <a className="nav-link pointer">
                  MICAM
                </a>
                <a className="nav-link pointer">
                  BOPE
                </a>
                <div className="sb-sidenav-menu-heading">Productos</div>
                <a className="nav-link pointer">
                  <IoMdAddCircleOutline className="fs-4 mx-1"/>Agregar
                </a>
                <a className="nav-link pointer">
                  <FaEdit className="fs-4 mx-2"/> Editar
                </a>
              </div>
            </div>
            {/* <a
              class="sb-sidenav-footer pointer text-decoration-none text-white"
              onClick={Logout}
            >
              <BiLogOut className="fs-4 mb-1 mx-2" />
              Cerrar Sesion
            </a> */}
          </nav>
        </div>
        <div id="layoutSidenav_content">{children}</div>
      </div>
    </div>
  );
};

export default NavBarAdmin;
