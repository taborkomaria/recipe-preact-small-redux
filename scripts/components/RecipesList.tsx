import {h} from 'preact';
// import {toggleTodo} from '../Store/creators';
//import toggleTodo from '../data/toggleTodo';
import {dispatch, SubscribedComponent} from '../Store/index';
import State, {StateRecipe} from '../Store/State';
import MiniRecipe from './MiniRecipe';
import {User} from 'firebase/app';
import {setVisibilityFilter, setIngr} from '../Store/creators';

/**
 * Component Properties.
 */
type RecipesListProps = object;

/**
 * Component State.
 */
interface RecipesListState
{
	user: User | null;
	recipes: StateRecipe[];
}

/**
 * Список задач.
 */
class RecipesList extends SubscribedComponent<State, RecipesListProps, RecipesListState>
{
	

	protected storeStateChanged( {user, recipes}: State ): void
	{
		if (
			( user === this.state.user )
			&& ( recipes === this.state.recipes )
		)
		{
			return;
		}
		
		this.setState( {user, recipes} );
	}	

	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const {user, recipes} = this.state;

		console.log(recipes);

		if (!user)
		{
			return <div> </div>;
		}
		
		return (
			<div class="small-wrapper">
				<button class="primary-button big-button"
					onClick={ () => this.addRecipe(event) }
				>
				Добавить рецепт
				</button>
				<div class="list-wrap">
					{
						recipes.map(
							( recipe: StateRecipe ) => (
								<MiniRecipe
								recipe = {recipe}
								/>
							),
						)
					}
				</div>
				
			</div>

		);
	}
	private addRecipe(event:Event) {
		
		event.preventDefault();
		dispatch(setIngr([]));
		dispatch( setVisibilityFilter( 'SHOW_FORM' ) );
		
		
	}
	
}

/**
 * Module.
 */
export {
	RecipesList as default,
	RecipesListProps,
	RecipesListState,
};
