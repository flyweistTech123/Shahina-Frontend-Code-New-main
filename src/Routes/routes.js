/** @format */
import Quiz from "../components/AcneQuiz/Quiz";
import {
  AboutUs,
  AllProducts,
  CheckIngredients,
  Contact,
  Gallery,
  GiftCard,
  Home,
  LogIn,
  Membership,
  MyCart,
  PaymentPlan,
  ServiceTab,
  Shop,
} from "../pages/Allpages.js";
import ServicePage from "../components/Services/ServicePage.js";
import Appointment from "../components/Appointment.js";
import IndivisualAppointment from "../components/IndivisualAppointment.js";
import Schedule1 from "../components/Schedule/Schedule1.js";
import Schedule2 from "../components/Schedule/Schedule2.js";
import Thanks from "../components/Thanks.js";
import Privacy from "../components/Privacy.js";
import Terms from "../components/Terms.js";
import FAQ from "../components/FAQ.js";
import ForgetPassword from "../components/ForgetPassword.js";
import ChangePassword from "../components/ChangePassword.js";
import Signup from "../components/Signup.js";
import ProductDetails from "../components/ProductDetails.js";
import MyProfile from "../components/MyProfile.js";
import Failed from "../components/Failed.js";
import PasswordChanged from "../components/PasswordChanged.js";
import VerifySubScription from "../components/VerifySubScription.js";
import AllNews from "../components/AllNews";
import ReturningMember from "../components/ReturningMember";
import ProductOrder from "../components/Orders/ProductOrder";
import ServiceOrder from "../components/Orders/ServiceOrder";
import PastServiceOrder from "../components/Orders/PastServiceOrder";
import OneNews from "../components/News/OneNews";
import ShippingPrivacy from "../components/ShippingPrivacy";
import ReturnPrivacy from "../components/ReturnPrivacy";
import GuestThanks from "../components/GuestThanks";
import GuestFailed from "../components/GuestFailed";
import CardSave from "../components/CardSaver/CardSave";
import Confirmation from "../components/Confirmation";
import ServiceBooked from "../components/Confirmation/ServiceBooked";
import CardSaveSecond from "../components/CardSaver/CardSaveSecond";
import LimitedDeals from "../components/Services/LimitedDeals";
import Reschedule from "../components/Reschedule/Reschedule";
import ThanksApp from "../components/ThanksApp";
import FailedApp from "../components/FailedApp";
import BookingMsg from "../components/BookingMsg";
import AutheticatedRoutes from "../pages/ProtectedRoutes/AutheticatedRoutes";
import GiveRating from "../pages/GiveRating/GiveRating";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <LogIn /> },
  { path: "/allproducts/:type/:name", component: <AllProducts /> },
  { path: "/contact", component: <Contact /> },
  { path: "/aboutus", component: <AboutUs /> },
  { path: "/membership", component: <Membership /> },
  { path: "/shop", component: <Shop /> },
  { path: "/services/:name", component: <ServiceTab /> },
  { path: "/gallery", component: <Gallery /> },
  { path: "/paymentplan", component: <PaymentPlan /> },
  { path: "/giftcards", component: <GiftCard /> },
  { path: "/acnequiz", component: <Quiz /> },
  { path: "/checkIngredients", component: <CheckIngredients /> },
  { path: "/appointment", component: <Appointment /> },
  { path: "/indiAppointment", component: <IndivisualAppointment /> },
  {
    path: "/schedule1",
    component: (
      <AutheticatedRoutes>
        <Schedule1 />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/schedule2",
    component: (
      <AutheticatedRoutes>
        <Schedule2 />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/thanks/:id",
    component: (
      <AutheticatedRoutes>
        <Thanks />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/failed/:id",
    component: (
      <AutheticatedRoutes>
        <Failed />
      </AutheticatedRoutes>
    ),
  },
  { path: "/service/:name", component: <ServicePage /> },
  { path: "/privacy-policy", component: <Privacy /> },
  { path: "/shipping-policy", component: <ShippingPrivacy /> },
  { path: "/return-policy", component: <ReturnPrivacy /> },
  { path: "/terms", component: <Terms /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/forget-password", component: <ForgetPassword /> },
  { path: "/changePassword", component: <ChangePassword /> },
  { path: "/signup", component: <Signup /> },
  { path: "/product/:name", component: <ProductDetails /> },
  {
    path: "/mycart",
    component: (
      <AutheticatedRoutes>
        <MyCart />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/my-profile",
    component: (
      <AutheticatedRoutes>
        <MyProfile />
      </AutheticatedRoutes>
    ),
  },
  { path: "/password-changed", component: <PasswordChanged /> },
  {
    path: "/verifySubscription/:id",
    component: (
      <AutheticatedRoutes>
        <VerifySubScription />
      </AutheticatedRoutes>
    ),
  },
  { path: "/allNews", component: <AllNews /> },
  { path: "/news/:id", component: <OneNews /> },
  { path: "/returningMember", component: <ReturningMember /> },
  {
    path: "/product-orders",
    component: (
      <AutheticatedRoutes>
        <ProductOrder />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/upcoming-orders",
    component: (
      <AutheticatedRoutes>
        <ServiceOrder />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/past-orders",
    component: (
      <AutheticatedRoutes>
        <PastServiceOrder />
      </AutheticatedRoutes>
    ),
  },
  { path: "/guestthanks", component: <GuestThanks /> },
  { path: "/guestfailed", component: <GuestFailed /> },
  { path: "/guest-card-saver/:email/:orderId", component: <CardSave /> },
  { path: "/guest-card-saver1/:email", component: <CardSaveSecond /> },
  { path: "/confirmation", component: <Confirmation /> },
  {
    path: "/service-booked/:id",
    component: (
      <AutheticatedRoutes>
        <ServiceBooked />
      </AutheticatedRoutes>
    ),
  },
  { path: "/limited-deals", component: <LimitedDeals /> },
  {
    path: "/reschedule/:id",
    component: (
      <AutheticatedRoutes>
        <Reschedule />
      </AutheticatedRoutes>
    ),
  },
  { path: "/verifySubscriptionApp", component: <ThanksApp /> },
  { path: "/faildeSubApp", component: <FailedApp /> },
  {
    path: "/booking-msg/:id",
    component: (
      <AutheticatedRoutes>
        <BookingMsg />
      </AutheticatedRoutes>
    ),
  },
  {
    path: "/give-rating",
    component: (
      <AutheticatedRoutes>
        <GiveRating />
      </AutheticatedRoutes>
    ),
  },
];

export default routes;
