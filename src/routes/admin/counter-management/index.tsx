import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react';
import { countertypes } from '@/utils/variables/admin_variables';
import CounterCards from './-CounterCards';
import RenderBasedOnRole from '../-RenderBasedOnRole';

export const Route = createFileRoute('/admin/counter-management/')({
  component: () => <CounterManagement/>
})

function CounterManagement() {
  const Admin = (
    <div className=" flex  flex-col size-full overflow-hidden mb-0.5">
      {/* <Toaster /> */}
      <div className="flex justify-end h-24 my-5">
        <div className="flex items-center justify-end ">
          <button className="flex flex-row items-center justify-center h-8 px-5 text-white rounded-sm bg-main_primary mr-9 ">
            <div className="flex flex-row items-center gap-3">
              <Plus strokeWidth={5} size={15} />
              <p>Add Counter</p>
            </div>
          </button>

          {/* <AddEmployee /> */}
        </div>
      </div>

      <div className="pb-8 overflow-y-scroll">
        <div className="grid lg:grid-cols-3 lg:px-10 lg:gap-10 xl:gap-x-10 1500:grid-cols-4 1800:grid-cols-5 4k:flex 4k:flex-wrap place-items-center ">
          {countertypes.map((countertypes) => {
            return (
              <CounterCards
                key={countertypes.counterId}
                counterId={countertypes.counterId}
                counterName={countertypes.counterName}
                userName={countertypes.userName}
                status={countertypes.status}
                position={countertypes.position}
                email={countertypes.email}
                managed={countertypes.managed}
              />
            );
          })}
        </div>
      </div>
    </div>
  )

  return <RenderBasedOnRole adminComponent={Admin}/>
}