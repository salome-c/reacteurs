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
                            Karen s'est vu offrir une émission de radio de jour à Los Angeles. Elle a décidé d'accepter, se séparant principalement de Matt pour apprendre à se pardonner.[ 72 ] Six mois plus tard, Karen a été diagnostiquée séropositive.[ 73 ] Cela faisait partie d'un plan diabolique où supervillain Mysterio, tentant de vaincre Daredevil ( et connaissant tous ses secrets ), manipula les amis de Daredevil pour le rendre fou. En effet, Mysterio a usurpé l'identité du médecin et ne savait même pas si Karen était vraiment séropositive ou non.[ 74 ] Karen est ensuite retournée au domicile de Matt à New York.[ 73 ]
                        </p>
                        <button className="close-modal_Karen_Page_" onClick={toggleModal}>
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



