import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useRecoilState } from 'recoil';
import { todoState } from './atoms/todoListState';

function App() {
	const [todoStateValue, setTodoStateValue] = useRecoilState(todoState);

	return (
		<div className='App'>
			{todoStateValue}
			<Todo />
		</div>
	);
}

export default App;
