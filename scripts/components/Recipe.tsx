import {h} from 'preact';
import State, { StateRecipe, Ingredient} from '../Store/State';

import {dispatch, SubscribedComponent} from '../Store/index';
import {User} from 'firebase/app';
import {setVisibilityFilter, setRecipe, setIngr} from '../Store/creators';
import deleteRecipe from '../data/deleteRecipe'
/**
 * Component Properties.
 */
interface RecipeProps
{
	recipe: StateRecipe;
}

interface RecipeState 
{
	recipeShow:StateRecipe;
	user:User|null;
}

/**
 * Задача.
 */
class Recipe extends SubscribedComponent<State, RecipeProps, RecipeState>
{
	private getIngList ( recipe: StateRecipe ): JSX.Element {
		if (recipe.ingredients === undefined)
			return ( <ul> </ul>);

		var ingredlist = recipe.ingredients.map( 
				(element:Ingredient ) => ( 
					<li>{element.name} <span> {element.reCount}</span> {element.units}</li>
				),
			)
		return (
			<ul>
				{ingredlist}
			</ul>
		)	
		
		
	}
	private select: HTMLSelectElement;
	public render(
			_props: RecipeProps,
		 {recipeShow,user}: RecipeState): JSX.Element
	{
		
		return (
			<div class="recipe">
				
				<h2 class="recipe-title">{recipeShow.title}</h2>
				<img src={recipeShow.imagePreviewUrl} />
					<h2 class="recipe-user">Автор: {recipeShow.author.name}</h2>

					<div class="serv">
				<h2>Кол-во порций:</h2>
				
				<select 
				ref={this.refSelect} 
				//()=>
				onChange={ (event:Event) => this.recipeRecalculate(this.select.options[this.select.selectedIndex].value,event, recipeShow) }
				>
					<option selected disabled hidden>{recipeShow.servings}</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="8">8</option>
					<option value="16">16</option>
				</select>
				</div>
					
					
					
					<h2>Ингредиенты:</h2>
					{this.getIngList( recipeShow )}
					<h2>Способ приготовления:</h2>
					<p>{recipeShow.description}</p>
				
				{
					user &&
					recipeShow.author.uid === user.uid
						? (
							<div>
								<button class="edit-button"
								//()=>
								onClick={ (event:Event) => this.recipeEdit(event) }
								>
									Редактировать
								</button>
								<button class="delete-recipe"
								onClick={ (event:Event) => this.recipeDelete(event) }
								>
									Удалить
								</button>
							</div>
						)

						: (
							<div></div>
						)
				}
			</div>
			
		);
	}
	private recipeEdit(event:Event) {
		
		event.preventDefault();
		
		dispatch( setVisibilityFilter( 'SHOW_EDIT' ) );
		
		dispatch( setRecipe( this.state.recipeShow ) );
	}
	private recipeDelete(event:Event) {
		
		event.preventDefault();
		
		dispatch( setVisibilityFilter( 'SHOW_FORM' ) );
		
		deleteRecipe( this.state.recipeShow.id );
		dispatch(setIngr([]));
	}
	private refSelect = ( element: HTMLSelectElement ): void =>
	{
		this.select = element;
	}
	//value, event
	private recipeRecalculate(value:string,event:Event, recipeShow: StateRecipe) {
		
		event.preventDefault();
		let coef = Number(parseFloat(value)/parseFloat(recipeShow.servings));
		recipeShow.ingredients.forEach((element) =>{
			let oldCount = Number(element.count);
			oldCount*=coef;
			element.reCount=oldCount.toString();
		});
		dispatch( setRecipe( recipeShow ) );
	}
	protected storeStateChanged( {recipeShow,user}: State ): void
	{
		/*if (( recipeShow === this.state.recipeShow ) )
		{
			return;
		}
		*/
		this.setState( {recipeShow, user} );
	}
}

/**
 * Module.
 */
export {
	Recipe as default,
	RecipeProps,
	RecipeState,
};
