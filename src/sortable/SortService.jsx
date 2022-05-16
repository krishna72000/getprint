function SortService(target,startDrag, upDate) {
    // (A) SET CSS + GET ALL LIST ITEMS
    // target.classList.add("slist");
    let items = target.getElementsByClassName("sk-sortable-item"), current = null;

    // (B) MAKE ITEMS DRAGGABLE + SORTABLE
    for (let i of items) {
        // (B1) ATTACH DRAGGABLE
        i.draggable = true;

        // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
        i.ondragstart = (ev) => {
            current = i;
            startDrag(i);
            // i.classList.add("selected");
            for (let it of items) {
                if (it != current) {
                    it.classList.add("sk-sortable-ghost");
                    // it.classList.remove("selected")
                }
            }
        };

        // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
        i.ondragenter = (ev) => {
            if (i != current) { i.classList.add("active"); }
        };

        // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
        i.ondragleave = () => {
            i.classList.remove("active");
        };

        // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
        i.ondragend = () => {
            for (let it of items) {
                it.classList.remove("sk-sortable-ghost");
                it.classList.remove("active");
            }
        };

        // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
        i.ondragover = (evt) => { evt.preventDefault(); };

        // (B7) ON DROP - DO SOMETHING
        i.ondrop = (evt) => {
            evt.preventDefault();
            if (i != current) {
                let currentpos = 0, droppedpos = 0;
                for (let it = 0; it < items.length; it++) {
                    if (current == items[it]) { currentpos = it; }
                    if (i == items[it]) { droppedpos = it; }
                }
                if (currentpos < droppedpos) {
                    i.parentNode.insertBefore(current, i.nextSibling);
                } else {
                    i.parentNode.insertBefore(current, i);
                }
                upDate(current, currentpos, droppedpos);
            }
        };
    }
}

export default SortService;