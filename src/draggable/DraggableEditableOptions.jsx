import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Modal from 'component/Modal';

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
        setClose(false);
    };

    
    return (
        <Modal
            onClose={handleClose}
            open={isOpen}
            title={"Edit Options - " + name}
            onSave={handleSave}
        >
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
        </Modal>
    )
}