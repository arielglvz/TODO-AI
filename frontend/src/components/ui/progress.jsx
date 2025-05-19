const ProgressBar = ({todos}) => {
  const completed = todos?.filter((todo) => todo.complete === true).length;
  const percentage = Math.round((completed   / todos.length) * 100)

  return (
    <div>
      <div className="mb-1 h-4 w-full rounded-md border bg-bg-card border-border-dark overflow-hidden">
        <div 
          className="h-full bg-secondary transition-all duration-700"
          style={{ width: `${percentage || 0}%`}}
        />
      </div>
      <p className="text-secondary/70 text-right">{completed || 0} of {length || 0} completed ({percentage || 0}%)</p>
    </div>
  )
}

export default ProgressBar
