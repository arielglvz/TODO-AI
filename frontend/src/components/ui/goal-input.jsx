import { Card } from "./card"
import { Icon } from "@iconify/react"

const GoalInputCard = ({ handleInput, handleGoal, placeholder, maxLength = 85 }) => {
  return (
    <Card 
    className="mb-3 p-3 mx-auto max-w-2xl text-center bg-bg-card rounded-3xl"
    >
      <input
        className="p-2 w-full outline-none text placeholder:text-secondary text-white"
        type="text"
        onChange={(e)=>handleInput(e)}
        onKeyDown={(e) => 
          {if(e.key === "Enter") {
            handleGoal()
          }}
        }
        placeholder={placeholder}
        maxLength={maxLength} 
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
  )
}

export default GoalInputCard
