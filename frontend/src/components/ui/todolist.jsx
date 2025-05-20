

const TodoList = ({ todos, handleToggle, renderEmptyState, className = "" }) => {
  if (!todos || todos.length === 0) {
    return renderEmptyState ? renderEmptyState() : <p className="text-secondary">No tasks available.</p>;
  } 

  return (
    <div className={`todo-list ${className}`}>
      {todos.map(({ id, text, complete }) => (
        <div key={id} className="my-2 flex items-center gap-2">
          <input 
            type="checkbox"
            checked={complete}
            className="h-5 w-5 accent-secondary cursor-pointer"
            onChange={() => handleToggle(id)}
          />
          <p 
            className={`w-full py-3 px-2 ${complete ? "line-through text-secondary opacity-50" : "text-white opacity-100"} text-left bg-secondary/20 rounded-xl transition-all duration-1000`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
