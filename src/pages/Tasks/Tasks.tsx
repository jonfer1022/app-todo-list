import { 
  DragDropContext, 
  Droppable, 
  Draggable, 
  DraggingStyle, 
  NotDraggingStyle, 
  DropResult,
  DraggableLocation,
  ResponderProvided
} from "react-beautiful-dnd";
import { CSSProperties, Fragment, useState } from "react";
import "./Tasks.scss";

type IUser = {
  id: number,
  name: string
};

const grid = 4;

const getListStyle = (isDraggingOver : boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: "100%"
});

const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined ): CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 1.2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  // background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});


const reorder = (list: IUser[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

type IArrayMove = {
  [index: string]: any
};

/**
 * Moves an item from one list to another list.
 */
const move = (source: any, destination: any, droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: IArrayMove = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const Tasks = (props:any) => {

  const [requested, setRequested] = useState(props.requested)
  const [inProgress, setInProgress] = useState(props.inProgress)
  const [done, setDone] = useState(props.done)

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;
    if (!destination) return;

    // Si el origen del drag culmina en el mismo drag.
    if (source.droppableId === destination.droppableId) {
      let list = source.droppableId === "Requested" ?
        requested : source.droppableId === "InProgress" ?
        inProgress : done;
      const items = reorder(
        list,
        source.index,
        destination.index
      );

      if(source.droppableId === "Requested") setRequested(items);
      if(source.droppableId === "InProgress") setInProgress(items);
      if(source.droppableId === "Done") setDone(items);
    } 
    // Si el origen del drag es diferente al drag final.
    else {
      let _source = source.droppableId === "Requested" ?
        requested : source.droppableId === "InProgress" ?
        inProgress : done;

      let _destination = destination.droppableId === "Requested" ?
        requested : destination.droppableId === "InProgress" ?
        inProgress : done;
      const result = move(
        _source,
        _destination,
        source,
        destination
      );

      if(result.Requested) setRequested(result.Requested);
      if(result.InProgress) setInProgress(result.InProgress);
      if(result.Done) setDone(result.Done);
    }
  }
  console.log(props)
  return(
    <Fragment>
      <div className={"drag-user"}>Usuario: {props.user}</div>
      <div className={"drag-main"} >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={"drag-div"}>
            <Droppable droppableId="Requested">
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    className={"drag-column"}
                  >
                    { requested.map((item:any, i:number) => {
                      return(
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}`}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style)}
                            className={"drag-card"}
                          >
                            <div className={"drag-title"} >Titulo: {item.title}</div>
                            <div className={"drag-description"} >Descripción: {item.description}</div>
                          </div>
                        )}
                      </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          </div>
          <div className={"drag-div"}>
            <Droppable droppableId="InProgress">
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    className={"drag-column"}
                  >
                    { inProgress.map((item:any, i:number) => {
                      return(
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}`}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                            className={"drag-card"}
                          >
                            <div className={"drag-title"} >Titulo: {item.title}</div>
                            <div className={"drag-description"} >Descripción: {item.description}</div>
                          </div>
                        )}
                      </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          </div>
          <div className={"drag-div"}>
            <Droppable droppableId="Done">
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    className={"drag-column"}
                  >
                    { done.map((item:any, i:number) => {
                      return(
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}`}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                            className={"drag-card"}
                          >
                            <div className={"drag-title"} >Titulo: {item.title}</div>
                            <div className={"drag-description"}>Descripción: {item.description}</div>
                          </div>
                        )}
                      </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </Fragment>
  )
}

export default Tasks;