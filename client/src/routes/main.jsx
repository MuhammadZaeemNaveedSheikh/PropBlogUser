import App from "../App";
import Home from "../pages/home/main";

const routes = [
  { path: "", element: <App />, children: [{ path: "/", element: <Home /> }] },
  { path: "/*", element: <App /> },
];

export default routes;
