import { useEffect } from "react";

export function Head(props){
    useEffect(()=>{
        document.title = 'Netflix | ' + props.title;
    },[props])

    return <></>
}