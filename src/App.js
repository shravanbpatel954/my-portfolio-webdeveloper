import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import './styles/sections.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <RouterScrollTop />
            {loading && (
                <div className='loading-pag'>
                    <div className="loader-name">
                        Shravankumar B. Patel
                    </div>
                    <div className="loader-bar-container">
                        <div className="loader-bar"></div>
                    </div>
                    <div className="loader-subtitle">
                        Full-Stack Developer
                    </div>
                </div>
            )}

            <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/project" element={<Project />}></Route>
                    <Route exact path="/project/app" element={<ProjectApp />} />
                    <Route exact path="/project/game" element={<ProjectGame />} />
                </Routes>
            </div>
        </>
    )
}

export default App
