import {Component, h} from 'preact';
/**
 * Component Properties.
 */
interface ingredientsProps
{
	/** Текст задачи */
	count: string;
	/** Завершена? */
	name: string;
	units:string;
	onChangeName(event:Event): void;
	onChangeCount(event:Event): void;
	onChangeUnits(event:Event): void;
	onDelete(event:Event): void;
}

type StateIngredient = object;

/**
 * Задача.
 */
class IngredientInput extends Component<ingredientsProps, StateIngredient>
{
	
	
	public render( {onChangeName, onChangeCount, onChangeUnits, name, count,units, onDelete}: ingredientsProps ): JSX.Element
	{
		
		return (
			<div class="ingredient-block">
				<label>Название
				<input
					placeholder="Название"
					onChange={onChangeName}
					name="input-block"
					type="text"
					value={name}
				/></label>
				<label>Кол-во
				<input
					placeholder="Кол-во"
					onChange={onChangeCount}
					name="input-block"
					class="count"
					value={count}
					type="text"
				/></label>
				<label>Мера
				<select
					class="amount"
					onChange={onChangeUnits}
					value={units}
				>
					<option value="шт">шт</option>
					<option value="гр">гр</option>
					<option value="кг">кг</option>
					<option value="мл">мл</option>
					<option value="ст.л.">ст.л.</option>
					<option value="ч.л.">ч.л.</option>
					<option value="стакан">стакан</option>
				</select>
				</label>
				<div class="delete-button" onClick={onDelete}>
					x
				</div>
				
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
