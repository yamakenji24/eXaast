import * as React from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { RootState } from '../../stores/root-stores';

interface User {
  id: string;
  name: string;
}

export const TestContainer = () => {
  useFirestoreConnect(['users'])
  const users:Array<User> = useSelector((state: RootState) => state.firestore.ordered.users)

  if (!isLoaded(users)) return <div>Loading...</div>
  if (isEmpty(users)) return <div>No users found</div>

  return (
    <div>
      {users && users.map(user => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

