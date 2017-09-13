import {h} from 'preact';
//import {toggleTodo} from '../Store/creators';
import {SubscribedComponent} from '../Store/index';
import State, {Ingredient} from '../Store/State';
import IngredientInput from './IngredientInput';
import {setIngr, delIngr } from '../Store/creators'
import {dispatch} from '../Store/index';

/**
 * Component Properties.
 */
type IngredientListProps = object;

/**
 * Component State.
 */
interface IngredientListState
{
	ingredients: Ingredient[];
}

/**
 * Список задач.
 */
class IngredientsList extends SubscribedComponent<State, IngredientListProps, IngredientListState>
{

	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const {ingredients} = this.state;

		return (
			<div>
				{
					ingredients.map(
						( ingredient: Ingredient, i ) => (
						<IngredientInput
							count={ingredient.count}
							name={ingredient.name}
							units = {ingredient.units}
							//()=>
							onChangeName={(event:Event) => this.updateName( event, i)}
							onChangeCount={(event:Event) => this.updateCount(event, i)}
							onChangeUnits={(event:Event) => this.updateUnits(event, i)}
							onDelete={() => this.deleteInput(i)}
							
						/>
							),
						)
					}
			</div>
		);
	}
	private deleteInput(i:number)
	{
		console.log("DELETE");
		dispatch( delIngr( i ) );
	}

	private updateName(e:Event, i:number)
	{
		const {ingredients} = this.state;
		ingredients[i].name = (e.target as HTMLInputElement).value;
		
		dispatch( setIngr( ingredients ) );	
  	}

//e
//e.target.value
	private updateCount(e:Event, i:number)
	{
		const {ingredients} = this.state;
		ingredients[i].count = (e.target as HTMLInputElement).value;
		ingredients[i].reCount = (e.target as HTMLInputElement).value;
		dispatch( setIngr( ingredients ) );	
  	}
	private updateUnits(e:Event, i:number)
	{
		const {ingredients} = this.state;
		ingredients[i].units = (e.target as HTMLSelectElement).value;
		dispatch( setIngr( ingredients ) );	
  	}

	protected storeStateChanged( {ingredients}: State ): void
	{
		if (
			( ingredients === this.state.ingredients )

		)
		{
			return;
		}

		this.setState( {ingredients} );
	}





}

/**
 * Module.
 */
export {
	IngredientsList as default,
	IngredientListProps,
	IngredientListState,
};
