import { useState } from "react";

function Toggle(){

    const [checked, toggleButton] = useState(true);
    return(
        <div>
<input type="checkbox" checked={checked} onClick={(event: any) =>toggleButton(event.target.checked)} />

toggle with state management
        </div>
    )

}

export default Toggle;
