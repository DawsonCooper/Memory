import React from 'react';
import {motion} from 'framer-motion'

export default function InfoModal(props){
    console.log(props)
    const styles = {
        backdrop: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, .85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 99,
            top: 0,
            left: 0,
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
    const animIn = {
        hidden: {
            y: '-100vh',
            x: '-100vw',
            opacity: 0,
        },
        visible: {
            y: '0',
            x: '0',
            opacity: 1,
            transition: {
                duration: '0.1',
                type: 'spring',
                damping: 30,
                stiffness: 750,
            }
        },
        exit: {
            y: '-100vh',
            x: '100vw',
            opacity: 0,
        }
    }
    return(

        <motion.div style={styles.backdrop} onClick={() => {props.setInfo()}}>
            
            <motion.div style={styles.modal} onClick={(e) => e.stopPropagation()} variants={animIn} initial='hidden' animate='visible' exit='exit'>
                <h2>Rules:</h2>
                <p style={styles.pText}>Memorize the order of the countries before you start the game. Once you click the start button the country cards will shuffle,
                    drag and drop the country cards into the correct order then click finish. You will be told if you won or lost at the top of the screen then restart and try again.
                </p>
            </motion.div>
            
        </motion.div>

    )
}