import React, { createContext } from 'react';

const ColorContext = createContext ({
    color: 'LightGrey',
    setColor: () => {}
})

export default ColorContext;