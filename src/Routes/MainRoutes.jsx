
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePageLayout from "../Pages/Home/HomePageLayout/HomePageLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: '/',
          element: <HomePageLayout/>
        }
      ]
    },
  ]);

export default router;