import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import ResMenuPage from "./components/ResMenuPage"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// Lazy Loading :
const About = lazy(() => import("./components/About"));

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1 style={{ marginTop: "110px" }}>Loading.....</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <ResMenuPage />
            }
        ],
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);