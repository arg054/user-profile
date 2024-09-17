import React, { useState } from "react";

interface User {
  id: number;
  username: string;
}
interface UserList {
  users: User[];
  onClick: (id: number) => void;
}

const UserList = ({ users, onClick }: UserList) => {
  const message = users.length === 0 && "No users found";
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>Users</h3>
      {message}
      {users.length === 0 && <p>No users found</p>}
      <div className="list-group">
        {users.map((user, index) => (
          <a
            href="#"
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={user.id}
            onClick={() => {
              setSelectedIndex(index);
              onClick(user.id);
            }}
          >
            {user.username}
          </a>
        ))}
      </div>
    </>
  );
};

export default UserList;
