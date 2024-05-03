import './style.css';
import rid from 'helper/rid'
import html2canvas from 'html2canvas';

export default function ListDraggable({setZoom, handleOpen ,zoom}) {
    const dragableList = [
        { name: "Label" },
        { name: "Image" }
    ];
    
    const exportToJPG = () => {
        html2canvas(document.querySelector('#sk-draddable-container')).then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          const downloadLink = document.createElement('a');
          downloadLink.href = imgData;
          downloadLink.download = 'image.jpg';
          downloadLink.click();
        });
    };

    return (
        <div
            className='dragable-label-container'
            style={{ height: "200px", padding: "10px 5px" }}>
            <div
                className='label-list'>
                {
                    dragableList.map((e) => {
                        return (
                            <div
                                key={rid()}
                                className='label-item'
                            ><div
                                className="label-name"
                            >{e.name}</div><a className="label-action" onClick={() => { handleOpen(e.name) }}>add</a>
                            </div>
                        );
                    })
                }
            </div>
            <div style={{flex:""}}>
                    <span>Zoom</span>
                    <div className="range-slider">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={zoom}
                            onChange={(e)=>{
                                setZoom(pre=>{
                                    return (e.target.value)
                                })
                            }}
                            className="range-input"
                        />
                        <div className="range-value">
                            <input type='number' value={zoom}
                                onChange={(e)=>{
                                    setZoom(pre=>{
                                        return (e.target.value)
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                <button onClick={()=>{
                        exportToJPG()
                    }}>Export To JPG</button>
                    {/* <button onClick={()=>{
                        exportToPDF()
                    }}>Export To PDF</button> */}
                </div>
        </div>
    );
}