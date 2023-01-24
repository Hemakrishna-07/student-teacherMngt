import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './comp/Navbar';
import { Home } from './comp/Home';
import { useState } from 'react';
import { StaffDashboard } from './comp/StaffDashboard';
import { StudentDashboard } from './comp/StudentDashboard';
import { AddStudent } from './comp/AddStudent';
import { AddStaff } from './comp/AddStaff';
import { studentData } from './data/studentData';
import { staffData } from './data/staffData';
import { EditStudent } from './comp/EditStudent';
import { EditStaff } from './comp/EditStaff';

function App() {

  const [student, setStudent] = useState(studentData)

  const [staff, setStaff] = useState(staffData)

  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-student' element={<AddStudent student={student} setStudent={setStudent} />} />
      <Route path='/edit-student/:id' element={<EditStudent />} />
      <Route path='/add-staff' element={<AddStaff staff={staff} setStaff={setStaff} />} />
      <Route path='/edit-staff/:id' element={<EditStaff />} />
      <Route path='/student-dashboard' element={<StudentDashboard student={student} setStudent={setStudent}  />} />
      <Route path='/staff-dashboard' element={<StaffDashboard staff={staff} setStaff={setStaff} />} />
    </Routes>
  </>
}

export default App;
