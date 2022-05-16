import { useEffect, useRef, useState } from "react";
import DraggableItemOptions from "./DraggableItemOptions";
export default function DragItem({ id, name, content, ...rest }) {
    const [options, setOptions] = useState({
        fontWeight: "normal",
        fontSize: "14px",
        textAlign: "left",
        color: "#000",
        backGroundColor: "#FFF",
        zIndex: 1
    });
    const [contentData, setContent] = useState(content);
    const [isOpen, setDialogs] = useState(false);
    const dragItem = useRef(null);
    const draggableItem = useRef(null);
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        if (draggableItem.current === e.target) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active) {
            e.preventDefault();
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, dragItem.current);
        }
    }
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    useEffect(() => {
        const container = document.querySelector("#sk-draddable-container");
        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);
        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);
    }, []);
    console.log(options);
    return (
        <>
            <div
                ref={dragItem}
                {...rest}
                className={'sk-draggable sk-draggable-item ' + (rest.className ? rest.className : "")}
            >
                <div className="sk-draggable-holder">
                    <div
                        style={{ ...options }}
                        contentEditable='true'
                    >
                        {contentData}
                    </div>
                </div>
                <div
                    ref={draggableItem}
                    className="sk-draggable-options"
                >
                    <div
                        onClick={() => { setDialogs(true) }}
                        className="sk-draggable-options-style"
                    >
                        <i className="glyphicon glyphicon-option-vertical"></i>
                    </div>
                </div>
            </div>
            <DraggableItemOptions
                id={id}
                name={name}
                options={options}
                setOptions={setOptions}
                isOpen={isOpen}
                setContent={setContent}
                setClose={setDialogs}
            />
        </>
    );
}