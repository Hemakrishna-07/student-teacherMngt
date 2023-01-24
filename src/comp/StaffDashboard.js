import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

export function StaffDashboard({ staff, setStaff }) {

  const handleDelete = (i) => {
    let newStaffData = [...staff];
    newStaffData.splice(i, 1);
    setStaff(newStaffData);
  };

  const navigate = useNavigate();

  return <>
    <div className='stf-db'>
      <h1>STAFF DASHBOARD</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Staff Name</th>
            <th>Mail-ID</th>
            <th>Subject</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staff, id) => {
            return <tr key={id}>
              <td>{id + 1}</td>
              <td>{staff.staffName}</td>
              <td>{staff.staffEmail}</td>
              <td>{staff.staffSubject}</td>
              <td>{staff.staffPhone}</td>
              <td>
                <IconButton color='secondary' aria-label="delete" onClick={() => navigate(`/edit-staff/${id}`)}>
                  <EditIcon />
                </IconButton>
                <IconButton color='error' aria-label="delete" onClick={() => handleDelete(id)}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
      <Button
        id='dashboard-button'
        variant="contained"
        onClick={() => navigate("/")}
      >Home</Button>
    </div>
  </>;
}
