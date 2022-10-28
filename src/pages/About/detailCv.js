import React from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getItems} from '../../components/About/DataAbout';

function Cv(){
    let params = useParams()
    let items = getItems()
    let item = items.find(
        item => item.id === Number (params.itemId)
    )

    return(
        <>
        
        <center>
            <Image width={1000} src={item.cv}/>
        </center>
        </>
    )
}
export default Cv;
