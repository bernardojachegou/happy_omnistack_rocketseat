import React from 'react'
import { func, string } from 'prop-types';
import { ToggleButton } from './themeButton.style.js';

import { ReactComponent as MoonIcon } from '../../images/moon.svg';
import { ReactComponent as SunIcon } from '../../images/sun.svg';

const ThemeButton = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleButton onClick={toggleTheme}>
            {/* <SunIcon />
            <MoonIcon /> */}
        </ToggleButton>
    );
};

ThemeButton.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ThemeButton;