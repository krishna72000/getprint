import './style.css';
import rid from 'helper/rid'
import html2canvas from 'html2canvas';

export default function ListDraggable({setZoom, handleOpen }) {
    const dragableList = [
        { name: "Label" },
        { name: "Image" }
    ];

    // const exportToPDF = () => {
    //     html2canvas(document.querySelector('.sk-draddable-container')).then((canvas) => {
    //       const pdf = new jsPDF('p', 'mm', 'a4');
    //       const imgData = canvas.toDataURL('image/png');
    //       const imgProps = pdf.getImageProperties(imgData);
    //       const pdfWidth = pdf.internal.pageSize.getWidth();
    //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //       pdf.save('image.pdf');
    //     });
    //   };
    
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
                    <button onClick={()=>{
                        setZoom(pre=>{
                            return pre+0.1
                        })
                    }}>+</button>
                    <button onClick={()=>{
                        setZoom(pre=>{
                            return pre-0.1
                        })
                    }}>-</button>
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