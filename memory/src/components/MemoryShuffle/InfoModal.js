import React from 'react';

export default function InfoModal(props){
    
    const styles = {
        backdrop: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 99,
            top: 0,
        },
        modal: {
            position: 'fixed',
            zIndex: 100,
            backgroundColor: 'white',
            height: 'auto',
            maxWidth: '50%',
            padding: '.75rem',
            border: '1px solid rgba(240, 46, 170)'
        },
        pText: {
            fontSize: '1.1rem',
        }
    }
    return(
        <div style={styles.backdrop} onClick={() => {props.clickInfo()}}>
            <div style={styles.modal}>
                <h2>Rules:</h2>
                <p style={styles.pText}>Choose a card from the grid to click on and remember it, once clicked the cards will shuffle. Choose another card to click
                just make sure you do not click the same one twice. Keep going until you hit the max!
                </p>
            </div>
        </div>
    )
}