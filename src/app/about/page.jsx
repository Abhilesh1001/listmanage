import React from 'react'

async function taketime(){
  await new Promise((resolve) => {
    setTimeout(
      resolve 
    , 3000);
  })
}

const Page = async  () => {
  await taketime()
    
  return (
    <div>
        About Page 
    </div>
  )
}

export default Page