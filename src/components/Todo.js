/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilState } from 'recoil';
import { todoState } from '../atoms/todoListState';

function todo() {
	const [todoStateValue, setTodoStateValue] = useRecoilState(todoState);
	return (
		<div>
			<button onClick={(todoStateValue) => setTodoStateValue(!todoStateValue)}>
				Change
			</button>
		</div>
	);
}

export default todo;
