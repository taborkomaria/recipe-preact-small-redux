import {StateTodo} from '../Store/State';
import getTodosRef from './getTodosRef';

function addTodo( text: string ): void
{
	const todosRef = getTodosRef();
	
	if ( !todosRef )
	{
		return;
	}
	
	todosRef.push()
		.set(
			{
				text,
				completed: false,
			} as Partial<StateTodo>,
		);
}

/**
 * Module.
 */
export {
	addTodo as default,
};
