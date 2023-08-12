/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect, Component } from "react";
import "./content.css";
// import Carousel from "react-bootstrap/Carousel";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import img1 from "../../assets/b1.jpg";
import img2 from "../../assets/b2.jpg";
import img3 from "../../assets/b3.jpg";
import img4 from "../../assets/b4.jpg";
import img5 from "../../assets/b5.jpg";
import img6 from "../../assets/b6.jpg";
import img7 from "../../assets/b7.jpg";
import img8 from "../../assets/b8.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        $(".background").carousel("next");
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // initialSlide: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* BackGround */}
      <div className="container-fluid HomePage p-0">
        <div>
          <div
            // style={{ height: "100vh" }}
            id="carouselExample"
            className="carousel slide background"
            data-ride="carousel"
            onMouseOver={() => setIsHovered(false)}
            onMouseOut={() => setIsHovered(true)}
          >
            <div className="carousel-inner">
              {Images.map((image, i) => (
                // <div className="carousel-item active" interval={5000}>
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  key={i}
                >
                  <img
                    src={image}
                    // alt={i}
                    alt={`Slide ${i}`}
                    className="d-block w-100 imagebackground"
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="Categories row">
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
          <div className="Categories-cards">
              <h2 className="Categories-Title">{t('Electronics')}</h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Camera/XCM_Manual_1584325_5643573_379x304_1X._SY304_CB603062836_.jpg"
              />
              <Link className="Categories-Link" to="/laptops">
              {t('Seemore')}
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
            <h2 className="Categories-Title">{t('Jewllery')} </h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg"
              />
              <Link className="Categories-Link " to="/womens-jewellery">
              {t('Seemore')}
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
            <h2 className="Categories-Title">{t('Womenswear')} </h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
              />
              <Link className="Categories-Link " to="/womens-dresses">
              {t('Seemore')}
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
            <h2 className="Categories-Title">{t('Menswear')}  </h2>
              <img
                className="Categories-Image"
                src="https://m.media-amazon.com/images/I/41Ba4enXNgL._AC_SR400,600_.jpg"
              />
              <Link className="Categories-Link " to="/mens-shirts">
              {t('Seemore')}
              </Link>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t('Electronics')}</h2>
              <Link className="Categories-Link Category_Items_Link" to="/laptops">
              {t('Seemore')}
              </Link>
          </div>
          <Slider {...settings}>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/51QLFW1PUJL._AC_UF226,226_FMjpg_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto80%off')}</p>
              <p className="Item_Offer_Dis">{t('Saveoncameras')}</p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41QgEpwYLdL._AC_UF226,226_FMjpg_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto30%off')}</p>
                        <p className="Item_Offer_Dis">{t('Save on Ring Lights')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41BFtfSlFJL._AC_UF226,226_FMjpg_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('EGP200andunder')}</p>
              <p className="Item_Offer_Dis">{t('Save on USB Mic')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41LNkRBslPL._AC_SY200_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto80%off')}</p>
              <p className="Item_Offer_Dis">{t('Save on Flash disk')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/51fGSGZNPqL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto50%off')}</p>
              <p className="Item_Offer_Dis">{t('SaveonLegionLaptops')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1446398_4835988_379x304_1X._SY304_CB631345942_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto30%off')}</p>
              <p className="Item_Offer_Dis">{t('Saveoncameras')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto50%off')}</p>
                        <p className="Item_Offer_Dis">
                        {t('Save On Head Phones')} 
                        </p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41PjTl7DtzL._AC_SY200_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto50%off')}</p>
                        <p className="Item_Offer_Dis">
                        {t('Save On Hard Disk')} 
                        </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t('Jewllery')}</h2>
              <Link className="Categories-Link Category_Items_Link" to="/womens-jewellery">
              {t('Seemore')} 
              </Link>
          </div>
          <Slider {...settings}>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/31pRBFXVWFL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
              <p className="Item_Offer">{t('Upto50%off')}</p>
             <p className="Item_Offer_Dis"> {t('Save On Earrings')} </p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/31hOErxVIYL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On silver Earrings')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/41v6clopErL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                 <p className="Item_Offer">{t("EGP200andunder")}</p>
                <p className="Item_Offer_Dis">{t("Save On Bracelets")}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/413nnm0kEuL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto80%off')}</p>
                <p className="Item_Offer_Dis">{t('Earrings new collection')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/31UlyGP-VHL._AC_SX184_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto50%off')}</p>
                <p className="Item_Offer_Dis"> {t('Save On special Bracelelts')} </p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/612Wb2mdfkL._AC_UL480_QL65_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Gold Earrings')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/51dj6rl4C3L._AC_UL480_QL65_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                 <p className="Item_Offer">{t("Upto20%off")}</p>
                 <p className="Item_Offer_Dis"> {t("Save On world Necklace")} </p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/51YVFSBGMKL._AC_UL480_QL65_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                 <p className="Item_Offer">{t("EGP200andunder")}</p>
                <p className="Item_Offer_Dis">{t("Save On Necklaces")}</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t('TopSummerSale')}</h2>
              <Link className="Categories-Link Category_Items_Link" to="/womens-dresses">
              {t('Seemore')}
              </Link>
          </div>
          <Slider {...settings2}>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199173_200x200_1X._CB604510554_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199182_200x200_1X._CB604510533_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199185_200x200_1X._CB604510516_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199177_200x200_1X._CB604510471_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199181_200x200_1X._CB604510516_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199172_200x200_1X._CB604510486_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199174_200x200_1X._CB604510486_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199176_200x200_1X._CB604510486_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199170_200x200_1X._CB604510486_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
          </Slider>
        </div>

        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t('Menswear')}</h2>
              <Link className="Categories-Link Category_Items_Link" to="/mens-shirts">
              {t('Seemore')}
              </Link>
          </div>
          <Slider {...settings}>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41KV6ivR+5L._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto80%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Polo shirts')}</p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41pSWFERRXL._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On shirts')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/31tAcZFAICL._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                 <p className="Item_Offer">{t("EGP200andunder")}</p>
                <p className="Item_Offer_Dis">{t("Save On sweetpants")}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/31ASt2aJ8pS._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto80%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On shorts')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/31OC2Lurm8L._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto50%off')}</p>
                <p className="Item_Offer_Dis"> {t('Save On adidas shorts')} </p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/41Ba4enXNgL._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Nike shirts')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://m.media-amazon.com/images/I/317-2itXVzL._AC_SR400,600_.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto50%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On sports jackets')}</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t('Womenswear')}</h2>
              <Link className="Categories-Link Category_Items_Link" to="/womens-dresses">
              {t('Seemore')}

              </Link>
          </div>
          <Slider {...settings}>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto80%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Dresses')}</p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenShirt_3868466_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Shirts')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenEthnicWear_3868465_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                 <p className="Item_Offer">{t("EGP200andunder")}</p>
                 <p className="Item_Offer_Dis">{t('Save On Blouses')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenTops_3868463_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto80%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On V-neck shirts')}</p>
              </div>
            </div>
            <div className="card mb-3 card1 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensMainPage_WomenSports_3868587_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto50%off')}</p>
                <p className="Item_Offer_Dis"> {t('Save On Sports wear')} </p>
              </div>
            </div>
            <div className="card mb-3 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenPants_3868469_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto30%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On Pants')}</p>
              </div>
            </div>
            <div className="card mb-3 card2 Category_Items_Card">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenLongwear_3868453_440x440_en_AE.jpg"
                className="card-img-top mx-auto d-block Category_Items_Image"
              />
              <div className="card-body">
                <p className="Item_Offer">{t('Upto50%off')}</p>
                <p className="Item_Offer_Dis">{t('Save On summer Sets')}</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
          <div className="d-flex">
          <h2 className="Category_Items_Title">{t("Topsalethismonth")}</h2>
              <Link to="/laptops" className="Category_Items_Link">
              {t('Seemore')}
              </Link>
          </div>
          <Slider {...settings2}>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673986_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673933_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673930_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673913_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673872_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673925_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673958_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673912_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673880_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673885_200x200_1X._CB601944438_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673879_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673936_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673885_200x200_1X._CB601944438_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673886_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673866_200x200_1X._CB601945739_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673860_200x200_1X._CB601945812_.jpg"
                className="card-img-top mx-auto d-block Category_Offers_Image"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Content;