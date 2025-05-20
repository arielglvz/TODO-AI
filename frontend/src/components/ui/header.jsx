import { Icon } from "@iconify/react"

const Header = () => {
  return (
     <header className="w-full h-2xl p-3 flex items-center justify-between">
        <div className=" text-secondary">ToDO Ai</div>
        <div className="flex items-center justify-between gap-3">
          <Icon icon="material-symbols:account-circle-full" className="w-4.5 h-4.5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
          <Icon icon="material-symbols:help-rounded" className="w-5 h-5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
          <Icon icon="material-symbols:settings" className="w-5 h-5 text-secondary hover:text-white transition-all duration-300 shadow cursor-pointer"/>
        </div>
    </header>
  )
}

export default Header
