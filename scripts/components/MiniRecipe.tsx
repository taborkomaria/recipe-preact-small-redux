import {Component, h} from 'preact';
import {StateRecipe} from '../Store/State';
import {setVisibilityFilter, setRecipe} from '../Store/creators';
import {dispatch} from '../Store/index';
/**
 * Component Properties.
 */
interface MiniRecipeProps
{
	recipe: StateRecipe;
}

type MiniRecipeState = object;

/**
 * Задача.
 */
class MiniRecipe extends Component<MiniRecipeProps, MiniRecipeState>
{
	public render( {recipe}: MiniRecipeProps ): JSX.Element
	{
		return (
			
				<div class="mini-recepies"
			//()=>		
			 onClick={ (event:Event) => this.recipeShow(event, recipe) }>
			 
			 	<div class="photo-wrapper">
					 <img src={recipe.imagePreviewUrl}/>
				</div>
				<h3>{recipe.title}</h3>
				<p>{recipe.descriptionPreview}</p>
				<p class="user">{recipe.author.name}</p>
				</div>
			
		);
	}
	private recipeShow(event:Event, recipe: StateRecipe) {
		
		event.preventDefault();
		
		dispatch( setVisibilityFilter( 'SHOW_RECIPE' ) );
		
		dispatch( setRecipe( recipe ) );
	}
}
/**
 * Module.
 */
export {
	MiniRecipe as default,
	MiniRecipeProps,
	MiniRecipe,
};
