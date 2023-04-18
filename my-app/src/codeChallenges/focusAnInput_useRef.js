import { useEffect, useRef } from 'react';

const FocusAnInput = () => {
  
    const focusedInput = useRef(null);

    useEffect (()=> {
        focusedInput.current.focus();
    },[])

    return (
        <div className="row align-items-center">
            <div className="offset-md-4 col-md-auto offset-md-4">
            <div className="mt-5">
                <label className="p-2" htmlFor="focused-input"> Focus me on the Page Load </label>
                <input  name="focused-input" ref={focusedInput} />
          </div>
        </div>
       </div>
    )

}

export default FocusAnInput;