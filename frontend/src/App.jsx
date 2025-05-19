import { useState } from "react"
import { Icon } from "@iconify/react"
import { Card } from "./components/ui/card"
import Input from "./components/ui/input";
import ProgressBar from "./components/ui/progress";
import { validateAndGenerateTodos, formatTodos } from "./services/gemini-service";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./components/ui/laoding";

function App() {
  const [goal, setCurrentGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([])

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleInput = (e) => {
    const inputText = e.target.value;
    setCurrentGoal(inputText)
  }

  const handleGoal = async () => {
    setIsLoading(true);

    if(todos) {
      toast.error('Please reset the action plan first.');
      return;
    }

    try {
      const result = await validateAndGenerateTodos(goal);
      
      if (!result) {
        return; // Error already handled in service
      }
      
      if (!result.isValidGoal) {
        toast.error(result.reason || 'Invalid goal. Please try again.');
        return;
      }
      
      if (result.todos && result.todos.length > 0) {
        const formattedTodos = formatTodos(result.todos);
        setTodos(formattedTodos);
        setCurrentGoal(goal);
        // setSavedGoal(goal);
        toast.success('Action plan generated!');
      } else {
        toast.error('Could not generate action steps. Please try a different goal.');
      }
    } finally {
      setIsLoading(false);
    }
  }


console.log(goal)
  return (
    <main className="min-w-[375px] w-screen h-screen">
      <header className="w-full p-3 flex items-center justify-between">
          <div className=" text-secondary">ToDO Ai</div>
          <div className="flex items-center justify-between gap-3">
            <Icon icon="material-symbols:account-circle-full" className="w-4.5 h-4.5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
            <Icon icon="material-symbols:help-rounded" className="w-5 h-5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
            <Icon icon="material-symbols:settings" className="w-5 h-5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
          </div>
      </header>
      <section>
        <div className="p-3 h-full h-max overflow-auto">
          <div className="mb-3 py-3 mx-auto max-w-2xl">
            <h1 className="text-3xl text-center text-white">Go to Action Plan</h1>
            <p className="text-center text-secondary">Enter your goal, and we'll help you break it down into actionable steps.</p>
          </div>
          <Card className="mb-3 p-3 mx-auto max-w-2xl text-center bg-bg-card rounded-3xl">
            <Input 
              onChange={(e)=>handleInput(e)}
              placeholder="Enter your goal (e.g., Learn to play the guitar)"
              maxLength={85} 
            />
            <div className="w-full flex justify-end">
              <div className="flex items-center gap-2">
                <div 
                  onClick={handleGoal}
                  className="py-1 px-2 w-max flex items-center gap-1 border border-border-dark bg-gray-800/30 hover:bg-gray-800 cursor-pointer rounded-xl transition-all duration-300 shadow"
                >
                  <p className="text-secondary">Generate</p>
                  <Icon icon="material-symbols:convert-to-text-outline-sharp" className="h-5 w-5 text-secondary"/>
                </div>
              </div>
            </div>
          </Card>
          {/* Todo List */}
          {isLoading && todos.length === 0 ? <Loading /> : null}
          {todos.length > 0 && (
            <Card className="p-3 mx-auto max-w-2xl text-center rounded-xl overflow-hidden">
              <div className="p-5 w-full">
                <div className="mb-2 flex items-center gap-2">
                  <Icon icon="ri:todo-line" className="h-5 w-5 text-white" />
                  <h2 className="text-white text-xl font-semibold leading-snug">Action Plan for :</h2>
                </div>
                  <div className="mb-2">
                    <p className="mb-2 text-left text-secondary capitalize">{goal}</p>
                    <ProgressBar todos={todos} />
                  </div>
                {/* List */}
                <div>
                  {todos.map(({ id, text, complete }) => (
                    <div key={id} className="my-2 flex items-center gap-2">
                      <input 
                        type="checkbox"
                        checked={complete}
                        onChange={() => handleToggle(id)}
                        className="h-5 w-5 accent-secondary cursor-pointer"
                      />
                      <p className={`py-3 px-2 ${complete ? "line-through text-secondary opacity-50" : "text-white opacity-100"} text-left bg-secondary/20 rounded-xl transition-all duration-1000`}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto max-w-2xl flex items-center flex-wrap gap-2">
                <div className="min-w-3xs w-max mx-auto px-4 py-2 text-center border border-border-dark rounded-full bg-grey-800 hover:bg-green-800 transition-all duration-300 shadow cursor-pointer">
                  <p className="text-white">Save</p>
                </div>
                <div 
                  onClick={() => setTodos([])}
                  className="min-w-3xs w-max mx-auto px-4 py-2 text-center border border-border-dark rounded-full bg-grey-800 hover:bg-red-800 transition-all duration-300 shadow cursor-pointer"
                >
                  <p className="text-white">Reset action plan</p>
                </div>
              </div>
            </Card> 
          )}
        </div>  
      </section>
      <ToastContainer />
    </main>
  )
}

export default App
