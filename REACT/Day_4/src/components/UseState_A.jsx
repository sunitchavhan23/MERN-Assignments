import React, { useState } from 'react'

const UseState_A = () => {
  const [emps, setEmps] = useState([])
  const [ename, setEname] = useState('')
  const [esal, setEsal] = useState(0)

  const handleArray = () => {
    setEmps([
      ...emps, {
        id: emps.length + 1,
        name: ename,
        sal: esal
      }
    ])
  }
  return (
    <div
      class="container col-7 bordered shadow py-3 my-2"
    >
      Name: <input type="text" onChange={(e) => setEname(e.target.value)} /> <br /><br />
      Salary: <input type="text" onChange={(e) => setEsal(e.target.value)} /> <br />
      <br />
      <button onClick={handleArray}>Add Emp</button>


      <ul>
        {
          emps.map((emp) => (
            <li key={emp.id}> Id--{emp.id} Name--{emp.name} Salary--{emp.sal}</li>
          ))
        }
      </ul>
    </div>

  )
}

export default UseState_A
