import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import './index.css'
import App from './App.jsx'
// import ProductDetails from './componant/productDetails/ProductDetails.jsx';
// import { Route } from 'react-router-dom';
// <Route path="/product/:slug" element={<ProductDetails />} />;





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
