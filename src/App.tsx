import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { CanceledError } from "axios";
import UserProfile from "./components/UserProfile";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  const onClick = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      console.log(
        user.name + " with user name: " + user.username + " is clicked"
      );
      setUser(user);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div className="spinner-boarder"></div>}
      <UserList users={users} onClick={onClick} />
      {user && <UserProfile {...user} />}
    </>
  );
}

export default App;
