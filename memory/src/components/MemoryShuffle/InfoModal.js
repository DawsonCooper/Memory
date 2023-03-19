import React from 'react';
import {motion} from 'framer-motion'
export default function InfoModal(props){
    
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
            border: '1px solid rgba(240, 46, 170)'
        },
        pText: {
            fontSize: '1.1rem',
        }
    }
    const animIn = {
        hidden: {
            y: '-100vh',
            opacity: 0,
            filter: 'blur(1px)',
            x: '-100vw',
        },
        visible: {
            y: '0',
            x: '0',
            opacity: 1,
            filter: 'blur(0px)',
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
            filter: 'blur(1px)',
        }
    }
    return(
    
        <motion.div style={styles.backdrop} onClick={() => {props.clickInfo()}}>
            
                <motion.div style={styles.modal} onClick={(e) => e.stopPropagation()} variants={animIn} initial='hidden' animate='visible' exit='exit'>
                    <h2>Rules:</h2>
                    <p style={styles.pText}>Choose a card from the grid to click on and remember it, once clicked the cards will shuffle. Choose another card to click
                    just make sure you do not click the same one twice. Keep going until you hit the max!
                    </p>
                </motion.div>
            
        </motion.div>
    
    )
}