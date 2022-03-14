import TrendingFood from "./TrendingFood";
import { getTrendingFood } from "../services/ProductService";
import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { dummyDataGrocery } from "../dummyData/dummyDataGrocery";
import { dummyCategories } from "../dummyData/dummyCategories";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const groceryData = dummyDataGrocery();
  const categoriesData = dummyCategories();

  const fetchTrendingProducts = async () => {
    const trending = await getTrendingFood();
    setTrendingProducts(trending);
  };

  useEffect(() => {
    fetchTrendingProducts();
  }, []);

  return (
    <div id="main" className="main">
      <div className="hero">
        <div className="container text-center hero-text font-white s_box">
          <div className="row">
            <div className="Home-logo-icon">
              <img src="assets/images/home_icon_logo.png" />
            </div>
            <h5 className="header_white">
              Discover
              <span className="clr_green">food</span> or
              <span className="clr_orange">grocery</span>
              <br />
              near by you
            </h5>
            <div className="banner-form">
              <form className="form-inline">
                <div className="form-group">
                  <div className="home-bg-icon"></div>
                  <i className="ion-ios-search-strong icon-search"></i>
                  <input
                    type="text"
                    className="form-control form-control-lg input_box"
                    id="exampleInputAmount"
                    placeholder="Enter food or grocery"
                  />
                  <div className="can-toggle demo-rebrand-1">
                    <input id="d" type="checkbox" />
                    <label for="d">
                      <div
                        className="can-toggle__switch"
                        data-checked="Grocery"
                        data-unchecked="Food"
                      ></div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="product categories" className="categories">
        <div className="container">
          <div className="row">
            <div className="home-header-text">
              <h1 className="wow fadeInDown">Categories</h1>
            </div>

            <div id="owl_brand" className="categories_box">
              {categoriesData.length ? (
                <div id="owl_product">
                  <div className="item">
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      items={8}
                      margin={2}
                      nav
                    >
                      {categoriesData.map((catUrl, index) => {
                        return (
                          <div key={index} className="item">
                            <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                              <div className="food-item-wrap">
                                <a href="search_list_new.html">
                                  <div
                                    className="figure-wrap-brand bg-image"
                                    style={{
                                      background: `url(${catUrl.url}) center center/cover no-repeat`,
                                      "background-size": "contain",
                                    }}
                                  ></div>
                                  <div className="content">
                                    <a href="search_list_new.html">Beverages</a>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="home-header-text">
              <h1 className="wow fadeInDown title-top-space">
                Trending Grocery
              </h1>
            </div>
            <div id="owl_trending_items">
              {groceryData.length ? (
                <div id="owl_product">
                  <div className="item">
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      items={5}
                      margin={2}
                      nav
                    >
                      {groceryData.map((groceryUrl, index) => {
                        console.log("gro", groceryUrl);
                        return (
                          <div key={index} className="item">
                            <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                              <div className="food-item-wrap">
                                <div
                                  className="figure-wrap bg-image"
                                  style={{
                                    background: `url(${groceryUrl.url}) center center/cover no-repeat`,
                                    "background-size": "200px",
                                  }}
                                >
                                  <div className="treding">
                                    <a href="#" className="treding-icon">
                                      <i className="ion-android-share-alt group_icon"></i>
                                      12K
                                    </a>
                                    <a href="#" className="treding-icon">
                                      <i className="ion-eye group_icon"></i>12K
                                    </a>
                                    <a href="#" className="treding-icon">
                                      <i className="ion-bag group_icon"></i>12K
                                    </a>
                                  </div>
                                  <div className="review pull-right">
                                    <a href="#" className="treding-icon">
                                      <i className="ion-ios-star-outline group_icon"></i>
                                      12K
                                    </a>
                                    <a href="#" className="treding-icon">
                                      <i className="ion-ios-chatbubble-outline group_icon"></i>
                                      12K
                                    </a>
                                  </div>
                                </div>
                                <div className="content">
                                  <h5>
                                    <a href="product_page.html">
                                      Aashirvaad Shudh Chakki Whole Wheat Atta
                                    </a>
                                  </h5>
                                  <div className="product-name">12 KG </div>
                                  <div className="price-btn-block">
                                    <span className="price_cut">Rs 15,99</span>
                                    <span className="price">Rs 15,99</span>
                                    <a
                                      href="#"
                                      className="theme-btn-dash pull-right"
                                    >
                                      <i className="ion-ios-cart-outline"></i>{" "}
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="home-header-text">
              <h1 className="wow fadeInDown title-top-space">Trending Foods</h1>
            </div>
            {trendingProducts.length ? (
              <div id="owl_product">
                <div className="item">
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    items={5}
                    margin={2}
                    nav
                  >
                    {trendingProducts.map((foodUrl, index) => {
                      return (
                        <div
                          key={index}
                          className="col-xs-12 col-md-12 col-sm-12 food-item"
                        >
                          <TrendingFood url={foodUrl} />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
