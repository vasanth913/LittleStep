import React, { useState, createContext } from "react";
import ColorContext   from './creatContext';
import { useContext } from "react";


const ColorPicker = () => {
    const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
    const { setColor } = useContext(ColorContext);
    return (
        <div>
            <h1>Color Picker</h1>
            {colors.map(color => <button className='p-2' key={color} onClick={() => setColor(color) } style={{ backgroundColor: color}}></button>)}
        </div>
    )
}

const Pixel = () => {
    const { color } = useContext(ColorContext);
    const [pixelColor, setPixelColor] = useState('lightGrey');

   return <div onClick = {() => setPixelColor(color) } style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} /> 
} 

const Pixels = () => {
    const pixels = [];
    for(let i=0; i< 100; i++){
        pixels.push(<Pixel />)
    }
        return (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto'}}>
              {pixels}
            </div>
        )
}

const PixelArt = () => {
    const [color , setColor] = useState('lightGrey');
   
   return (
    <ColorContext.Provider value={{color,setColor}}>
        <ColorPicker />
        <Pixels />
    </ColorContext.Provider>
   )
}

export default PixelArt;