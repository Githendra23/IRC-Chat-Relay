import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!username) {
      return;
    } else {
    axios.get('/profile').then(response => {
        console.log(response.data);
      setId(response.data.userId);
      setUsername(response.data.username);
      console.log(response.data);
    });
}
  }, []);

  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}