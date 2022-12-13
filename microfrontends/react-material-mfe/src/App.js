import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { BasicTable } from "./components/BasicTable";
import { BasicModal } from "./components/BasicModal";
import { Stack } from "@mui/system";

import { useUsers } from "./hooks/useUsers";
import { Loading } from "./components/Loading";

function App({ config }) {
  const { isLoading, users } = useUsers(config);

  return (
    <>
      <CssBaseline />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <Stack spacing={2}>
            <BasicTable users={users} />
            <BasicModal />
          </Stack>
        )}
      </Container>
    </>
  );
}

export default App;
