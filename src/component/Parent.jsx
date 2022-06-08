import React from 'react'
import Child from './Child'
import Child2 from './Child2'

const Parent = () => {
  return (
    <div>
      <Child 
      date="28/10/2020" 
      bgColor="#ffa500 "
      bg="black"
      text="Case Study"
      heading="Amazon Gift"
      pay="Pay"
      mode="Desktop - Mobile"
      src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
      />
       <Child2
      date="17 Sep 2020" 
      bgColor="#f5f5f5"
      bg="black"
      text="Case Study"
      heading="Apple Gift"
      pay="Pay"
      mode="MacOS - Mobile"
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      />
    </div>
    
  )
}

export default Parent