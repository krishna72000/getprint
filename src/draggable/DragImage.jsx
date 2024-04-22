import { useEffect, useRef, useState } from "react";
import iconImg from "assets/icon.png";
import DraggableImageOptions from "./DraggableImageOptions";
export default function DragImage({ modal, ...rest }) {
    const minHeight = 50, minWidth = 50;
    const [options, setOptions] = useState({
        height: minHeight + "px",
        width: minWidth + "px"
    });
    const [selectedImage, setSelectedImage] = useState("");

    const imageChange = (e, field) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const [isOpen, setDialogs] = useState(false);
    const dragItem = useRef(null);
    const draggableItem = useRef(null);
    const imgHolder = useRef(null);
    const resizeItem = useRef(null);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
    function resize() {

        var startX, startY, startWidth, startHeight;
        resizeItem.current.addEventListener("mousedown", initDrag, false);

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(
                document.defaultView.getComputedStyle(imgHolder.current).width,
                10
            );
            startHeight = parseInt(
                document.defaultView.getComputedStyle(imgHolder.current).height,
                10
            );
            document.documentElement.addEventListener("mousemove", doDrag, false);
            document.documentElement.addEventListener("mouseup", stopDrag, false);
        }

        function doDrag(e) {
            const nw = startWidth + e.clientX - startX;
            const nh = startHeight + e.clientY - startY;
            if (nw < minWidth || nh < minHeight) {
                return;
            }
            imgHolder.current.style.width = nw + "px";
            imgHolder.current.style.height = nh + "px";
            setActive(true);
        }

        function stopDrag() {
            document.documentElement.removeEventListener("mousemove", doDrag, false);
            document.documentElement.removeEventListener("mouseup", stopDrag, false);
            setOptions({
                ...options,
                height: imgHolder.current.style.height,
                width: imgHolder.current.style.width
            });
            setActive(false);
        }
    }

    function setActive(isDragging) {
        if (isDragging) {
            dragItem.current.classList.add("active");
        } else {
            dragItem.current.classList.remove("active");
        }
    }

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        if (draggableItem.current == e.target) {
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
            // e.stopPropagation();
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
        el.style.left = xPos + "px";
        el.style.top = yPos + "px";
        // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    useEffect(() => {
        const container = document.querySelector("#sk-draddable-container");
        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);
        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);
        resize();
    }, []);
    return (
        <>
            <div
                ref={dragItem}
                style={{ zIndex: (Math.floor(1000 / (modal.sno + 1))) ,display:modal.display}}
                className={'sk-draggable sk-draggable-image'+(modal.isactive?" active":"")}
            ><div
                className="sk-draggable-holder">
                    <div
                        ref={imgHolder}
                        style={{ ...options }}
                    >
                        <img
                            onDragStart={() => { return false }}
                            height="100%"
                            width="100%"
                            src={selectedImage ? URL.createObjectURL(selectedImage) : iconImg}
                        />
                    </div>
                </div>
                <div
                    ref={draggableItem}
                    className="sk-draggable-options">
                    <div
                        onClick={() => { setDialogs(true) }}
                        className="sk-draggable-options-style"
                    >
                        <i className="glyphicon glyphicon-option-vertical"></i>
                    </div>
                    <div
                        ref={resizeItem}
                        className="sk-draggable-options-resize"
                    >
                        <i style={{ transform: "rotate(90deg)", fontSize: 10 }} className="glyphicon glyphicon-resize-full"></i>
                    </div>
                </div>

            </div>
            <DraggableImageOptions
                id={modal.id}
                name={modal.name}
                options={options}
                setOptions={setOptions}
                isOpen={isOpen}
                setClose={setDialogs}
                setSelectedImage={setSelectedImage}
            />
        </>
    );
}