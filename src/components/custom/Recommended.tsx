import example from '@/assets/example.jpg'
import { NavLink } from 'react-router-dom'

const Recommended = () => {
  return (
    <NavLink to='/video/2' className="flex shrink-0 gap-2 ">
            <img src={example} alt="" className="w-[195px] h-[110px] rounded-xl object-cover shrink-0" />
            <div className="flex flex-col">
              <h1 className="text-[0.85rem] font-bold my-1">Laravel Livewire CRUD with File Upload - Livewire Form</h1>
              <p className="text-muted-foreground text-xs">Tony Xhepa</p>
              <p className="text-muted-foreground text-xs">23 views &bull; 34 minutes ago</p>
            </div>
          </NavLink>
  )
}

export default Recommended