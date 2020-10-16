import * as React from 'react';
import { useState, useEffect } from 'react';
import firebase, {firebaseStore} from '../firebase';

const Test = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    const fetchUsers = async() => {
      const res = await firebaseStore.collection('users').get()
      if(res.empty) return [];
      const userList: Array<firebase.firestore.DocumentData> = [];
      res.forEach(doc => {
        userList.push(doc.data());
      })
      setUsers(userList);
    } 
    fetchUsers()
    setLoading(false)
  }, [])

  if (loading) return <div>Loading now</div>

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Test;