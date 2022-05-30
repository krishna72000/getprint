import { useState } from 'react';
import DragImage from './DragImage';
import DragItem from './DragItem';
import './style.css';
export default function Draggable({ items, ...rest }) {
    const [zoom, setzoom] = useState(1.0);
    const zoomIn = () => {
        setzoom(zoom + 0.2);
    }

    const zoomOut = () => {
        if (zoom > 1) {
            setzoom(zoom - 0.1);
        }
    }
    return (
        <div id="sk-draddable-container"
            {...rest}
            className="sk-draggable-container-grid sk-draggable-container-lines"
            style={{ transform: `scale(${zoom})` }}
        >
            {items.map((e, i) => {
                if (e.type == "Label") {
                    return (<DragItem key={e.id} modal={e} content={`Label ${e.name}`} />);
                } else {
                    return (<DragImage key={e.id} modal={e} />);
                }
            })}
        </div>
    );
}