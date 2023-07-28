import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
import imgNav from "../../assets/images/XCM_Manual_1550677_5471696_400x39_2X._CB592483028_.jpg";
import flagImg from "../../assets/images/egypt.png";
import { langContext } from "../../context/lang";
import "./style.css";

export default function Navbar() {
  const [user, setUser] = useState({});

  var { lang } = useContext(langContext);
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [sta, setsta] = useState({
    xall: -30,
    yall: -30,
    xmark: 101,
    ymark: 1,
  });

  const handleall = () => {
    if (lang == "en") {
      setsta({
        yall: -30,
        xall: 0,
        xmark: 101,
      });
    } else {
      setsta({
        xall: 76,
        yall: 110,
        ymark: -8,
      });
    }
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [menu, setMenu] = useState(false);
  async function handelMenu() {
    handleall();
    await delay(500);
    setMenu(!menu);
  }
  async function signOutUser() {
    await signOut(auth);
    navigate("/sign");
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, [menu]);
  return (
    <>
      <div>
        <div className="navBar">
          <ul className="links">
            <li className="all" onClick={handelMenu}>
              <i className="fa-solid fa-bars" /> {t("All")}
            </li>
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/laptops">{t("Laptops")}</Link>
            </li>
            <li>
              <Link to="/womens-jewellery">{t("Jewelry")}</Link>
            </li>
            <li>
              <Link to="/sunglasses">{t("Sunglasses")}</Link>
            </li>
            <li>
              <Link to="/mens-shoes">{t("Shoes")}</Link>
            </li>
            <li>
              <Link to="/mens-shirts">{t("Shirts")}</Link>
            </li>
            <li>
              <Link to="/womens-dresses">{t("Dresses")}</Link>
            </li>
            <li>
              <Link to="/lighting">{t("Lighting")}</Link>
            </li>
            <li>
              <Link to="/smartphones">{t("Mobiles")}</Link>
            </li>
          </ul>
          <img className="img" src={imgNav} alt="" />
        </div>
      </div>
      {/* start overlay */}
      <div>
        <div
          className="layout"
          style={{ display: menu ? "block" : "none" }}
          onClick={() => setMenu(false)}
        />
        <div
          className="menu"
          style={{
            left: menu ? `${sta.xall}%` : `${sta.yall}%`,
            transition: menu ? "1s" : "0.0001s",
          }}
        >
          <span
            className="x-mark"
            style={{
              display: menu ? "block" : "none",
              left: menu ? `${sta.xmark}%` : `${sta.ymark}%`,
            }}
            onClick={() => setMenu(false)}
          >
            <i
              className="fa-solid fa-xmark fa-2xl"
              style={{ color: "white" }}
            />
          </span>
          <div className="header">
            <div className="info">
              <h3 className="heading">
                <span>
                  <i className="fa-solid fa-circle-user" />{" "}
                </span>
                {user?.email ? (
                  `Hello , ${localStorage.getItem("name")}`
                ) : (
                  <>
                    {t("Hello")}{" "}
                    <Link to="/sign" id="signUser">
                      {t("sign")}
                    </Link>
                  </>
                )}
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>{t("Trending")}</h4>
            <div>{t("Bestselling")}</div>
            <div>{t("NewReleases")}</div>
            <div>
              {t("Movers")} &amp;{t("Sharks")}{" "}
            </div>
          </div>
          <div className="digital">
            <h4>{t("Digital")}</h4>

            <div className="d-flex align-items-center justify-content-between">
              <span>{t("AmazonKindle")} </span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>{t("ShopByCategory")}</h4>
            <Link to="/laptops">
              <span>{t("Electronics")}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/womens-jewellery">
              <span>{t("Jewelry")}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/mens-shirts">
              <span>{t("Menclothing")}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/womens-dresses">
              <span>{t("Womenclothing")}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
          </div>
          <div className="help">
            <h4>
              {t("Help")} &amp; {t("Settings")}
            </h4>
            <Link to="sign">{t("YourAccount")}</Link>
            <div>
              <i className="fa-solid fa-earth-americas me-2" />
              {t("English")}
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <img src={flagImg} style={{ width: "20px" }} alt="" />
              <span style={{ marginLeft: "5px" }}>{t("Egypt")}</span>
            </div>
            {user?.email ? (
              <div
                className="d-flex align-items-center justify-content-between p-3"
                onClick={signOutUser}
              >
                <span style={{ marginLeft: "5px" }}>{t("Sign Out")}</span>
              </div>
            ) : (
              <Link
                className="d-flex align-items-center justify-content-between p-3"
                to="/sign"
              >
                <span style={{ marginLeft: "5px" }}>{t("Sign In")}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* End overlay */}
    </>
  );
}
