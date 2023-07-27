import React from "react";

import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";

import "./product.css";

import Rate from "../rate/rate";

const Product = (props) => {

  let navigate = useNavigate();

  return (

    <div className="row  justify-lg-content-between product ">

      {props.products.map((prd) => {

        let price = prd.price.toString().split("");

        if (prd.price >= 100000) {

          price.splice(3, 0, ",");

        } else if (prd.price >= 10000) {

          price.splice(2, 0, ",");

        } else if (prd.price >= 1000) {

          price.splice(1, 0, ",");

        } else {

          price = prd.price;

        }




        return (

          <div

            key={prd.id}

            className="col-12 col-sm-6 col-md-4 col-xl-3 mb-2 "

            onClick={() => {

              navigate(`/details/${prd.id}`, { state: props.collection });

            }}

          >

            <div className="wrap-card h-100">

              <Card className="m-auto h-100">

                <Card.Img

                  variant="top"

                  src={prd.thumbnail}

                  height="300px"

                  alt="not found"

                  className="w-100"

                />

                <Card.Body>

                  <Card.Text className="mb-0 description">

                    {prd.description}

                  </Card.Text>

                  <div className="rate">

                    <div className="iconstar d-flex align-items-center">

                      {/* <i className="fa-solid fa-star "></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i> */}

                      <Rate rate={prd.rating} />

                      <i className="fa-solid fa-chevron-down "></i>

                      <span className="rate-number">{prd.rating}</span>

                    </div>

                  </div>

                  <div className="d-flex">

                    <span>EGP</span>

                    <h3 className=" fw-bold">{price}</h3>

                    <span>00</span>

                  </div>

                  <Card.Text>

                    Get it as soon as{" "}

                    <span className="text-tomorrow">tomorrow</span> Fulfilled by

                    Amazon - FREE Shipping

                  </Card.Text>

                </Card.Body>

              </Card>

            </div>

          </div>

        );

      })}

    </div>

  );

};




export default Product;