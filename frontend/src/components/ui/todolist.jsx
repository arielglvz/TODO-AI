const TodoList = ({ todos, handleToggle, ...props }) => {

  return (
    <div>
      {todos?.map(({id, text, complete}) => (
        <div key={id} className="mb-4 flex items-center gap-2">
          <input 
            type="checkbox"
            checked={complete}
            className="h-5 w-5 accent-secondary cursor-pointer"
            onChange={() => handleToggle(id)}
            {...props}
          />
          <p className={`${complete ? "line-through text-secondary opacity-50" : "text-white opacity-100"} transition-all duration-1000`}>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoList
