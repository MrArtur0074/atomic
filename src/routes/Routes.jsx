import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from "../components/pages/MainPage.jsx";

function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
    ]);

  return (
    <>
        <RouterProvider
            router={router}
        />
    </>
  )
}

export default Routes
