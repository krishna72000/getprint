import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { Box, List, ListItem, TextField } from '@mui/material';

export default function DraggableImageOptions({ name, options, setSelectedImage, setOptions, isOpen, setClose }) {
    const handleClose = () => {
        setClose(false);
    };
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const handleH = (event) => {
        setOptions({ ...options, height: event.target.value + "px" });
    };
    const handleW = (event) => {
        setOptions({ ...options, width: (event.target.value + "px") });
    };
    return (
        <Dialog
            fullWidth
            onClose={handleClose}
            open={isOpen}>
            <DialogTitle>Image Options - {name}</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <Box
                            variant="contained"
                            component="label"
                        >
                            Select File
                            <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                    imageChange(e);
                                }}
                                accept="image/*"
                            />
                        </Box>
                    </ListItem>

                    <ListItem>
                        <TextField
                            fullWidth
                            label="Width"
                            type="number"
                            min={50}
                            value={parseInt(options.width)}
                            onChange={handleW}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            fullWidth
                            label="Height"
                            type="number"
                            min={50}
                            value={parseInt(options.height)}
                            onChange={handleH}
                        />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}