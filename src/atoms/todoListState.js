import { atom } from 'recoil';

export const todoState = atom({
	key: 'todoState',
	default: false,
});

export const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
});

// const filteredTodoListState = selector({
// 	key: 'filteredTodoListState',
// 	get: ({ get }) => {
// 		const filter = get(todoListFilterState);
// 		const list = get(todoListState);

// 		switch (filter) {
// 			case 'Show Completed':
// 				return list.filter((item) => item.isComplete);
// 			case 'Show Uncompleted':
// 				return list.filter((item) => !item.isComplete);
// 			default:
// 				return list;
// 		}
// 	},
// });
