export const fetchUsers = async (config, token) => {
  const { api } = config.systemParams;

  try {
    const res = await fetch(`${api.intApi.url}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
