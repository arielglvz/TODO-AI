import { Icon } from "@iconify/react"
import { Card } from "./components/ui/card"
import { useState } from "react"
import { twMerge } from "tailwind-merge";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Test 1", complete: true},
    { id: 2, text: "Test 2", complete: true},
    { id: 3, text: "Test 3", complete: false},
    { id: 4, text: "Test 4", complete: false},
  ])

  const numberOfDone = todos.filter((todo) => todo.complete === true).length;
  const donePercentage = Math.round((numberOfDone / todos.length) * 100)

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <main>
      <div className="w-full">
        <div className="p-3 min-w-[449px]">
          <div className="mb-3 py-3 mx-auto max-w-2xl">
            <h1 className="text-3xl text-center text-white">Go to Action Plan</h1>
            <p className="text-center text-secondary">Enter your goal, and we'll help you break it down into actionable steps.</p>
          </div>
          <Card className="mb-3 p-3 mx-auto max-w-2xl text-center bg-bg-card rounded-3xl">
            <input 
              type="text"
              placeholder="Enter your goal (e.g., Learn to play the guitar)"
              maxLength={85} 
              className="p-2 w-full outline-none text placeholder:text-secondary text-white"
            />
            <div className="w-full flex justify-end">
              <div className="flex items-center gap-2">
                <div className="w-max h-max p-1.5 border border-border-dark rounded-full bg-gray-800/30 hover:bg-gray-800 transition-all duration-300 shadow cursor-pointer">
                  <Icon icon="material-symbols:save-outline" className="h-5 w-5 text-secondary"/>
                </div>
                <div className="py-1 px-2 w-max flex items-center gap-1 border border-border-dark bg-gray-800/30 hover:bg-gray-800 cursor-pointer rounded-xl transition-all duration-300 shadow">
                  <p className="text-secondary">Generate</p>
                  <Icon icon="material-symbols:convert-to-text-outline-sharp" className="h-5 w-5 text-secondary"/>
                </div>
              </div>
            </div>
          </Card>
          {/* Todo List */}
          <Card className="mx-auto max-w-2xl text-center rounded-xl overflow-hidden">
            <div className="p-5 w-full border-b border-border-dark">
              <div className="flex items-center gap-2">
                <Icon icon="ri:todo-line" className="h-5 w-5 text-white" />
                <h2 className="text-white text-xl font-semibold leading-snug">Action Plan for :</h2>
              </div>
              {/* Progress */}
              <div className="mb-2">
                <p className="mb-2 text-left text-secondary capitalize">I want to build a landing page</p>
                <div className="mb-1 h-4 w-full rounded-md border bg-bg-card border-border-dark overflow-hidden">
                  <div 
                    className="h-full bg-secondary transition-all duration-700"
                    style={{ width: `${donePercentage}%`}}
                  />
                </div>
                <p className="text-secondary/70 text-right">{numberOfDone} of {todos.length} completed ({donePercentage}%)</p>
              </div>
              {/* List */}
              <div className="">
                {todos.map(({ id, text, complete }) => (
                  <div key={id} className="mb-4 flex items-center gap-2">
                    <input 
                      type="checkbox"
                      checked={complete}
                      onChange={() => handleToggle(id)}
                      className="h-5 w-5 accent-secondary"
                    />
                    <p className={`${complete && "line-through"} text-white`}>{text}</p>
                  </div>
                ))}
              </div>

            </div>
          </Card>
        </div>

      </div>
    </main>
  )
}

export default App
