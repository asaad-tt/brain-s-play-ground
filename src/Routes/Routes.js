import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import QuizDetails from "../Components/QuizDetails/QuizDetails";
import Statistics from "../Components/Statistics/Statistics";
import Topic from "../Components/Topic/Topic";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/topic", element: <Topic></Topic> },
      { path: "/about", element: <About></About> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/home/:homeId",
        element: <QuizDetails></QuizDetails>,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.homeId}`
          );
        },
      },
    ],
  },
]);

export default router;
