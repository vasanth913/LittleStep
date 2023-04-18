

const Color = ({bgColor, name, setBackgroundColor }) => {

    return (
        <button style={{ backgroundColor: bgColor}} onClick={() => setBackgroundColor(bgColor)}>
           <h2> { name }</h2>
        </button>
    )
}

export default Color;