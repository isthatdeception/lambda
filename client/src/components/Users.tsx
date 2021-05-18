// static imports
import React from "react";
import { gql, useQuery } from "@apollo/client";

interface User {
  name: string;
}

const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      id
      name
    }
  }
`;

export default function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>.. loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div>
        <h1>users</h1>
        <div className="users">
          {data.users.map((user: User) => (
            <p>{user.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}
