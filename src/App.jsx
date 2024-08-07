import { useEffect, useState } from "react";

import { Contacts } from "./components";

import "./App.css";

function App() {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    const getUserList = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const result = await fetch("./userdata.json");

        if (result.status === 200) {
          const jsonData = await result.json();
          setUserList(jsonData);
        }
      } catch (e) {
        console.error("Error getting user list:", e);
      }
    };

    getUserList();
  }, []);

  return (
    <div className="home-container">
      <Contacts userList={userList?.data || []} />
    </div>
  );
}

export default App;
