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
                <div className="modal_hulk">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Bravo vous avez trouvé !!!</h2>
                        <h3>Info</h3>
                        <p>
                            Je suis Hulk met aussi en avant certains sujets de société. Ainsi, l’épisode « La Dernière séance » aborde la maltraitance des enfants. Bruce Banner s’offre une séance chez le psy qui lui fait revivre certains moments très durs de son enfance. Brian Banner, son père, frappait le jeune Bruce et sa mère. Une séance à laquelle est aussi convoqué plusieurs avatars de Hulk qui finissent par fusionner pour devenir au final un Hulk intelligent qu’on surnomme « le professeur Hulk ». On a pu en apercevoir une version dans Avengers : Endgame. Autre sujet tout aussi grave et sérieux, toujours abordé par Peter David : le SIDA. Dans « Liens du sang » (titre à sens multiples !), Jim, un ami de Rick Jones, annonce sa séropositivité. Sa rencontre avec un supervilain de 2nde zone le laisse la poitrine ouverte et en sang, au point que Rick Jones hésite à compresser la plaie pour le sauver de crainte d’être contaminé. Le même épisode met en scène le destin tragique de Jefferson et Tyler, un couple d’homosexuels. Quelques épisodes plus tard, dans « Au seuil des ténèbres », retournement de situation ! Jim est lui aussi atteint du VIH ! À court de solution, dans un dernier souffle il demande à Hulk qu’il lui transfuse son sang pour le guérir : après tout, Jennifer Walters en a bien profité en son temps. Mais Hulk refuse par crainte d’engendrer un nouveau monstre (on y revient décidément toujours). Un épisode très noir, dans lequel un autre drame se joue du côté de Betty Banner, qui travaille dans un centre social d’aide aux malades atteints du SIDA. Des moments difficiles et graves, qui montrent que Hulk peut s’adapter à tous les genres d’intrigues, de la plus « bourrine » à la plus subtile.
                        </p>
                        <button className="close-modal_hulk" onClick={toggleModal}>
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



