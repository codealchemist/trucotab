import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Home from "./routes/home"
import About from "./routes/about"
import JsExample from "./routes/js-example"
import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return { message: "Bienvenido! 🖖" }
        },
      },
      { path: "about", element: <About /> },
      { path: "js", element: <JsExample /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
