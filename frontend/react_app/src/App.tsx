import './App.css'

import { Outlet, useNavigate, useHref, type NavigateOptions, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

// import { GeistSans } from "geist/font/sans";

import Classroom from "./pages/Classroom";
import Compete from "./pages/Compete";
import Home from "./pages/Home";
import Games from "./pages/Practice/Games";
import Gym from "./pages/Practice/Gym";
import LearningPaths from "./pages/Practice/LearningPaths";
import Profile from "./pages/Profile";
import Videos from "./pages/Resources/Videos";
import Primer from "./pages/Resources/Primer";
import Community from "./pages/Resources/Community";
import ExternalResources from "./pages/Resources/ExternalResources";
import LearningGuides from "./pages/Resources/LearningGuides";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {

  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='classroom' element={<Classroom/>}/>
          <Route path='compete' element={<Compete/>}/>
          <Route path='practice' element={<Outlet/>}>
            <Route path='games' element={<Games/>}/>
            <Route path='gym' element={<Gym/>}/>
            <Route path='learning-paths' element={<LearningPaths/>}/>
          </Route>
          <Route path='profile' element={<Profile/>}/>
          <Route path='resources' element={<Outlet/>}>
            <Route path='community' element={<Community/>}/>
            <Route path='external-resources' element={<ExternalResources/>}/>
            <Route path='learning-guides' element={<LearningGuides/>}/>
            <Route path='primer' element={<Primer/>}/>
            <Route path='videos' element={<Videos/>}/>
          </Route>
        </Route>
      </Routes>
    </HeroUIProvider>
  )
}

export default App
