import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { BasicTable } from './components/BasicTable';
import { BasicModal } from './components/BasicModal';
import { Stack } from '@mui/system';

function App() {
  return (
    <>
      <CssBaseline/>
      <Container>
        <Stack spacing={2}>
          <BasicTable />
          <BasicModal />
        </Stack>
      </Container>
    </>
  );
}

export default App;
