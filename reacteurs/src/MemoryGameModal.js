import React from "react";

export const MemoryGameModal = ({card, handleClose}) => (
    <div className="modal" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Tu as trouvé la paire : {card[1]}</h5>
                </div>
                <div className="modal-body">
                    <p>Tu trouveras toutes les informations associées en suivant <a href={`${card[0]}`}>ce lien Wikidata</a></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>OK</button>
                </div>
            </div>
        </div>
    </div>
)