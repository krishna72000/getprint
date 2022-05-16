import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { InputLabel, FormControl, List, ListItem, MenuItem, Select, TextField } from '@mui/material';

export default function DraggableItemOptions({ id, name, options, setOptions, isOpen, setClose }) {
    const handleClose = () => {
        setClose(false);
    };
    const handleFw = (event) => {
        setOptions({ ...options, fontWeight: event.target.value });
    };
    const handleFs = (event) => {
        setOptions({ ...options, fontSize: (event.target.value + "px") });
    };
    const handleTa = (event) => {
        setOptions({ ...options, textAlign: event.target.value });
    };
    return (
        <Dialog
            fullWidth
            onClose={handleClose}
            open={isOpen}>
            <DialogTitle>Label Options - {name}</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <TextField
                            fullWidth
                            label="Font Size"
                            type="number"
                            min={5}
                            value={parseInt(options.fontSize)}
                            onChange={handleFs}
                        />
                    </ListItem>
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id={"weight-simple-select-label" + id}>Font Weight</InputLabel>
                            <Select
                                labelId={"weight-simple-select-label" + id}
                                id={"weight-simple-select" + id}
                                label="Font Weight"
                                value={options.fontWeight}
                                onChange={handleFw}
                            ><MenuItem value={"normal"}>Normal</MenuItem>
                                <MenuItem value={"bold"}>Bold</MenuItem>
                                <MenuItem value={"bolder"}>Bolder</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id={"align-simple-select-label" + id}>Font Weight</InputLabel>
                            <Select
                                labelId={"align-simple-select-label" + id}
                                id={"align-simple-select" + id}
                                label="Text Align"
                                value={options.textAlign}
                                onChange={handleTa}
                            ><MenuItem value={"left"}>Left</MenuItem>
                                <MenuItem value={"center"}>Center</MenuItem>
                                <MenuItem value={"right"}>Right</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}