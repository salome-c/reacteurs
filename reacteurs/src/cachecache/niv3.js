import './cacheCahce.css'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";



const  Niv3 = () =>{



    const [modal,setModal] = useState(false)
    const toggleModalFalse = () => {
        console.log("Non c'est pas ça")
    }


    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <div>
            <img className={"backgroundImage"} src={require("./image/marvel/3.png")} onClick={toggleModalFalse}/>
            <button className={"Button_hulk"} onClick={toggleModal }><img className={"hulk"} src={require("./image/1176441-hulk212_02b-removebg-preview.png")}/></button>

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
                            <Link to="Score">Suivant</Link>

                        </button>
                    </div>
                </div>
            )}


        </div>


    )
}

//<img src={require("./1.png")} alt="hello"/>
export  default Niv3



