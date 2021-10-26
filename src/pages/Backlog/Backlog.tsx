import { Fragment } from "react";
import Task from "../Tasks/Tasks";
import data from "./dataTest"

const Backlog = () => {

  return (
    <Fragment>
      <div className={"drag-title-main"}>
        <div>Requested</div>
        <div>In progress</div>
        <div>Done</div>
      </div>
      { data.map((item:any) => (
        <Task 
          requested={item.requested}
          inProgress={item.inProgress}
          done={item.done}
          user={item.user}
        />
      ))}
    </Fragment>
  )
}

export default Backlog