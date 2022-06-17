import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./components/checkout/Checkout";

import { setCurrentUser } from "./store/user/userAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
