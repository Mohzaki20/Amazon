import React, { useContext, useState } from "react";

import "./Header.css";

import axios from "axios";

import { useEffect } from "react";


import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images header/amazon-logo-editorial-free-vector.jpg";

import location from "../../assets/images header/location3.png";
import location2 from "../../assets/images header/location.png";

import egypt from "../../assets/images header/downloadlan.png";
import cartImg from "../../assets/images header/cart333.png";
import cartImg2 from "../../assets/images header/cart.png";

import searchImg from "../../assets/images header/search.png";
import { useTranslation } from 'react-i18next';
import { langContext } from "../../context/lang";
import { dir } from "i18next";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FirebaseConfig/FirebaseConfig";

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  let allProduct = useSelector((state) => state.cart.cart);

  var { lang, setlang } = useContext(langContext)


  const [signInisShown, setsignInIsShown] = useState(false);

  const [langisShown, setlangisShown] = useState(false);

  const [searchIsShown, setSearchIsShown] = useState(false);

  const [query, setquery] = useState("");

  const [resultSearch, setResultSearch] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  });

  async function handelsearchshow() {
    await delay(500);
    setSearchIsShown(!searchIsShown);
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  function handelsigninshow() {
    setsignInIsShown(!signInisShown);
  }

  function handellangshow() {
    setlangisShown(!langisShown);
  }

  const search = () => {
    if (query === "") {
      console.log("nothing to show");
    } else {
      axios

        .get(`https://dummyjson.com/products/search?q=${query}`)

        .then((res) => {
          setResultSearch(res.data.products);

        })

        .catch((err) => console.log(err));
    }
  };

  const handlesearch = (e) => {
    if (e.target.value === "") {
      setquery(e.target.value);

      setResultSearch([]);

      search();
    } else {
      setquery(e.target.value);

      search();
    }
  };

  useEffect(() => {

  }, [resultSearch]);

  const navigateToProdcut = (cat) => {
    var arr = [
      "womens-jewellery",
      "laptops",
      "lighting",
      "smartphones",
      "mens-shirts",
      "mens-shoes",
      "sunglasses",
      "womens-dresses",
    ];

    setSearchIsShown(false);

    if (arr.includes(cat)) {
      navigate(`/${cat}`);

      handelsearchshow();
    } else {
      console.log("not found");
    }
  };
  const changelangtoEN = () => {
    resttoEN()
    setlang('en')
    i18n.changeLanguage('en')
  }
  const changelangtoAR = () => {
    movelangAR()
    setlang('ar')
    i18n.changeLanguage('ar')
  }

  const [sta, setsta] = useState({
    xlang: 67,
    ylang: 3.8,
    xlangarrow: 72.7,
    ylangarrow: 2.9,
    xsign: 58,
    ysign: 3.8,
    xsignarrow: 82.3,
    ysignarrow: 0.9,
    xsearch: 22.6,
    ysearch: 7,
    cartdirection: "row",
    langdir: 'rtl'

  });


  const movelangAR = () => {
    setsta(
      {
        xlang: 20,
        xsign: 10,
        xlangarrow: 28.4,
        xsignarrow: 23.2,
        xsearch: 31.15,
        cartdirection: "row-reverse",
        langdir: 'ltr'

      });
  };
  const resttoEN = () => {
    setsta(
      {
        xlang: 67,
        xsign: 52,
        xlangarrow: 72.7,
        xsignarrow: 82.3,
        xsearch: 22.6,
        cartdirection: "row"

      });
  };

  return (
    <>
      <div
        className="container-fliud"
      >
        <nav className="navheader">
          <div id="left-nav">
            <ul>
              <li>
                <Link to="/" className="p-0">
                  <div >
                    <img src={logo} alt="logo"
                      className="amazonlogo col-12 p-0"
                    />
                  </div>
                </Link>
              </li>
              <li style={{ width: "40%" }} className="locationdiv"
              >
                <Link to="/">
                  <div className=" d-flex  flex-nowrap w-100" >
                    <div
                      className="col-4 p-0 d-flex align-items-end"
                    >
                      <img
                        src={location}
                        width="100%"
                        height="65%"
                        alt="logo"
                        style={{ paddingBottom: "7%" }}
                      />
                    </div>

                    <div className="col-8 px-0">
                      <div className="headertextloc m-0 p-0">{t('Deliver')} </div>

                      <div className="headertextloc2 m-0 p-0  ">{t('Egypt')}</div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>

          </div>

          <div id="mobilediv">
            <a className="mobile-signinIcon" href="/">
              <span>{t('sign')}</span>
            </a>

            <i className="usericon  fa-solid fa-user"></i>

            <a href="/">
              <img src={cartImg2} alt="" />
            </a>
          </div>

          <div className="navsearch">
            <button className="book">{t('All')} </button>

            <input
              dir={!sta.langdir}
              id="searchInput"
              type="search"
              style={{ paddingLeft: "2%", paddingRight: "2%" }}
              onChange={handlesearch}
              value={query}
              name="search"
              autoComplete="off"
              placeholder={t('Search')}
              data-search
              onFocus={handelsearchshow}

            // onBlur={handelsearchshow}
            />

            <button className="search" type="submit" onClick={search}>
              <img src={searchImg} width="50%" alt="" />
            </button>
          </div>

          <div id="logo3">
            <button
              type="button"
              className="btn btn-secondary w-100 h-100"
              style={{ backgroundColor: "gray", width: "98%", height: "100%" }}
            >
              <div className="d-flex h-100 w-100" >
                <div className="col-2" >
                  {" "}
                  <img
                    src={location2}
                    width="30%"
                    alt="logo"
                    style={{ verticalAlign: "inherit" }}
                  />
                </div>

                <div> {t('Deliver')} {t('Egypt')} </div>
              </div>
            </button>
          </div>

          <div id="right-nav">
            <ul>
              <li className="position-relative me-1">
                <Link to="/cart" className="d-flex" style={{ flexDirection: `${sta.cartdirection}` }}>
                  <img src={cartImg} alt="" className="navCartImage" />

                  <span style={{ fontSize: "1.1vw" }}>
                    {t('cart')}
                  </span>

                  <div className="cartItemNum">{allProduct.length}</div>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <div>{t('Returns')} {t('Orders')}</div>
                </Link>
              </li>
              <li
                style={{ width: "30%" }}
                onMouseEnter={() => {
                  setsignInIsShown(true);
                }}
                onMouseLeave={handelsigninshow}
              >
                <Link to="./sign" id="signinarrow">
                  <div>{user?.email ? `Hello ${localStorage.getItem("name")}` : <>{t('Sign')}</>
                  }
                  </div>

                  <span id="signarrow">{t('Account')}</span>
                </Link>
              </li>
              <li
                style={{ width: "17%", marginLeft: 0 }}
                onMouseEnter={() => {
                  setlangisShown(true);
                }}
                onMouseLeave={handellangshow}
              >
                <Link to='/' className="langarrow" style={{ justifyContent: 'space-evenly', paddingTop: '13%', paddingRight: "17%", alignItems: 'center', flexDirection: `${sta.cartdirection}`, alignContent: "stretch" }} >
                  <img src={egypt} alt="" />

                  <div>
                    <span id="spanarrow" className="p-0">
                      {t('EN')}
                    </span>
                  </div>
                </Link>
              </li>






            </ul>
          </div>
        </nav>
      </div>

      <div >
        {" "}
        <div
          className="overlay"
          style={{ display: langisShown ? "block" : "none" }}
        />
        <span
          id="spanlang"
          style={{
            display: langisShown ? "block" : "none",
            position: "absolute", left: `${sta.xlangarrow}vw`,
            top: `${sta.ylangarrow}vw`
          }}
          onMouseEnter={() => setlangisShown(true)}
          onMouseLeave={handellangshow}
        ></span>
        <div
          style={{
            display: langisShown ? "block" : "none",
            position: "absolute", left: `${sta.xlang}vw`,
            top: `${sta.ylang}vw`
          }}
          id="divlangitem"
          onMouseEnter={() => setlangisShown(true)}
          onMouseLeave={handellangshow}
        >
          <div className="langselect">
            {t('change')}{" "}
            <a href="/" style={{ fontSize: "0.8vw" }}>
              {t('learn')}
            </a>{" "}
          </div>

          <div className="langselect">
            <input
              className="form-check-input mx-1"
              type="radio"
              id="flexRadioDefault1"
              name="lang"

              value="en"
              onChange={() => { changelangtoEN() }}


              defaultChecked
            />

            <label>English - EN</label>
          </div>

          <hr />

          <div className="langselect">
            <input
              className="form-check-input mx-1"
              type="radio"
              id="flexRadioDefault1"
              name="lang"
              value="ar"
              onChange={() => { changelangtoAR() }}
            />
            <label>العربية - AR</label>
          </div>

          <hr />

          <div>
            {t('Changecurrency')} <a href="/" >{t('Learn')}</a>
          </div>

          {/* <div>$ - USD - US Dollar</div> */}
        </div>
      </div>

      <div>
        <div
          className="overlay"
          style={{ display: signInisShown ? "block" : "none" }}
        />
        <span
          id="div-sign-arrow"
          style={{
            display: signInisShown ? "block" : "none",
            position: "absolute", left: `${sta.xsignarrow}vw`,
            top: `${sta.ysignarrow}vw`
          }}
          onMouseEnter={() => setsignInIsShown(true)}
          onMouseLeave={handelsigninshow}
        ></span>{" "}
        <div
          style={{
            display: signInisShown ? "block" : "none",
            transitionProperty: 'height',
            transition: '1s',       // style={{ display: "block" ,

            position: "absolute", left: `${sta.xsign}vw`,
            top: `${sta.ysign}vw`
          }}
          id="div-sign-tem"
          onMouseEnter={() => setsignInIsShown(true)}
          onMouseLeave={handelsigninshow}
        >
          <div className="row d-flex justify-content-center flex-row flex-wrap m-0">
            <div className="col-10 d-flex justify-content-center ">
              <button type="button" className="btn btn-warning w-50 mt-3 ">
                <Link to="./sign">{t('Sign')}</Link>{" "}
              </button>
            </div>

            <div className="registerlink col-10 justify-content-center border-bottom py-2 d-flex">
              {" "}
              {t('Newcustomer?')}
              <a
                href="./Registration/Registertion.html"
                className="px-2 text-decoration-none"
              >
                {" "}
                {t('Starthere.')}
              </a>{" "}
            </div>
          </div>

          <div className="row pt-2 pe-4 ps-4" style={{ display: "flex" }}>
            <div
              className="col-6 "
              id="listofsign"
              style={{ width: "50%" }}
            >
              <h5>{t('yourlists')}</h5>

              <div>
                <a href="/">{t('CreateaList')} </a>
              </div>

              <div>
                <a href="/">{t('FindaList')}</a>
              </div>
            </div>

            <div className="col-6 " id="listofsign" style={{ width: "50%" }}>
              <h5>{t('youraccount')}</h5>

              <div>
                {" "}
                <a href="/">{t('AccountOrders')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Recommendations')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Browsing')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Watchlist')}</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('VideoPurchases')}  </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Kindle')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('ContentDevices')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Subscribe')} </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('Memberships')}  </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">{t('MusicLibrary')}  </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="overlay"
          style={{ display: searchIsShown ? "block" : "none" }}
          onClick={() => setSearchIsShown(false)}
        />

        <div
          dir={!sta.langdir}
          style={{
            display: searchIsShown ? "block" : "none",
            position: "absolute", left: `${sta.xsearch}%`,
            top: `${sta.ysearch}%`
          }}
          //  onClick={() => setSearchIsShown(true)}

          id="searchResults"
        >
          {" "}
          {resultSearch.map((res) => {
            return (
              <div
                className="list"
                // onClick={() => {

                //   console.log(res.category);}}

                onClick={() => {
                  navigateToProdcut(res.category);
                }}
                key={res.id}
              >
                <div className="imgsearch">
                  <img
                    className="m-1"
                    src={res.images[0]}
                    alt=""
                    width={"70%"}
                    height={"70%"}
                  />
                </div>

                <div className="listsearchtext ">
                  <h6 className="m-0 p-0">{res.title}</h6>

                  <p className="m-0 p-0">{res.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}