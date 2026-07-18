import React from 'react'

const ListRendering = () => {
    const emps=[
        {id:1,name:'Sunit'},
        {id:2,name:'Halley'},
        {id:3,name:'Neet'}
    ]
  return (
    <div>
      <ul>
        {
           emps.map((emp)=>(
            <li key={emp.id} > {emp.id} ---- {emp.name}</li>
           ))
        }
      </ul>
    </div>
  )
}

export default ListRendering
