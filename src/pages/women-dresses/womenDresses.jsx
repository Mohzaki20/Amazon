import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./womenDresses.css";
import Product from "../../components/product/product";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import FilterByPrice from "../../components/filter/filterByPrice/FilterByPrice";
import FilterByBrand from "../../components/filter/filterByBrand/FilterByBrand";
import Accordion from "react-bootstrap/Accordion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FilterByRating from "../../components/filter/filterByRating/FilterByRating";
import FilterByColor from "../../components/filter/filterByColor/FilterByColor";
import UseGetByFireBase from "../../customHook/useGetByFireBase";
const WomenDresses = () => {
  const [filterByBrand, setFilterByBrand] = useState([]);
  const [filterByColor, setFilterByColor] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const loading = useSelector((state) => state.loading.loading);

  let collection = "Women's clothing";
  let { productsOrginal, products, maxRange, minRange } = UseGetByFireBase(
    collection,
    filterByBrand,
    filterByColor,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    rating
  );
  // console.log(filterByColor);
  return (
    <Container fluid>
      <div className="row my-5 laptop">
        <div className="col-12 col-md-2 content-filter ">
          <div className="d-none d-md-block ">
            <div className="mt-4">
              <p className="fw-bold mb-1">Brand</p>
              <FilterByBrand
                products={productsOrginal}
                setFilterByBrand={setFilterByBrand}
                filterByBrand={filterByBrand}
              />
            </div>
            <div className="mt-4">
              <p className="fw-bold ">Price</p>
              <FilterByPrice
                maxRange={maxRange}
                minRange={minRange}
                maxPrice={maxPrice}
                minPrice={minPrice}
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
              />
            </div>
            <div className="mt-4">
              <p className="fw-bold mb-0">Avg. Customer Review</p>
              <FilterByRating setRating={setRating} />
            </div>
            <div className="mt-4">
              <p className="fw-bold mb-0">Color</p>
              <FilterByColor
                products={productsOrginal}
                setFilterByColor={setFilterByColor}
                filterByColor={filterByColor}
              />
            </div>
          </div>

          <div className="mb-3 d-md-none">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-between align-items-center "
                    style={{
                      width: "95%",
                    }}
                  >
                    <span className="accordion-over">
                      Over 10,000 results in Household Appliances
                    </span>
                    <span className="accordion-filter">
                      Filter <MdKeyboardDoubleArrowRight />
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion>
                    <Accordion.Item className="sub-filter" eventKey="0">
                      <Accordion.Header>Brand</Accordion.Header>
                      <Accordion.Body>
                        {" "}
                        <FilterByBrand
                          products={productsOrginal}
                          setFilterByBrand={setFilterByBrand}
                          filterByBrand={filterByBrand}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="sub-filter" eventKey="3">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        {" "}
                        <FilterByPrice
                          maxRange={maxRange}
                          minRange={minRange}
                          maxPrice={maxPrice}
                          minPrice={minPrice}
                          setMaxPrice={setMaxPrice}
                          setMinPrice={setMinPrice}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion>
                    <Accordion.Item className="sub-filter" eventKey="1">
                      <Accordion.Header>Customer Review</Accordion.Header>
                      <Accordion.Body>
                        {" "}
                        <FilterByRating setRating={setRating} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="sub-filter" eventKey="4">
                      <Accordion.Header>Color</Accordion.Header>
                      <Accordion.Body>
                        <FilterByColor
                          products={productsOrginal}
                          setFilterByColor={setFilterByColor}
                          filterByColor={filterByColor}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="col-12 col-md-10">
          {loading ? (
            <Loading />
          ) : (
            <Product products={products} collection={collection} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default WomenDresses;
