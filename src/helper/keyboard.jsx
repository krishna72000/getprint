const keyboard = (keypress, callBack) => {
    document.onkeydown = function (e) {
        if (
            (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
            e.key === "Meta" ||
            e.key === "Shift" ||
            e.key === "Control" ||
            e.key === "alt"
        ) {
            return;
        }
    };

    const [func, keyname] = keypress.split("+");
    const keyid = keyname.charCodeAt(0);

}