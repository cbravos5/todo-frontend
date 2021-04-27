import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from '../components/Column';
import TodoForm from '../components/TodoForm';
import { useGlobalContext } from '../context';
import onDrop from '../utils/onDrop';
import '../styles/page.css';
import './styles/todo.css';
import './styles/form.css';

const Home: React.FC<Record<string, never>> = () => {
  const {
    state,
    setState,
    showForm,
    setShowForm,
    setTodoId,
  } = useGlobalContext();
  return (
    <>
      <div className="section">
        <p>Click to add a new ToDo</p>
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => {
            setTodoId(undefined);
            setShowForm(true);
          }}
        >
          new
        </button>
      </div>
      <DragDropContext
        onDragEnd={(result: DropResult) => setState(onDrop(result, state))}
      >
        <div className="dnd-container">
          {state.columnOrder.map((columnId: string) => {
            const column = state.columns[columnId];
            const todos = column.todoIds.map(
              (todoId: string) => state.todos[todoId],
            );
            return <Column key={column.id} column={column} todos={todos} />;
          })}
        </div>
      </DragDropContext>
      {showForm && (
        <div className="highligth">
          <TodoForm />
        </div>
      )}
    </>
  );
};

export default Home;
