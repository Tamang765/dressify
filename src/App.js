import { Carousel } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Slider } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Navigation from "./pages/Navigation/Navigation";
import Footer from "./pages/Footer/Footer";
import Product_detail from "./pages/Product-details/SingleProduct";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import { useEffect, useState } from "react";
import Newarrivals from "./pages/NewArrivals/Newarrivals";
import Login from "./pages/login/Login";
import Category from "./pages/Categories/Man/Category";
import WomenCategory from "./pages/Categories/WomenCategory";
import TrendMan from "./pages/Trending/ManTrend/TrendMan";
import Searchpage from "./pages/Searchpage/Searchpage";
import TodoList from "./pages/NewArrivals/TodoList";
import { ProSidebarProvider, Sidebar } from "react-pro-sidebar";
import SimpleLayout from "./layouts/SimpleLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import SidebarPage from "./pages/Admin/Sidebar/Sidebar";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Dumb from "./pages/Categories/Man/Dumb";
import Product from "./pages/Admin/Products/Product";
import CategoryProduct from "./pages/Admin/CategoryProducts/CategoryProduct";
import Extra from "./pages/Admin/Sidebar/Extra";
import SingleProduct from "./pages/Product-details/SingleProduct";
import NotFound from "./pages/Component/commons/NotFound";
import SingleNewArrival from "./pages/Product-details/singleNewarrival";
import WishList from "./pages/Component/WishList";
import SingleKids from "./pages/Product-details/singleKids";
import Kids from "./pages/StartExploring/Kids";
import Kidscategory from "./pages/Trending/ManTrend/Kidscategory";
import Sport from "./pages/Sport/Sport";

function App() {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(true);
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart ? storedCart : [];
  });

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product, index) => {
      if (item.id === product.id) {
        isPresent = true;
        // Modify the existing product in the cart state
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          updatedCart[index] = item;
          return updatedCart;
        });
      }
    });

    // If the product is not present in the cart, add it
    if (!isPresent) {
      setCart([...cart, item]);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <BrowserRouter>
        <>
          <SimpleLayout size={cart.length} setShow={setShow}>
            <Routes>
              <Route path="/*" element={<NotFound />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/" element={<Home handleClick={handleClick} />} />
              <Route
                path="/newarrival"
                element={<Newarrivals />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/product-detail"
                element={<Product_detail />}
              />
              <Route path="/account" element={<Account />} />
              <Route
                path="/cart"
                element={
                  <Cart cart={cart} setCart={setCart} setShow={setShow} />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/mancategory"
                element={<TrendMan />}
              />
              <Route
                path="/sportscategory"
                element={<Sport  />}
              />
              <Route path="/kidscategory" element={ <Kidscategory/>} />
              <Route
                path="/womencategory"
                element={
                  <WomenCategory title="Women"/>
                }
              />
              <Route path="/filtersearch/:product_head" element={<Searchpage />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/product_detail/:id" element={<SingleProduct />} />
            </Routes>
          </SimpleLayout>
          {/* <AdminLayout>
              <ProSidebarProvider>
                <SidebarPage collapsed={collapsed} setCollapsed={setCollapsed}>
                  <Routes>
                    <Route
                      exact="true"
                      path="/admin-panel"
                      element={<Dashboard />}
                    />
                    <Route exact="true" path="/product" element={<Product />} />
                    <Route
                      exact="true"
                      path="/categoryproduct"
                      element={<Extra />}
                    />
                  </Routes>
                </SidebarPage>
              </ProSidebarProvider>
            </AdminLayout> */}
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
