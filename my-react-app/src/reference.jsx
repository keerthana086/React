import {useRef} from "react";
function Refer() {
    const inputref = useRef();
    const uber = ()=>{
        inputref.current.focus();
    };
    return (
        <>
        <label>Name:</label>
        <input ref={inputref} type="text" />
        <button onDoubleClick={uber}>Enter</button>       
        </>
    );
}
export default Refer;