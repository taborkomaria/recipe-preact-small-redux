import {Component, h} from 'preact';
// import {addTodo} from '../Store/creators';
// import {dispatch} from '../Store/index';

import {addInput, setIngr} from '../Store/creators';
import {dispatch, SubscribedComponent} from '../Store/index';
import IngredientsList from './IngredientsList';
import addRecipe from '../data/addRecipe';
import State, {Ingredient} from '../Store/State';
import {User} from 'firebase/app';

/**
 * Component Properties.
 */
interface AddRecipeProps
{
	// Запрещаем любые ключи (только пустой объект)
	[key: string]: void;
}

/**
 * Component State.
 */
interface AddRecipeState
{
	ingredients: Ingredient[];
	user: User | null;
}

/**
 * Форма добавления задачи.
 */
class AddRecipe extends SubscribedComponent<State, AddRecipeProps, AddRecipeState> 
{
	protected storeStateChanged( {ingredients, user}: State ): void
	{
		if (
			( ingredients === this.state.ingredients )
			&& ( user === this.state.user )

		)
		{
			return;
		}

		this.setState( {ingredients, user} );
	}

	/**
	 * Элемент поля ввода.
	 */
	private input: HTMLInputElement;
	private inputTime: HTMLInputElement;
	private inputDesc: HTMLTextAreaElement;
	private form: HTMLFormElement;
	private textarea: HTMLTextAreaElement;
	private block: HTMLElement;
	private select: HTMLSelectElement;
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		return (
			<div>
				<form 
					onSubmit={this.onSubmit}
					ref={this.refForm}
				>
					<h2>Название:</h2>
					<input
						name="title"
						placeholder="Название"
						ref={this.refInput}
					/>
					<h2>Краткое описание:</h2>
					<textarea
						ref={this.refInputDesc}
					>
					<h2>Время приготовления</h2>
					<input
						placeholder="Время приготовления"
						ref={this.refInputTime}
					/>
					</textarea>
					<input
					 	type="file"
						onChange={this.previewFile}
						
					/>
					
					<h2>Кол-во порций:</h2>
					<select class="serving"
						ref={this.refSelect} 
					>
						<option value="1">1</option>
						<option selected value="2">2</option>
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
						ref={this.refText}
					>

					</textarea>
					<input
						type="submit"
						value="Добавить рецепт"
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
	private refInputTime = ( element: HTMLInputElement ): void =>
	{
		this.inputTime = element;
	}
	private refInputDesc = ( element: HTMLTextAreaElement ): void =>
	{
		this.inputDesc = element;
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
	 * Загрузка фото
	 */
	private imagePreviewUrl:any;
	private previewFile = (event:Event): void =>
	{
		
		let reader = new FileReader();
    	let file = (event.target as HTMLInputElement).files[0];
		
    	reader.onloadend = () => {
			this.imagePreviewUrl = reader.result;
			console.log(this.imagePreviewUrl)
			//dispatch(setImg(reader.result));
    	}
		
    	reader.readAsDataURL(file);
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
	//	(element as HTMLInputElement).value;
		addRecipe( this.input.value, this.state.ingredients, 
		this.textarea.value, this.state.user, this.select.value, 
		this.imagePreviewUrl, this.inputDesc.value, this.inputTime.value);
		dispatch(setIngr([]));
		this.input.value = '';
		this.select.value = '';
		this.textarea.value = '';


		
	}
	private appendInput() {
		dispatch( addInput( ) );

		console.log(this.state.ingredients);
	}
}

/**
 * Module.
 */
export {
	AddRecipe as default,
	AddRecipeProps,
	AddRecipeState,
};
