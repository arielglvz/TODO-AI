import { Icon } from "@iconify/react"
import ProgressBar from "./progress"

const CardHeader = ({goal, todos}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <Icon icon="ri:todo-line" className="h-5 w-5 text-white" />
        <h2 className="text-white text-xl font-semibold leading-snug">Action Plan for :</h2>
      </div>
      <div className="mb-2">
        <p className="mb-2 text-left text-secondary capitalize">{goal}</p>
        <ProgressBar todos={todos} />
      </div>
    </div>
  )
}

export default CardHeader