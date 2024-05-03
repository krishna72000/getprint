import { useState } from 'react';
import Modal from './Modal';

export default function AddDraggable({ modal, addItem, setClose }) {
    const [nameData, setName] = useState({ error: false, name: "" });
    const handleClose = () => {
        setClose((ps) => {
            return { ...ps, name: "", isOpen: false };
        });
    };
    const handleName = () => {
        if (nameData.name == "") {
            setName({ ...nameData, error: true });
            return;
        }
        addItem(nameData.name);
        handleClose();
    };
    return (<Modal
        title={"Add " + modal.type}
        open={modal.isOpen}
        onClose={handleClose}
        onSave={handleName}
    >
        <div>
            <div className='field'>
                <label>{modal.type}'s Name</label>
                <input
                    type="text"
                    onChange={(e) => { setName({ ...nameData, name: e.target.value }) }} />
            </div>
            {nameData.error ? (<p style={{ color: "red" }}>You must enter name</p>) : ""}
        </div>
    </Modal>)
}