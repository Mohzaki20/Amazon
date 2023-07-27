import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import "./cart.css";
import { changeCart } from "../../storeByRedux/action/changeCart";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";

const Cart = () => {
   const {t,i18n} =useTranslation()
  let [product, setProduct] = useState([]);
  let allProduct = useSelector((state) => state.cart.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItem, setTotalItem] = useState(0);
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    let filter = product.filter((prd) => prd.id !== id);
    console.log(filter);
    dispatch(changeCart([...filter]));
  };
  let changeQuantity = (e, id) => {
    console.log(parseInt(e.target.value));
    let newListCart = product.map((ele) => {
      if (ele.id === id) {
        ele.stock = ele.stock + ele.order;
        ele.order = parseInt(e.target.value);
        ele.stock = ele.stock - ele.order;
        return ele;
      }
      return ele;
    });
    dispatch(changeCart(newListCart));
    console.log(newListCart);
  };
  useEffect(() => {
    setProduct(allProduct);
    if (product.length > 0) {
      let item = product
        .map((x) => x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalItem(item);
      let price = product
        .map((x) => x.price * x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalPrice(price);
    }
  }, [handleDelete]);
  return (
    <div className="container-fluid">
      <div className="row shop-cart p-3 ">
        <div className="col-12 col-lg-9  ">
          {product.length >= 1 ? (
            <div className="px-3 py-4 Shopping-Cart mb-3">
              <div className="d-flex justify-content-between text">
                <h3>{t('ShoppingCart')}</h3>
                <span className=" d-none d-md-block">{t('price')}</span>
              </div>
              {product.map((prd) => {
                return (
                  <div className="row py-2 contant" key={prd.id}>
                    <div className="col-12 col-sm-3 col-md-2 ">
                      <img src={prd.thumbnail} alt="" className="h-100 w-100" />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8">
                      <h5 className="m-0   overflow-hidden">
                        {prd.description}
                      </h5>
                      <span className="stock">{t('Instock')}</span>
                      <p className="delivert m-0">{t('EligibleforFREEdelivery')}</p>
                      <div className="d-flex flex-wrap  select-menu">
                        <div className="d-flex  align-items-center ">
                          <span>{t('Qty:')}</span>
                          <Form.Select
                            onChange={(e) => {
                              changeQuantity(e, prd.id);
                            }}
                            value={prd.order}
                            className="py-1 mx-1 "
                            // style={{ width: "70px" }}
                            aria-label="Default select example"
                          >
                            <Dropdown num={prd.stock + prd.order} />

                          </Form.Select>
                        </div>
                        <button
                          className="btn"
                          onClick={() => handleDelete(prd.id)}
                        >
                         {t('Delete')} 
                        </button>
                        <button className="btn">{t('saveforlater')}</button>
                        <button className="btn">{t('share')}</button>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <h5 className="text-end fw-bold">{t('EGP')} {prd.price}.00</h5>
                    </div>
                  </div>
                );
              })}
              <h5 className="text-start text-md-end">
              {t('Subtotal')}  ({totalItem} {t('items')}):
                <span className="fw-bold">{t('EGP')} {totalPrice}.00</span>{" "}
              </h5>
            </div>
          ) : (
            <div className="empty p-3 mb-3">
              <h3 className="text-center text-md-start pb-3">
              {t('YourAmazonCartisempty.')} 
              </h3>
              <p className="text-danger text-center py-3">{t('ShopingNow')}</p>
              <h5 className="text-center text-md-end">
              {t('Subtotal')}  (0 {t('items')}):
                <span className="fw-bold">{t('EGP')} 0.00</span>{" "}
              </h5>
            </div>
          )}{" "}
          <div className="box mb-2"></div>
          <div className="text my-3">
            <p>
            {t('Thepriceandavailability')}  
            </p>
            <p>
            {t('Doyouhaveagift')}  
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-3  ">
          {product.length > 0 && (
            <div className="features p-3 mb-3">
              <div className="main-color">
                <IoCheckmarkCircleSharp />
                <span>
                {t('Yourorderqualifies')}  
                </span>
              </div>
              <h5 className="">
              {t('Subtotal')} ({totalItem}{t('items')} ):
                <span className="">{t('EGP')}  {totalPrice}.00</span>{" "}
              </h5>
              <button className="tobuy w-100">{t('ProceedtoBuy')}</button>
            </div>
          )}
          <div className="best-sales  p-3 d-none d-lg-block">
            <h5>
            {t('Frequentlybought')}  
            </h5>
            <div className="row contant">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/81HjL17oavL._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                {t('SamsungGalaxy')} 
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">{t('EGP3,699.00')}</p>
                <button className="btn-add-cart btn">{t('AddtoCart')}</button>
              </div>
            </div>
            <div className="row contant mt-2">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/61glUkL9N8L._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                {t('G2000GamingHeadset')} 
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">{t('EGP1,299.00')}</p>
                <button className="btn-add-cart btn">{t('AddtoCart')}</button>
              </div>
            </div>
            <div className="row contant mt-2">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/81ejU1gSrxL._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                {t('NokiaC10')} 
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">{t('EGP1,299.00')}</p>
                <button className="btn-add-cart btn">{t('AddtoCart')}</button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cart;
