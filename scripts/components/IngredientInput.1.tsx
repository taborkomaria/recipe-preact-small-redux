import {Component, h} from 'preact';
/**
 * Component Properties.
 */
interface ingredientsProps
{
	/** Текст задачи */
	text: string;
	/** Завершена? */
	id: number;
}

type StateIngredient = object;

/**
 * Задача.
 */
class IngredientInput extends Component<ingredientsProps, StateIngredient>
{
	
	
	public render(  ): JSX.Element
	{
		
		return (
			<div class="ingredient-block">
				<input
					
					name="input-block"
					class="count"
				/>
				<input
				name="input-block"
				/>
			</div>
		);
	}
}

/**
 * Module.
 */
export {
	IngredientInput as default,
	ingredientsProps,
	StateIngredient
};
