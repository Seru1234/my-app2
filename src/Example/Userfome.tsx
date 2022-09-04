import { useState } from "react";

interface IUserfome {
    name:string;
    age: number;
}

const defaultFormvalue ={
    name:'',
    age:null
}
function Userfome(){

const [form , setform] = useState<IUserfome>();
    return(
        <div>
<input 
type="text"

/>
        </div>
    )
}

export default Userfome;