import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState, useMemo, useCallback } from 'react';

const items = [
  {
    id: "1",
    name: 'test1',
    isSelected: false
  },
  {
    id: "2",
    name: 'test2',
    isSelected: false
  },
  {
    id: "3",
    name: 'test3',
    isSelected: false
  }
]
const style = {
  border: "3px dotted #000",
  backgroundColor: "#888",
  width: "600px"
}

const _defaultNotSelected = useMemo(() => {
  return items.filter((item) => !item.isSelected);
}, []);
const _defaultSelected = useMemo(() => {
  return items.filter((item) => item.isSelected);
}, []);

const [notSelected, setNotSelected] = useState(_defaultNotSelected);
const [selected, setSelected] = useState(_defaultSelected);

const droppableList = useMemo(() => {
  return [
    { id: "notSelected", items: notSelected },
    { id: "selected", items: selected }
  ];
}, [notSelected, selected]);

  const handleDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;
      const _notSelected = notSelected.slice();
      const _Selected = selected.slice();
      // reorder
      if (source.droppableId === destination.droppableId) {
        const _items =
          source.droppableId === "notSelected" ? _notSelected : _Selected;
        const setData =
          source.droppableId === "notSelected" ? setNotSelected : setSelected;
        const [removed] = _items.splice(source.index, 1);
        _items.splice(destination.index, 0, removed);
        setData(_items);
      }
      // move to other column
      else {
        const sourceList =
          source.droppableId === "notSelected" ? _notSelected : _Selected;
        const destinationList =
          source.droppableId === "notSelected" ? _Selected : _notSelected;
        const [removed] = sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, removed);
        setNotSelected(_notSelected);
        setSelected(_Selected);
      }
    },
    [notSelected, selected]
  );


export function Dnd()
{
  return(
    <DragDropContext onDragEnd={()=>{}}>
      <Droppable droppableId="aaa">
        {
          (provided, snapshot) => (
            <div
              style={style}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                items.map(({id,name}, index) => {
                  return(
                    <Draggable draggableId={id} index={index}>
                      {
                        (provided, snapshot) => (
                            <div
                              style={style}
                              ref ={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <h4>{name}</h4>
                            </div>
                        )
                      }
                    </Draggable>
                  )

                })
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}
