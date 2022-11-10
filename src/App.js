import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RequiedAuth } from "./component/utililies/RequiedAuth";
import Navbar from "./component/navbarfiles/Navbar";
import { AppProvider } from "./component/utililies/auth";
// import LoginDemo from "./component/loginfiles/LoginDemo";
const NoMatch = lazy(() => import("./component/utililies/NoMatch"));
const NewProducts = lazy(() => import("./component/productfiles/NewProducts"));
const PopularProducts = lazy(() =>
  import("./component/productfiles/PopularProducts")
);
const ProductDisplay = lazy(() =>
  import("./component/productfiles/ProductDisplay")
);
const Product = lazy(() => import("./component/productfiles/Product"));
const Home = lazy(() => import("./component/routes/Home"));
const LoginDemo = lazy(() => import("./component/loginfiles/LoginDemo"));

function App() {
  return (
    <>
    <AppProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<h1 className="loading">Loading</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/logindemo"
              element={
                  <LoginDemo />
              }
            />
            <Route path="*" element={<NoMatch />} />
            <Route path="/products" element={<RequiedAuth><Product /></RequiedAuth>}>
              <Route path="newproduct" element={<NewProducts />} />
              <Route path="newproduct/:id" element={<ProductDisplay />} />
              <Route path="popular" element={<PopularProducts />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      </AppProvider>
    </>
  );
}

export default App;
