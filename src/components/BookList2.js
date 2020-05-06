import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList2 = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>the way of the kings</li>
                <li style={{ background: theme.ui }}>the name of the wind</li>
                <li style={{ background: theme.ui }}>the final empire</li>
            </ul>
        </div>
    );
}

export default BookList2;