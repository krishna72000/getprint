import './App.css';
import './index.css';
import Draggable from './draggable/Draggable';
import { useState } from 'react';
import AddDraggable from './component/AddDraggable';
import Sortable from './sortable/Sortable';
import Grid from '@mui/material/Grid';
import ListDraggable from 'component/ListDraggable';
import rid from 'helper/rid';
import dataList from 'data';

function App() {
  const [ditems, setItems] = useState(dataList);
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
