import React, {useState} from 'react'
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useOutletContext} from "react-router-dom";
import {findAllSections} from "../../actions/todo-action";
import {createSection} from "../../actions/todo-action";
import {deleteSection} from "../../actions/todo-action";
import SectionListItem from "./SectionListItem.js"

const TodoScreen = ({gid}) => {

    const [disp, setDisp ] = useState("Hide");
    const [newSection, setSection] = useState({title:''});
    const sections = useSelector(state => state.section);
    const dispatch = useDispatch();
    useEffect(() => {findAllSections(dispatch)},[]);
  return (
  <>
  <div>
    <div className="row">
        <div className="col-11"><h1>Todo</h1></div>
        <div className="col-1 mt-2">
            {disp === "Show" && <></>}
            {disp === "Hide" &&
                <i class="fa-xl fa-solid fa-circle-plus float-end mt-4 me-4" title="Add section" onClick={() => setDisp("Show")}></i>
            }
        </div>
    </div>
    {disp === "Hide" && <></>}
    {disp === "Show" &&

    <div className="row">
        <div className="col-10">
            <input type="text" className="form-control-plaintext ps-2 border border-dark rounded" placeholder="Section Name"
                onChange={(event) => setSection({
                ...newSection,
                title: event.target.value
                })} />
        </div>
        <div className="col-2 pe-0">
            <button type="button" className="btn btn-success rounded-pill float-start"
            onClick={() => createSection(dispatch, newSection) && setDisp("Hide")}>
            Add Section</button>
            <i class="fa fa-window-close fa-xl me-2 mt-3 ms-4 float-start " onClick={() => setDisp("Hide")}></i>
        </div>
    </div>
    }
    <ul className="list-group mt-2">
      {
        sections.map && sections.map(section =>
        <>

        <div className="row">
        <div className="col-11">
        <div class="accordion" id={"ACC_"+section._id}>
          <div class="accordion-item">
            <h2 class="accordion-header" id={"HEAD_"+section._id}>
              <button class="accordion-button collapsed  bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target={"#SEC_"+section._id}
              aria-expanded="false" aria-controls={section._id}>
                <strong>{section.title}</strong>
              </button>
            </h2>
            <div id={"SEC_"+section._id} class="accordion-collapse collapse" aria-labelledby={"HEAD_"+section._id} data-bs-parent={"#ACC_"+section._id}>
              <div class="accordion-body">
                 <SectionListItem key={section._id} todos={section.todos} section={section}/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-1">
            <i className="fas fa-trash-can ms-2 mt-4 fa-inverse" onClick={() => deleteSection(dispatch, section)}/>
        </div>
        </div>
        </>)
      }
    </ul>
   </div>
   </>
  );
}

export default TodoScreen;