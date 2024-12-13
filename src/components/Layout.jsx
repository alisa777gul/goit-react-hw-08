import { Suspense, useState, useEffect } from 'react';

import './App.css';
import Loader from './loader/Loader';
import AppBar from './appBar/AppBar';

export const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className={`layout ${currentTheme}`}>
      <AppBar setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
      <Suspense fallback={<Loader />}>
        <div className="layoutContent">{children}</div>
      </Suspense>
    </div>
  );
};
