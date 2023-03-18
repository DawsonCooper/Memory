import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/MemorySortStyles/finishModal.css'
export default function FinishModal(props){

    return (
        <div className={`win-modal ${props.status}`} role="dialog" >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content cust-modal">
                <div className="modal-header">
                  <h5 id="exampleModalLongTitle">You Won!</h5>
                  
                </div>
                <div className="modal-body">
                  You sorted the countries in the right order!
                </div>
                <div className="modal-footer">
                  <button type="button" className="modal-btn" onClick={() => 
                  {
                    props.closeModal();
                    props.restart();
                  }} >Restart</button>
                </div>
              </div>
            </div>
        </div>
    )
}