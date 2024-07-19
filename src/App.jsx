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
import About from "./Pages/About";

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
      <Route path="about" element={<About />} />
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
