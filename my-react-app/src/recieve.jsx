import { useContext } from "react";
import UserContext from "./context.js";
function Bruno()
{
    const oggy = useContext(UserContext);
    return (
        <h1>{oggy}</h1>
    );
}
export default Bruno;
