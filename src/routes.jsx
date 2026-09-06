import App from "./App";
import Rockers from "./components/Rockers";
import Error from "./components/Error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error status={404} />,
  },
  {
    path: "rockers",
    element: <Rockers />,
  },
];

export default routes;
