import * as React from 'react';
import { useTheme, Theme } from './ThemeUse';

const MyPage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button onClick={() => setTheme(Theme.Dark)}>
        switch to dark theme
      </button>
      <button onClick={() => setTheme(Theme.Dark)}>
        switch to light theme
      </button>
      </div>
  )
}

export default MyPage;