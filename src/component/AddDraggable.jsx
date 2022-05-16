import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Button, DialogActions, List, ListItem, TextField } from '@mui/material';

export default function AddDraggable({ modal, addItem, setClose }) {
    const [nameData, setName] = useState({ error: false, name: "" });
    const handleClose = () => {
        setClose((ps) => {
            return { ...ps, isOpen: false };
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
    return (
        <Dialog
            fullWidth
            open={modal.isOpen}>
            <DialogTitle>Add {modal.type}</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <TextField
                            fullWidth
                            label={`${modal.type}'s Name`}
                            type="text"
                            onChange={(e) => { setName({ ...nameData, name: e.target.value }) }}
                        />
                    </ListItem>
                </List>
                {nameData.error ? (<p style={{ color: "red" }}>You must enter name</p>) : ""}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                <Button onClick={handleName} autoFocus>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}