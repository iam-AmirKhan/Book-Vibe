import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
    ],
  },
]);
