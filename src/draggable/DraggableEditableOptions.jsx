import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, DialogActions } from '@mui/material';

export default function DraggableEditableOptions({ name, content, setContent, isOpen, setClose }) {
    const editorRef = useRef(null);
    const handleClose = () => {
        setClose(false);
    };

    const handleSave = () => {
        // console.log(editorRef.current.getContent());
        // setContant(editorRef.current.getContent());
        if (editorRef.current) {
            setContent(editorRef.current.getContent());
        }
    };
    return (
        <Dialog
            fullWidth
            onClose={handleClose}
            open={isOpen}>
            <DialogTitle>Edit Options - {name}</DialogTitle>
            <DialogContent>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={content}
                    init={{
                        height: 200,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                <Button onClick={handleSave} autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}