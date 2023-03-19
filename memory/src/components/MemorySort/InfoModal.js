import React from 'react';

export default function InfoModal(props){
    console.log(props)
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
        },
        modal: {
            position: 'fixed',
            zIndex: 100,
            backgroundColor: 'white',
            height: 'auto',
            maxWidth: '50%',
            padding: '.75rem',
            border: '1px solid rgba(240, 46, 170)',
            textAlign: 'center',
        },
        pText: {
            fontSize: '1.1rem',
        }
    }
    return(
        <div style={styles.backdrop} onClick={() => {props.setInfo()}}>
            <div style={styles.modal}>
                <h2>Rules:</h2>
                <p style={styles.pText}>Memorize the order of the countries before you start the game. Once you click the start button the country cards will shuffle,
                    drag and drop the country cards into the correct order then click finish. You will be told if you won or lost at the top of the screen then restart and try again.
                </p>
            </div>
        </div>
    )
}