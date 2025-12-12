import './App.css'

import { Outlet, useNavigate, useHref, type NavigateOptions, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

//Import mock data
import { mockHomepage } from "./mock-data/HomeData";

import Classroom from "./pages/Classroom";
import Compete from "./pages/Compete";
import Home from "./pages/Home";
import Games from "./pages/practice/Games";
import Gym from "./pages/practice/Gym";
import Profile from "./pages/profile/Profile";
import Videos from "./pages/resources/Videos";
import Primer from "./pages/resources/Primer";
import Community from "./pages/resources/Community";
import ExternalResources from "./pages/resources/ExternalResources";
import LearningGuides from "./pages/resources/LearningGuides";
import LearningHome from './pages/practice/learning-paths/Home';
import { mockLearningPathsHome } from './mock-data/LearningPathsData';
import { mockProfile } from './mock-data/ProfileData';
import PathDetail from './pages/practice/learning-paths/Path';
// import { useState } from 'react';
import AccountSettings from './pages/profile/AccountSettings';

declare module "@react-types/shared" {
  	interface RouterConfig {
    	routerOptions: NavigateOptions;
  	}
}

function App() {

  	const navigate = useNavigate();
	// const [headerState, setHeaderState] = useState("Home");

  	return (
    	<HeroUIProvider navigate={navigate} useHref={useHref}>
      		<Routes>
        		<Route path='/' element={<Outlet/>}>
          			<Route index={true} element={<Home
						banners={mockHomepage.banners}
						learningPathsList={mockHomepage.learningPathsList}
						profileSummary={mockHomepage.profileSummary}
						quickLinksList={mockHomepage.quickLinksList}/>}/>
          			<Route path='classroom' element={<Classroom/>}/>
          			<Route path='compete' element={<Compete/>}/>
          			<Route path='practice' element={<Outlet/>}>
            			<Route path='games' element={<Games/>}/>
            			<Route path='gym' element={<Gym/>}/>
            			<Route path='learning-paths' element={<Outlet/>}>
							<Route index={true} element={<LearningHome paths={mockLearningPathsHome.paths}/>}/>
							<Route path=':pathID' element={<PathDetail/>}/>
						</Route>
          			</Route>
          			<Route path='profile' element={<Outlet/>}>
						<Route index={true} 
							element={<Profile activity={mockProfile.activity} 
            					skillDistribution={mockProfile.skillDistribution} 
            					challengeCompletion={mockProfile.challengeCompletion} 
            					userInfo={mockProfile.userInfo}/>}/>
						<Route path='account-settings' element={<AccountSettings/>}/>
					</Route>
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
