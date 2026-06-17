import HelloContext from "./context.js";
import Recieve from "./recieve.jsx"

function Variant()
{
    return (
        <HelloContext.Provider value="Julie">
            <Recieve></Recieve>
        </HelloContext.Provider >
    );
}
export default Variant;