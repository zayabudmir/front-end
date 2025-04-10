"use client";

import axios from "axios";
import { useEffect } from "react";
import Profile from "./components/profile";
import UseProfile from "./components/UseProfile";

export default function Home() {
  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/users`
    );
    console.log(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UseProfile></UseProfile>
    </div>
  );
}
