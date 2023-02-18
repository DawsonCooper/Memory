import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/MemorySortStyles/finishModal.css'
export default function FinishModal(props){
    return (
        <div className={`lost-modal ${props.status}`} role="dialog" >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content cust-modal">
                <div className="modal-header text-center">
                  <h5 id="exampleModalLongTitle">You Lost!</h5>
                  <button type="button" className="modal-btn"  onClick={props.closeModal} aria-label="Close">
                    <span>x</span>
                  </button>
                </div>
                <div className="modal-body">
                  You did not order the countries correctly!
                </div>
                <div className="modal-footer">
                  <button type="button" className="modal-btn"  onClick={() => 
                  {
                    props.closeModal();
                    props.restart();
                  }}  >Restart</button>
                </div>
              </div>
            </div>
        </div>
    )
}