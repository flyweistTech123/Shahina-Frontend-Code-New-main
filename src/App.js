/** @format */

import {
  Outlet,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Footer, Navbar, TopHeader } from "./pages/Allpages";
import "./CSS/style.css";
import { ReactNotifications } from "react-notifications-component";
import "./CSS/mobile.css";
import { getSession } from "./Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "./store/authSlice";
import Loader from "./components/Loader/Loader";
import { ScrollToTop } from "./utils/utilsFunc";
import routes from "./Routes/routes";

const LazyComponent = (Component) => {
  return <Suspense fallback={<Loader />}>{Component}</Suspense>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((link) => ({
      path: link.path,
      element: LazyComponent(link.component),
    })),
  },
]);

function App() {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getSession());
    }
  }, [isLoggedIn]);

  return (
    <main>
      <ScrollToTop />
      <ReactNotifications />
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default function MainApp() {
  return (
    <RouterProvider router={appRouter}>
      <Router />
    </RouterProvider>
  );
}
