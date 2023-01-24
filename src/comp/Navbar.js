import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STM
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          {/* <Button color="inherit" onClick={() => navigate("/student-dashboard")}>Students</Button> */}
          {/* <Button color="inherit" onClick={() => navigate("/staff-dashboard")}>Staffs</Button> */}
          <Button color="inherit" onClick={() => navigate("/add-student")}>Add Student</Button>
          <Button color="inherit" onClick={() => navigate("/add-staff")}>Add Staff</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
}
