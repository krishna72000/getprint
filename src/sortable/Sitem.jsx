export default function Sitem({ modal, onDelete,onDisplay,onActive, isLocked, ...rest }) {
    return (
        <div
            className={"sk-sortable-item "+(modal.isactive?"selected":"")}
            draggable={true}
            data={modal.sno}
            onClick={()=>{onActive(modal.id)}}
            // onDragStart={()=>{onActive(modal.id)}}
        >
            <div className="sk-sortable-item-sn">
                {modal.ino} - {modal.name}
            </div>
            <div className="sk-sortable-item-action" onClick={() => { onDisplay(modal.id); }}>
                <i className={`glyphicon glyphicon-${modal.display=='none'?'eye-close':'eye-open'}`}></i>
            </div>
            <div className="sk-sortable-item-action" onClick={() => { onDelete(modal.id); }}>
                <i className="glyphicon glyphicon-trash"></i>
            </div>
        </div>
    );
}