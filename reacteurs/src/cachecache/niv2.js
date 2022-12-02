import './cacheCahce.css'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Niv3 from "./niv3";



const  Niv2 = () =>{

    const [modal,setModal] = useState(false)
    const toggleModalFalse = () => {
        console.log("Non c'est pas ça")
    }


    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <div>
            <img className={"backgroundImage"} src={require("./image/marvel/2.png")} onClick={toggleModalFalse}/>
            <button className={"Button_Karen_Page_"} onClick={toggleModal }><img className={"Karen_Page_"} src={require("./image/Karen_Page.webp")}/></button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Bravo vous avez trouvé !!!</h2>
                        <h3>Info</h3>
                        <p>
                            On passe au niveau suivant
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            <Link to="Niv3">Suivant</Link>

                        </button>
                    </div>
                </div>
            )}


        </div>


    )
}

//<img src={require("./1.png")} alt="hello"/>
export  default Niv2



