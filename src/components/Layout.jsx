import { Suspense, useState, useEffect } from 'react';
import Header from './header/Header';
import './App.css';

export const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme); // Save the theme to localStorage
  }, [currentTheme]);

  return (
    <div className={`layout ${currentTheme}`}>
      <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
      <Suspense fallback={null}>
        <div className="layoutContent">{children}</div>
      </Suspense>
    </div>
  );
};
