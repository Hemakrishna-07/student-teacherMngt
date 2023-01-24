import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { studentData } from '../data/studentData';

export function EditStudent({ student, setStudent }) {

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  console.log(student)

  //   const [filter, setFilter] = useState(null)
  //   console.log(studentData)
  //   const fun = () => {let a = studentData.filter((x, i) => {return i==id})
  //   setFilter(a)
  // }
  //  useEffect(() => {fun()},[id])

  const [name, setName] = useState(studentData[id].studentName);
  const [classs, setClasss] = useState(studentData[id].studentClass);
  const [group, setGroup] = useState(studentData[id].studentGroup);
  const [phone, setPhone] = useState(studentData[id].studentPhone);

  // const [name, setName] = useState("");
  // const [classs, setClasss] = useState("");
  // const [group, setGroup] = useState("");
  // const [phone, setPhone] = useState("");

  // useEffect (() => {
  //   if( id < studentData.length )
  //   {
  //     setName(studentData[id].studentName)
  //     setClasss(studentData[id].studentClass)
  //     setGroup(studentData[id].studentGroup)
  //     setPhone(studentData[id].studentPhone)
  //   }
  //   else
  //   {
  //     navigate('/student-dashboard')
  //   }
  // },[id, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    const editStudentData = {
      studentName: name,
      studentClass: classs,
      studentGroup: group,
      studentPhone: phone
    };
    console.log(editStudentData)

    // let newArray = student.filter( (el) => {
    //     if(el.id === id) {
    //       console.log(el)
    //     }
    // } )
    // console.log(newArray)

    let newData = [...student];
    newData.splice(id,1,editStudentData);
    setStudent(newData);
    console.log(newData);
    navigate("/student-dashboard");
  };

  return <>
    <div className='edit-std'>
      <h1>Editing Student Details of - {studentData[id].studentName}  </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Student Name</Form.Label>
          <Form.Control placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
          {/* <Form.Control placeholder="Student Name" value={filter[id].studentName} onChange={(e) => setName(e.target.value)} /> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Student Class</Form.Label>
          <Form.Select type='number' aria-label="Default select example" onChange={(e) => setClasss(e.target.value)}>
            <option>{classs}</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Group</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => setGroup(e.target.value)}>
            <option>{group}</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="History">History</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='number' placeholder="Contact Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  </>;
}
