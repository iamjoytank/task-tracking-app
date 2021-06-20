import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'June 20th at 11:00 AM',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at school',
			day: 'June 20th at 1:00 PM',
			reminder: true,
		},
	]);

	// add new task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		setTasks([...tasks, { id, ...task }]);
	};

	// delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task))
		);
	};

	return (
		<div className="container">
			<Header
				title="Task tracker"
				showAdd={showAddTask}
				toggleAdd={() => setShowAddTask(!showAddTask)}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No task to show'
			)}
			<Footer />
		</div>
	);
}

export default App;
