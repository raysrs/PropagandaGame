import { useContext } from 'react';
import { UserContext, UserDispatchContext } from './UserContext';
import { SpeechBubble } from './';

function Question({ props, lineNum }) {
	const user = useContext(UserContext);
	const userDispatch = useContext(UserDispatchContext);
	const state = user.renderedQuestions.find((q) => (q.lineNum == lineNum));

	function handleClick(i) {
		//update question state (deactivates buttons & highlights chosen answer)
		userDispatch({
			type: 'choiceMade',
			choice: i,
			isCorrect: (i == props.correctAnswer),
		});
	}

	return (
		<>
			<SpeechBubble speaker={'Poppy'}>{props.prompt}</SpeechBubble>
			<ul className='text-center'>
				{props.options.map((text, i) => (
					<li key={i} className='my-4 mx-8 text-center justify-center'>
						{
							state.choice == -1 ?
								// displayed before choice made
								<button
									onClick={() => handleClick(i)}
									className='bg-pink-400 font-serif rounded-full w-full p-2 hover:bg-fuchsia-500 hover:font-semibold'>
									{['A', 'B', 'C'][i]}: {text}
								</button>
								// displayed after choice made
							:	<div
									className={
										(
											state.choice == i // chosen option displays brighter than non-chosen
										) ?
											'bg-pink-400 font-serif rounded-full p-2'
										:	'bg-pink-200 text-pink-800 font-serif rounded-full p-2'
									}>
									{['A', 'B', 'C'][i]}: {text}
								</div>

						}
					</li>
				))}
			</ul>
			{
				// displays poppy's response if user has made choice
				state.choice != -1 && (
					<SpeechBubble speaker={'Poppy'}>
						{props.responses[state.isCorrect ? 0 : 1]}
					</SpeechBubble>
				)
			}
		</>
	);
}

export default Question;
