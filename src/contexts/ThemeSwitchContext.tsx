import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from '../styles/themes';

type ThemeSwitchContextType = {
  toggleTheme: () => void;
};

export const ThemeSwitchContext = createContext({} as ThemeSwitchContextType);

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const key = '@guilhermebalog:theme';

  const [themeTitle, setThemeTitle] = useState<keyof typeof themes>('dark');

  function toggleTheme() {
    const themeToChange = themeTitle == 'light' ? 'dark' : 'light';
    setThemeTitle(themeToChange);
  }

  return (
    <ThemeSwitchContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={themeTitle == 'light' ? themes.light : themes.dark}>
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
