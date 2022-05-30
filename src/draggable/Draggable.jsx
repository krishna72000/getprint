import { useRef, useState } from 'react';
import DragImage from './DragImage';
import DragItem from './DragItem';
import style from './style.module.css';
export default function Draggable({ items, ...rest }) {
    const parentRef = useRef();
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
        <div
            id='sk-draddable-container'
            ref={parentRef}
            {...rest}
            className={style.sk_draggable_container_grid}
            style={{ transform: `scale(${zoom})` }}
        >
            {items.map((e, i) => {
                if (e.type == "Label") {
                    return (<DragItem key={e.id} parentRef={parentRef} modal={e} content={`Label ${e.name}`} />);
                } else {
                    return (<DragImage key={e.id} parentRef={parentRef} modal={e} />);
                }
            })}
        </div>
    );
}