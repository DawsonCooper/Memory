import React from "react";
import '../../styles/MemorySortStyles/sort.css';
import { Link } from 'react-router-dom';

export default function MemorySortComponent(props) {
    return (
        <div className="memory-sort-container">
            <h2 className="memory-sort-header">Memory Sort</h2>
            <Link to='/'>
                <li>Memory Shuffle</li>
            </Link>
        </div>
    )
}