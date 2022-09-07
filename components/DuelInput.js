import React from 'react'
import ProfileInput from './ProfileInput'

function DuelInput({TOKEN}) {
  // const [secActive, setSecActive] = React.useState(false);
  return (
    <div>
      <div className='flex flex-col my-10 mx-2 lg:flex-row lg:justify-evenly'>
        <ProfileInput active={true} TOKEN={TOKEN} />
        <ProfileInput active={true} TOKEN={TOKEN}/>
      </div>
    </div>
  )
}

export default DuelInput
