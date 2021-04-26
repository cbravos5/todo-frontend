import { DropResult } from 'react-beautiful-dnd';
import { IData } from './data';

const onDragEnd = (result: DropResult, state: IData): IData => {
  const { destination, source, draggableId } = result;

  if (!destination) {
    return state;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return state;
  }

  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId];

  if (start === finish) {
    const newTodoIds = Array.from(start.todoIds);
    newTodoIds.splice(source.index, 1);
    newTodoIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      todoIds: newTodoIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    return newState;
  }

  const startTodoIds = Array.from(start.todoIds);
  startTodoIds.splice(source.index, 1);
  const newStart = {
    ...start,
    todoIds: startTodoIds,
  };

  const finishTodoIds = Array.from(finish.todoIds);
  finishTodoIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    todoIds: finishTodoIds,
  };

  //will be async
  state.todos[draggableId].columnId = finish.id;

  const newState = {
    ...state,
    columns: {
      ...state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };

  return newState;
};

export default onDragEnd;
