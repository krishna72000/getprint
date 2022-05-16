import './App.css';
import './index.css';
import Draggable from './draggable/Draggable';
import { useState } from 'react';
import AddDraggable from './component/AddDraggable';
import Sortable from './sortable/Sortable';
import Grid from '@mui/material/Grid';
import ListDraggable from 'component/ListDraggable';
import rid from 'helper/rid';

function App() {
  const [ditems, setItems] = useState([
    {
      id: rid(),
      ino: 1,
      sno: 1,
      name: "label 1",
      type: "Label",
      fixed: false,
      isactive: false
    }, {
      id: rid(),
      ino: 2,
      sno: 2,
      name: "image 2",
      type: "Image",
      fixed: false,
      isactive: false
    },
    {
      id: rid(),
      ino: 3,
      sno: 3,
      name: "label 3",
      type: "Label",
      fixed: false,
      isactive: false
    },
    {
      id: rid(),
      ino: 4,
      sno: 4,
      name: "image 4",
      type: "Image",
      fixed: false,
      isactive: false
    },
    {
      id: rid(),
      ino: 5,
      sno: 5,
      name: "label 5",
      type: "Label",
      fixed: false,
      isactive: false
    }
  ]);
  // console.log(ditems);
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
        isactive: false
      }
    ]);
  }
  const handleOpen = (type) => {
    setModal({ type: type, isOpen: true });
  }

  return (
    <div
    // style={{ backgroundColor: "#eee" }}
    >
      <Grid container spacing={4} justifyContent="space-around" direction="row">
        <Grid item xs={12} lg={8}>
          <Draggable
            items={ditems}
            style={{ height: "500px", padding: "40px 5px", margin: "10px 5px 0px 5px" }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container direction="column">
            <Grid item xs={6} lg={12}>
              <ListDraggable handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={6} lg={12}>
              <Sortable
                items={ditems} setitems={setItems}
                style={{ height: "300px", padding: "10px 5px" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AddDraggable
        modal={modal}
        addItem={handleAdd}
        setClose={setModal} />
    </div >
  );
}

export default App;
