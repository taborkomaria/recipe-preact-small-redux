import {h} from 'preact';
//import {setVisibilityFilter} from '../Store/creators';
import {dispatch, SubscribedComponent} from '../Store/index';
import State, {StateVisibilityFilter, StateRecipe} from '../Store/State';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import {setVisibilityFilter,setIngr} from '../Store/creators';
import RecipesList from './RecipesList';
/**
 * Component Properties.
 */
type ShowBlockProps = object;

/**
 * Component State.
 */
interface ShowBlockState
{
	visibilityFilter: StateVisibilityFilter;

	recipeShow:StateRecipe;
	
}

/**
 * Подвал приложения.
 */
class ShowBlock extends SubscribedComponent<State, ShowBlockProps, ShowBlockState>
{
	/**
	 * Render component.
	 */
	public render(
		_props: ShowBlockProps,
		{visibilityFilter, recipeShow}: ShowBlockState,
	): JSX.Element
	{
		console.log("FILTER ARE " + visibilityFilter);
		switch ( visibilityFilter )
	{
		case 'SHOW_RECIPES_LIST':
		return(
			<RecipesList />
		);
		case 'SHOW_RECIPE':
			return (
				<div class="recepies-show">
					<button class="delete-recipe"
								onClick={ (event:Event) => this.backToList(event) }
								>
									Рецепты
								</button>
					<Recipe recipe={recipeShow}/>
				</div>
			);
		case 'SHOW_FORM':
			return (
				<div class="recepies-show"> 
					<button class="delete-recipe"
								onClick={ (event:Event) => this.backToList(event) }
								>
									Рецепты
								</button>
					<AddRecipe />
				</div>
			);
		case 'SHOW_EDIT':
			dispatch( setIngr( recipeShow.ingredients ) );
			return (
				<div class="recepies-show"> 
					<button class="delete-recipe"
								onClick={ (event:Event) => this.backToList(event) }
								>
									Рецепты
								</button>
					<EditRecipe recipe={recipeShow}/>
				</div>
			);
		default:
			return (
				<div class="recepies-show"> 
					<AddRecipe />
				</div>
			);
	}
	
		
	}
	private backToList(event:Event) {
		
		event.preventDefault();
		
		dispatch( setVisibilityFilter( 'SHOW_RECIPES_LIST' ) );

	}
	protected storeStateChanged( {visibilityFilter, recipeShow}: State ): void
	{
		if ( ( visibilityFilter === this.state.visibilityFilter )
			&& ( recipeShow === this.state.recipeShow ) )
		{
			return;
		}
		
		this.setState( {visibilityFilter, recipeShow} );
	}
	
}

/**
 * Module.
 */
export {
	ShowBlock as default,
	ShowBlockProps,
	ShowBlockState,
};
