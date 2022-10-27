import React, {useState, useEffect} from 'react'
import { UserProf, UserFav } from '../Components'
import { FullData } from '../Data/FullData'

function Profile() {
  const [data, setData] = useState([])

  useEffect(() => {
    let fil = FullData?.map(e => e?.collects?.filter(e => {
      return e?.fav == true
    }))
    setData(fil.filter(e => e.length != 0))
  }, [])

  // console.log(data)
  return (
    <section>
        <section className={`w-full overflow-hidden bg-white`}>
          <div className="flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
              <UserProf/>
            </div>
          </div>
        </section>
        <div className='flex items-center mt-0 flex-col md:flex-row'>
      <section
        className={`w-full md:w-[100%] pt-6 overflow-hidden h-auto relative left-0 md:left-[0%] mt-5 md:mt-0 `}
        >
        <div className="flex justify-center items-start mt-[0]">
          <div className="xl:max-w-[1280px] w-full">
            <UserFav data={data}/>
          </div>
        </div>
      </section>
      </div>
    </section>
  )
}

export default Profile