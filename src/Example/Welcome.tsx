// import React from "react";



interface Iprops {

    name:string;
}
function Welcome(props: Iprops){
    
const {name} = props;



    return (
    <div>
        <h1 > {name}</h1>
        </div>
    );
    
}

export default Welcome;