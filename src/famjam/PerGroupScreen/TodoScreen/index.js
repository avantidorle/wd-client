import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findAllSections} from "../../actions/todo-action";
import SectionListItem from "./SectionListItem.js"

const TodoScreen = () => {
    const sections = useSelector(state => state.section);
    const dispatch = useDispatch();
    useEffect(() => {findAllSections(dispatch)});
  return (
  <>
  <div>
    <ul className="list-group">
      {
        sections.map && sections.map(section =>
        <>
        <div class="accordion" id={"ACC_"+section._id}>
          <div class="accordion-item">
            <h2 class="accordion-header" id={"HEAD_"+section._id}>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#SEC_"+section._id}
              aria-expanded="false" aria-controls={section._id}>
                {section.title}
              </button>
            </h2>
            <div id={"SEC_"+section._id} class="accordion-collapse collapse" aria-labelledby={"HEAD_"+section._id} data-bs-parent={"#ACC_"+section._id}>
              <div class="accordion-body">
                 <SectionListItem key={section._id} todos={section.todos} sid={section._id}/>
              </div>
            </div>
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