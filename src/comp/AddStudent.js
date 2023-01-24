import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function AddStudent({ student, setStudent }) {

  const [name, setName] = useState("");
  const [classs, setClasss] = useState();
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const newStudentData = {
      studentName: name,
      studentClass: classs,
      studentGroup: group,
      studentPhone: phone
    };
    let data = [...student];
    data.push(newStudentData);
    setStudent(data);
    // console.log(data);
    navigate("/student-dashboard");
  };

  return <>
    <div className='add-std'>
      <h1>ADD STUDENT</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Student Name</Form.Label>
          <Form.Control placeholder="Student Name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Student Class</Form.Label>
          <Form.Select type='number' aria-label="Default select example" onChange={(e) => setClasss(e.target.value)}>
            <option>Click Here To Select Class</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Group</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => setGroup(e.target.value)}>
            <option>Click Here To Select Group</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="History">History</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='number' placeholder="Contact Number" onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  </>;
}
