import './cacheCahce.css'
import React, {useState} from "react";



const  Niv1 = () =>{

    const [modal,setModal] = useState(false)
    const toggleModalFalse = () => {
        console.log("Non c'est pas ça")
    }

    const toggleModal = () => {
        setModal(!modal)
    }
    return(
        <div>
            <img className={"backgroundImage"} src={require("./image/marvel/1.png")} onClick={toggleModalFalse}/>
            <button  onClick={toggleModal}><img src={require("./image/divalto-vipi-removebg-preview.png")}/></button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Bravo vous avez trouvé !!!</h2>
                        <p>
                            On passe au niveau suivant
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}


        </div>


    )
}

//<img src={require("./1.png")} alt="hello"/>
export  default Niv1



