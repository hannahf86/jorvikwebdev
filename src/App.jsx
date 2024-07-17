// REACT-ROUTER-DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Landing from "./Pages/Landing";
import Services from "./Pages/Services";

// COMPONENTS
import RootNav from "./Components/RootNav";

// HELPERS & LOADERS
import Error from "./Helpers/Error";
// import { mainLoader } from "./Helpers/mainLoader";
// import { landingAction } from "./Helpers/landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="services" element={<Services />} />
      {/* <Route path="day" element={<Day />} /> */}
      {/* <Route path="smallBusiness" element={<SmallBusiness />} />
      <Route path="ecommerce" element={<Ecommerce />} />
      <Route path="support" element={<Support />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="FAQs" element={<Faqs />} />
      <Route path="contact" element={<Contact />}>
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="termsOfUse" element={<TermsOfUse />} /> */}
      {/* </Route> */}
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
