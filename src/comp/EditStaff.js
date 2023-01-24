import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { staffData } from '../data/staffData';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function EditStaff({ staff, setStaff }) {

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [name, setName] = useState(staffData[id].staffName);
  const [email, setEmail] = useState(staffData[id].staffEmail);
  const [subject, setSubject] = useState(staffData[id].staffSubject);
  const [phone, setPhone] = useState(staffData[id].staffPhone);

  const handleSubmit = () => {
    const newStaffData = {
      staffName: name,
      staffEmail: email,
      staffSubject: subject,
      staffPhone: phone
    };
    let data = [...staff];
    data.push(newStaffData);
    setStaff(data);
    // console.log(data);
    navigate("/staff-dashboard");
  };

  return <>
    <div className='edit-std'>
      <h1>Editing Staff Details of - {staffData[id].staffName} </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Staff Name</Form.Label>
          <Form.Control placeholder="Enter Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Staff Mail-id</Form.Label>
          <Form.Control placeholder="Enter mail-id" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject Handled</Form.Label>
          <Form.Control placeholder="Enter Subject Handled By The Staff" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='number' placeholder="Enter Contact Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  </>;
}
