'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { toggleTheme } from '@/store/slices/themeSlice';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { theme: activeTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme !== activeTheme) {
      setTheme(theme);
    }
  }, [theme, activeTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        dispatch(toggleTheme());
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {theme === 'light' ? '🌞' : '🌙'}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
