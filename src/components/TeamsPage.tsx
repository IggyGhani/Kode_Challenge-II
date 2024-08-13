"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { error } from "console";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const Teamspage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((Response) => {
        const fetchedUser = Response.data.results.map((user: any) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          avatar: user.picture.medium,
        }));
        setLoading(false);
        setUsers(fetchedUser);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1> Team Members</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{ borderRadius: "50%", marginBottom: "8px" }}
            />
            <h2 style={{ fontSize: "1.2em" }}>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamspage;
