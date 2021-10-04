import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase-config';
import { collection, getDocs } from '@firebase/firestore';

function App() {
	const [users, setUsers] = useState([]);
	const userCollectionRef = collection(db, 'users');

	const createUser = async () => {};

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			console.log(data);
			// setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	});

	return (
		<div className='App'>
			<button onClick={createUser}>Create User</button>
			{users.map((user) => (
				<div>
					<h1>Name: {user.name}</h1>
					<h1>Age: {user.age}</h1>
				</div>
			))}
		</div>
	);
}

export default App;
