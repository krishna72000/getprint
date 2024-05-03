import lockImg from "assets/lock.png";
import unlockImg from "assets/unlock.png";

export default function Sitem({ modal, onDelete, onDisplay, onActive, onLock, ...rest }) {
    return (
        <div
            className={"sk-sortable-item " + (modal.isactive ? "selected" : "")}
            draggable={true}
            data={modal.sno}
            onClick={() => { onActive(modal.id) }}
        >
            <div className="sk-sortable-item-sn">
                {modal.ino} - {modal.name}
            </div>
            <div className="sk-sortable-item-action" onClick={() => { onLock(modal.id); }}>
                <img width="15" src={modal.isLocked == true ? lockImg : unlockImg} />
            </div>
            <div className="sk-sortable-item-action" onClick={() => { onDisplay(modal.id); }}>
                <i className={`glyphicon glyphicon-${modal.display == 'none' ? 'eye-close' : 'eye-open'}`}></i>
            </div>
            <div className="sk-sortable-item-action" onClick={() => { onDelete(modal.id); }}>
                <i className="glyphicon glyphicon-trash color-red"></i>
            </div>
        </div>
    );
}