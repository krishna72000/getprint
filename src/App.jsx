import './App.css';
import './index.css';
import Draggable from './draggable/Draggable';
import { useState } from 'react';
import AddDraggable from './component/AddDraggable';
import Sortable from './sortable/Sortable';
import ListDraggable from 'component/ListDraggable';
import rid from 'helper/rid';
import dataList from 'data';

function App() {
  const [ditems, setItems] = useState(dataList);
  const [modal, setModal] = useState({ type: "Label", isOpen: false });

  const handleAdd = (name) => {
    const sno = (Math.max(...ditems.map(o => o.sno))) + 1;
    // const zind = Math.floor(1000 / (sno + 1));
    setItems([
      ...ditems,
      {
        id: rid(),
        ino: sno + 1,
        sno: sno,
        name,
        type: modal.type,
        fixed: false,
        isactive: false,
        display: 'flex',
        isLocked: false
      }
    ]);
  }
  const handleOpen = (type) => {
    setModal({ type: type, isOpen: true });
  }

  const [zoom, setZoom] = useState(10);


  return (
    <div>
      <div container spacing={4} justifyContent="space-around" direction="row">
        <div className="sk-grid-container">
          <div className="sk-main-section">
            <Draggable
              items={ditems}
              zoom={(zoom + 1) / 100}
              style={{ height: "500px", padding: "40px 5px", margin: "10px 5px 0px 5px" }}
            />
          </div>
          <div className="sk-sidebar">
            <div className="sk-sidebar-top">
              <ListDraggable handleOpen={handleOpen} setZoom={setZoom} zoom={zoom} />
            </div>
            <div className="sk-sidebar-bottom">
              <Sortable
                items={ditems} setitems={setItems}
                style={{ height: "300px", padding: "10px 5px" }} />
            </div>
          </div>
        </div>
      </div>
      <AddDraggable
        modal={modal}
        addItem={handleAdd}
        setClose={setModal} />
    </div>
  );
}

export default App;
