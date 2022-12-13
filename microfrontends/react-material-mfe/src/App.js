import { useEffect, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { BasicTable } from "./components/BasicTable";
import { BasicModal } from "./components/BasicModal";
import { Stack } from "@mui/system";
import { useKeycloak } from "./auth/Keycloak";

function App({ config }) {
  const [users, setUsers] = useState([]);
  const keycloak = useKeycloak();
  const { api } = config.systemParams;

  const fetchUsers = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    };
    try {
      const res = await fetch(`${api.intApi.url}/api/users`, options);
      if (res.ok) {
        setUsers(await res.json());
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    if (keycloak.authenticated) {
      if (keycloak.isTokenExpired()) {
        keycloak.login();
      } else {
        fetchUsers();
      }
    }
  }, [keycloak.authenticated])

  console.log('users',users)

  return (
    <>
      <CssBaseline />
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
