import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../styles/themes';

type ThemeSwitchContextType = {
  toggleTheme: () => void;
};

export const ThemeSwitchContext = createContext({} as ThemeSwitchContextType);

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const key = '@guilhermebalog:theme';

  const [themeTitle, setThemeTitle] = useState<string>('light');

  function toggleTheme() {
    const themeToChange = themeTitle == 'light' ? 'dark' : 'light';
    setThemeTitle(themeToChange);
  }

  return (
    <ThemeSwitchContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={themeTitle == 'light' ? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
