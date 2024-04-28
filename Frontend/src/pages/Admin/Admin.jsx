import { useState } from 'react'
import NavbarA from '../../components/NavbarA'
import Complaints from './Complaints'
import Attendance from './Attendance'

function Admin() {
  const [page,setPage]=useState(1)
  return (
    <>
      <NavbarA setPage={setPage}/>
      {page===1 && <Complaints/>}
      {page===2 && <Attendance/>}
    </>
  )
}

export default Admin