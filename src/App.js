import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase-config';
import { collection, getDocs } from '@firebase/firestore';

function App() {
	const [users, setUsers] = useState([]);
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState(0);
	const userCollectionRef = collection(db, 'users');

	const createUser = async () => {};

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	});

	return (
		<div className='App'>
			<input
				placeholder='Name...'
				type='text'
				onChange={(event) => setNewName(event.target.value)}
			/>
			<input
				placeholder='Age...'
				type='text'
				onChange={(event) => setNewAge(event.target.value)}
			/>
			<button onClick={createUser}>Create User</button>
			{users.map((user) => (
				<div key={user.id}>
					<h1>Name: {user.name}</h1>
					<h1>Age: {user.age}</h1>
				</div>
			))}
		</div>
	);
}

export default App;
