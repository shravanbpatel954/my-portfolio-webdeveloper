import React from 'react';
import './DarkMode.css';

const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    // Set default to lightTheme if no valid theme is stored
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme); // Changed from darkTheme to lightTheme
        theme = lightTheme;             // Also update the theme variable
        localStorage.setItem("theme", lightTheme); // Save it
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    return (
        <div>
            <div
                className={theme === "dark" ? clickedClass : ""}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
            >
                <span><i className="fas fa-sun"></i></span>
                <span><i className="fas fa-moon"></i></span>
            </div>
        </div>
    );
};

export default DarkMode;
