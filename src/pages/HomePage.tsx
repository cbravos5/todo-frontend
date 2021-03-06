import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { FaPowerOff } from 'react-icons/fa';
import Column from '../components/Column';
import TodoForm from '../components/TodoForm';
import { useGlobalContext } from '../context';
import onDrop from '../utils/onDrop';
import '../styles/page.css';
import '../styles/todo.css';
import '../styles/form.css';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const {
    state,
    setState,
    showForm,
    setShowForm,
    setTodoId,
  } = useGlobalContext();
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Link to="/login">
        <FaPowerOff className="logout" />
      </Link>
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
    </motion.div>
  );
};

export default withRouter(Home);
