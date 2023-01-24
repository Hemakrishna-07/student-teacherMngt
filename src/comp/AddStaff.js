import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function AddStaff({ staff, setStaff }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

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
    <div className='add-stf'>
      <h1>ADD STAFF</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Staff Name</Form.Label>
          <Form.Control placeholder="Enter Student Name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Staff Mail-id</Form.Label>
          <Form.Control placeholder="Enter mail-id" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject Handled</Form.Label>
          <Form.Control placeholder="Enter Subject Handled By The Staff" onChange={(e) => setSubject(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='number' placeholder="Enter Contact Number" onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  </>;
}
