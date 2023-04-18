import { useState } from "react";
import Color from './color';

const ColorPicker = () => {

    const [backgroundColor , setBackgroundColor] = useState('white');

    const colors =[
        {
          bgColor: 'white',
          name : 'White Color'
        },
        {
          bgColor: 'blue',
          name: 'Blue Color',
        },
        {
          bgColor: 'green',
          name: 'Green Color'
        }
    ]


    return (
         <div className= "col-lg-12" style={{ backgroundColor: backgroundColor }}>
          <div className="row">
            <div className="col-md-4 offset-md-4">
            {
                colors.map((color) => {
                    return (
                        <Color key={color.name} bgColor={color.bgColor} name={color.name} setBackgroundColor={setBackgroundColor} />  
                    )
                    
                })
            }
            </div>
          </div> 
        </div> 
    )
}

export default ColorPicker;