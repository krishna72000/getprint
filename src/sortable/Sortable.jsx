import { useEffect, useRef } from "react";
import Sitem from "./Sitem";
import SortService from "./SortService";
import './style.css';
export default function Sortable({ items, setitems, ...rest }) {

    const listContainer = useRef(null);
    const onDelete = (id) => {
        setitems([...items.filter((i) => {
            return i.id !== id;
        })]);
        console.log(items)
    }
    const onDisplay = (id) => {
        setitems([...items.map((i) => {
             if(i.id === id){
                i.display=i.display=='none'?'flex':'none'
             }
             return i
        })]);
    }
    const onActive = (id) => {
        setitems(pre=>{
            return pre.map((i) => {
                if (id == i.id) {
                    return { ...i, isactive: (!i.isactive) };
                } else {
                    return { ...i, isactive: false };
                }
            })
        });
    }

    useEffect(() => {
        SortService(listContainer.current,(i)=>{
            // onActive(i.getAttribute("id"));
        }, function (item, cpos, dpos) {
            // console.log(item, cpos, dpos);
            cpos++;
            dpos++;
            setitems(pre=>{
                return pre.map((e) => {
                    let sno = e.sno;
                    if (e.sno == cpos) {
                        sno = dpos;
                        return { ...e, sno, isactive: true };
                    } else {
                        if (cpos < dpos && e.sno >= cpos && e.sno <= dpos) {
                            sno--;
                        } else if (e.sno <= cpos && e.sno >= dpos) {
                            sno++;
                        }
                    }
                    return { ...e, sno, isactive: false };
                })
            });
        });
    }, [items]);
    return (
        <div id="sk-sortable-container"
            {...rest}
            ref={listContainer}
        >
            {items.map((e) => {
                return (<Sitem key={e.id} modal={e} onDelete={onDelete} onDisplay={onDisplay} onActive={onActive} />);
            })}
        </div>
    );
}