import { useState } from "react"
import { Icon } from "@iconify/react"
import { validateAndGenerateTodos, formatTodos } from "./services/gemini-service";
import { toast, ToastContainer } from "react-toastify";
import { Card } from "./components/ui/card"
import Header from "./components/ui/header";
import CardTitle from "./components/ui/card-title";
import Loading from "./components/ui/laoding";
import GoalInputCard from "./components/ui/goal-input";
import TodoList from "./components/ui/todolist";
import Footer from "./components/ui/footer";
import CardHeader from "./components/ui/card-header";

function App() {
  const [goal, setCurrentGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);

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
    
    try {
      const result = await validateAndGenerateTodos(goal);
      
      if (!result) {
        return; // Error already handled in service
      }

      if(todos.length) {
        toast.error('Please reset the action plan first.');
        return;
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

  return (
    <main className="min-w-[375px]">
      <div className="h-dvh flex flex-col justify-between">
        <Header/>
        <section className="h-max">
          <div className="p-3 h-full w-full">
            <CardTitle 
              title="Go to Action Plan"
              subtitle="Enter your goal, and we'll help you break it down into actionable steps."
            />
            <GoalInputCard 
              handleInput={handleInput} 
              handleGoal={handleGoal} 
              placeholder="Enter your goal (e.g., Learn to play the guitar)" 
              maxLenght={85}
            />
            {isLoading && todos.length === 0 ? <Loading /> : null}
            {todos.length > 0 && (
              <Card className="p-3 mx-auto max-w-2xl text-center rounded-xl overflow-hidden">
                <div className="p-5 w-full">
                  <CardHeader goal={goal} todos={todos} />
                  <TodoList 
                    todos={todos} 
                    handleToggle={handleToggle} 
                    renderEmptyState={() => (
                      <p className="text-secondary text-center">Nothing to do! Add your first task.</p>
                    )}
                    className="mt-5"
                  />
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
        <Footer />
      </div>
      <ToastContainer />
    </main>
  )
}

export default App
