import './style.css';
import rid from 'helper/rid'
export default function ListDraggable({ handleOpen }) {
    const dragableList = [
        { name: "Label" },
        { name: "Image" }
    ];

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
        </div>
    );
}