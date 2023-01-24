import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

export function StudentDashboard({ student, setStudent }) {

  const handleDelete = (i) => {
    let newStudentData = [...student];
    newStudentData.splice(i, 1);
    setStudent(newStudentData);
  };

  const navigate = useNavigate();

  return <>
    <div className='std-db'>
      <h1>STUDENT DASHBOARD</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Group</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student, id) => {
            return <tr key={id}>
              <td>{id + 1}</td>
              <td>{student.studentName}</td>
              <td>{student.studentClass}</td>
              <td>{student.studentGroup}</td>
              <td>{student.studentPhone}</td>
              <td>
                <IconButton color='secondary' aria-label="delete" onClick={() => navigate(`/edit-student/${id}`)}>
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
