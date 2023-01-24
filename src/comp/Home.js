import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export function Home() {
  const navigate = useNavigate();
  return <>
    <div className='home'>
      <h1>WELCOME TO STM</h1>
      <div className='home-buttons'>
        <Button
          id='dashboard-button'
          variant="contained"
          onClick={() => navigate("/student-dashboard")}
        >Student Dashboard</Button>
        <Button
          id='dashboard-button'
          variant="contained"
          onClick={() => navigate("/staff-dashboard")}
        >Staff Dashboard</Button>
      </div>
    </div>
  </>;
}
