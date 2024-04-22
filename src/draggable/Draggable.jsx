import { useState } from 'react';
import DragImage from './DragImage';
import DragItem from './DragItem';
import './style.css';
export default function Draggable({ items,zoom, ...rest }) {

    return (
        <div id="sk-draddable-container"
            {...rest}
            className="sk-draggable-container-grid sk-draggable-container-lines"
        >
            <div style={{transform: `scale(${zoom})`,position:"relative",display:"flex"}}>
            {items.map((e, i) => {
                if (e.type == "Label") {
                    return (<DragItem key={e.id} modal={e} content={`Label ${e.name}`} />);
                } else {
                    return (<DragImage key={e.id} modal={e} />);
                }
            })}
            </div>
        </div>
    );
}