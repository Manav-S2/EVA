// ThemeProvider.js

import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ mode: 'dark' }); // Initialize with default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
