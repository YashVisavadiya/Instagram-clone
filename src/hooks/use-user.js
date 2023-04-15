import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';
// import UserContext from '../context/user';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});
  // const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser, setActiveUser };
}
