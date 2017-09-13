import {h} from 'preact';
// import {addTodo} from '../Store/creators';
// import {dispatch} from '../Store/index';

import {/*addInput,*/ setIngr, setRecipe} from '../Store/creators';
import {dispatch, SubscribedComponent} from '../Store/index';
import IngredientsList from './IngredientsList';
import editRecipe from '../data/editRecipe';
import State, {StateRecipe, Ingredient} from '../Store/State';
import {User} from 'firebase/app';
import {setVisibilityFilter} from '../Store/creators';
/**
 * Component Properties.
 */
interface EditRecipeProps
{
	
	recipe: StateRecipe;
}

/**
 * Component State.
 */
interface EditRecipeState
{
	ingredients: Ingredient[];
	recipeShow:StateRecipe;
	user: User | null;
}

/**
 * Форма добавления задачи.
 */
class EditRecipe extends SubscribedComponent<State, EditRecipeProps, EditRecipeState> 
{
	protected storeStateChanged( {ingredients, recipeShow,user}: State ): void
	{
		if (
			( ingredients === this.state.ingredients )
			&& ( user === this.state.user )
			&& ( recipeShow === this.state.recipeShow )

		)
		{
			return;
		}

		this.setState( {ingredients, user, recipeShow} );
	}

	/**
	 * Элемент поля ввода.
	 */
	private input: HTMLInputElement;
	private form: HTMLFormElement;
	private textarea: HTMLTextAreaElement;
	private block: HTMLElement;
	private select: HTMLSelectElement;
	/**
	 * Render component.
	 */
	public render(
		{recipe}: EditRecipeProps,
		{}: EditRecipeState): JSX.Element
	{

		return (
			<div>
				<form 
					onSubmit={this.onSubmit}
					ref={this.refForm}
				>
					<h2>Название:</h2>
					<input
						value={recipe.title}
						ref={this.refInput}
					/>
					<h2>Автор:</h2>
					<p>{recipe.author.name}</p>
					<h2>Кол-во порций:</h2>
					
					<select
						ref={this.refSelect} 
					>
						<option selected value={recipe.servings}>{recipe.servings}</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="4">4</option>
						<option value="8">8</option>
						<option value="16">16</option>
					</select>
					<h2>Ингредиенты:</h2>
					<div
						ref={this.refBlock}
					>
					
						<IngredientsList
							
						/>
					</div>
					<button
						class="ingredient-button"
						type="button"
						onClick={ () => this.appendInput() }
					>
						Добавить ингредиент
					</button>
					<h2>Способ приготовления:</h2>
					<textarea
					value={recipe.description}
						ref={this.refText}
					>

					</textarea>
					<input
						type="submit"
						value="Сохранить изменения"
					/>
				</form>
			</div>
		);
	}
	
	/**
	 * Сохраняет ссылку на элемент поля ввода.
	 */
	private refInput = ( element: HTMLInputElement ): void =>
	{
		this.input = element;
	}
	private refSelect = ( element: HTMLSelectElement ): void =>
	{
		this.select = element;
	}
	private refForm = ( element: HTMLFormElement ): void =>
	{
		this.form = element;
	}
	private refText = ( element: HTMLTextAreaElement ): void =>
	{
		this.textarea = element;
	}
	private refBlock = ( element: HTMLElement ): void =>
	{
		this.block = element;
	}
	/**
	 * При нажатии на кнопку.
	 */
	private onSubmit = (event:Event): void =>
	{
		event.preventDefault();
		if(this.input.value === '' || this.textarea.value === '' || this.select.value === ''){
			return;
		}
		editRecipe( this.state.recipeShow.id, this.input.value, this.state.ingredients, this.textarea.value, this.select.value);
		dispatch( setRecipe (
			{
				...this.state.recipeShow ,
				ingredients: this.state.ingredients
			}
		) )
		dispatch( setVisibilityFilter( 'SHOW_RECIPE' ) );
	}
	private appendInput() {
		dispatch( setIngr( [...this.state.ingredients, {
			count:" ",
			reCount:" ",
			name:" ",
			units:" ",
		   }] ) );

		console.log(this.state.ingredients);
	}
}

/**
 * Module.
 */
export {
	EditRecipe as default,
	EditRecipeProps,
	EditRecipeState,
};
