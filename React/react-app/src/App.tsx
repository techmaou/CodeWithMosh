import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     setUsers(res.data);
    //   } catch (err) {
    //     setErr((err as AxiosError).message);
    //   }
    //   fetchUsers;
    setIsLoading(true);
    const res = axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setErr(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {err && <p className="text-danger">{err}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-outline-danger">Add User</button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-1">Update</button>
              <button className="btn btn-outline-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
