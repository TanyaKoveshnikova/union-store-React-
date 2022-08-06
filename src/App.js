import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import Spinner from "./components/spinner/spinner.component";
import { setCurrentUser } from "./store/user/user.reducer";

const Home = lazy(() => import("./routes/home/home.components"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.components"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const CheckoutCart = lazy(() =>
  import("./routes/checkout-cart/checkout-cart.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubcribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutCart />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
