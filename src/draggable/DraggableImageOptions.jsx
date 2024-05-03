import Modal from 'component/Modal';

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
        <Modal
            onClose={handleClose}
            open={isOpen}
            title={"Image Options - " + name}
            hasSave={false}
        >
            <div style={{ display: "grid" }}>
                <div className='field'>
                    <label>Select File</label>
                    <input
                        type="file"
                        hidden
                        onChange={(e) => {
                            imageChange(e);
                        }}
                        accept="image/*"
                    />

                </div>
                <div className='field'>
                    <label>Width</label>
                    <input
                        type="number"
                        min={50}
                        value={parseInt(options.width)}
                        onChange={handleW}
                    />

                </div>
                <div className='field'>
                    <label>Height</label>
                    <input
                        type="number"
                        min={50}
                        value={parseInt(options.height)}
                        onChange={handleH}
                    />
                </div>
            </div>
        </Modal>
    )
}