import {Component, h} from 'preact';

/**
 * Component Properties.
 */
interface TodoProps
{
	/** Текст задачи */
	text: string;
	/** Завершена? */
	completed: boolean;
	/** Обработчик переключения задачи */
	onClick(): void;
	/** ID, для проблемы с `{...todo}` */
	// id: number;
	id: string;
}

type TodoState = object;

/**
 * Задача.
 */
class Todo extends Component<TodoProps, TodoState>
{
	public render( {onClick, completed, text}: TodoProps ): JSX.Element
	{
		return (
			<li
				onClick={onClick}
				style={
					{
						textDecoration: ( completed ? 'line-through' : 'none' ),
					}
				}
				class={completed ? 'completed' : undefined}
			>
				{text}
			</li>
		);
	}
}

/**
 * Module.
 */
export {
	Todo as default,
	TodoProps,
	TodoState,
};
