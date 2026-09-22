import App from "./App";
import Rockers from "./components/Rockers";
import RockerDetails from "./components/RockerDetails";
import Error from "./components/Error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error status={404} />,
  },
  {
    path: "/rockers",
    element: <Rockers />,
  },
  {
    path: "/rockers/:rockerID",
    element: <RockerDetails />,
  },
  {
    path: "*",
    element: <Error status={404} />,
  },
];

export default routes;
