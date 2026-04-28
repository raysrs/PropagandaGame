import { createContext, useReducer } from 'react';

//central, accessable instance data getter & setter
export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
	const [user, dispatch] = useReducer(userReducer, {
		levelNum: 0,
		lineNum: 0,
		likes: 0,
		prompted: false,
		renderedQuestions: [],
	});

	return (
		<UserContext value={user}>
			<UserDispatchContext value={dispatch}>{children}</UserDispatchContext>
		</UserContext>
	);
}

function userReducer(user, action) {
	switch (action.type) {
		case 'nextLevel':
			return {
				...user,
				levelNum: user.levelNum + 1,
				lineNum: 0,
				renderedQuestions: [],
			};
		case 'nextLine':
			return { ...user, lineNum: user.lineNum + 1 };
		case 'userPrompted':
			return {
				...user,
				prompted: true,
				renderedQuestions: [
					...user.renderedQuestions,
					{ lineNum: user.lineNum, choice: -1 },
				],
			};
		case 'choiceMade':
			const questionState = {
				lineNum: user.lineNum,
				choice: action.choice,
				isCorrect: action.isCorrect,
				likesAwarded: Math.floor(
					action.isCorrect ? Math.random() * 20 + 90 : Math.random() * 10 + 1
				),
			};
			return {
				...user,
				likes: user.likes + questionState.likesAwarded,
				prompted: false,
				renderedQuestions: user.renderedQuestions.with(-1, questionState),
			};
		default:
			throw Error('Unknown action type: ' + action.type);
	}
}
