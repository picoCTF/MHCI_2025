import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css'

import Classroom from "./pages/Classroom";
import Compete from "./pages/Compete";
import Home from "./pages/Home";
import Gym from "./pages/Practice/Gym";
import LearningPaths from "./pages/Practice/LearningPaths";
import Preferences from "./pages/Preferences";
import Profile from "./pages/Profile";
import Videos from "./pages/Resources/Videos";
import Primer from "./pages/Resources/Primer";
import Community from "./pages/Resources/Community";
import ExternalResources from "./pages/Resources/ExternalResources";
import LearningGuides from "./pages/Resources/LearningGuides";

function App() {

  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "classroom",
          element: <Classroom/>
        },
        {
          path: "compete",
          element: <Compete/>
        },
        {
          path: "practice",
          element: <Outlet/>,
          children: [
            {
              path: "gym",
              element: <Gym/>
            },
            {
              path: "learning-paths",
              element: <LearningPaths/>
            }
          ]
        },
        {
          path: "preferences",
          element: <Preferences/>
        },
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "resources",
          element: <Outlet/>,
          children: [
            {
              path: "community",
              element: <Community/>
            },
            {
              path: "external-resources",
              element: <ExternalResources/>
            },
            {
              path: "learning-guides",
              element: <LearningGuides/>
            },
            {
              path: "primer",
              element: <Primer/>
            },
            {
              path: "videos",
              element: <Videos/>
            }
          ]
        }
      ]
    },
  ])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
