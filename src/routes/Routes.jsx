import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=>fetch('booksData.json'),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
