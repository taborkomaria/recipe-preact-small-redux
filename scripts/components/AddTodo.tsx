import {Component, h} from 'preact';
// import {addTodo} from '../Store/creators';
// import {dispatch} from '../Store/index';

import {addInput} from '../Store/creators';
import {dispatch} from '../Store/index';
import IngredientsList from './IngredientsList';
import addTodo from '../data/addTodo';

/**
 * Component Properties.
 */
interface AddTodoProps
{
	// Запрещаем любые ключи (только пустой объект)
	[key: string]: void;
}

/**
 * Component State.
 */
type AddTodoState = object;

/**
 * Форма добавления задачи.
 */
class AddTodo extends Component<AddTodoProps, AddTodoState>
{
	/**
	 * Элемент поля ввода.
	 */
	private input: HTMLInputElement;
	private form: HTMLFormElement;
	private textarea: HTMLTextAreaElement;
	private block: HTMLElement;
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
					<input
						placeholder="Title..."
						ref={this.refInput}
					/>
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
						Add ingredient
					</button>
					<textarea
						ref={this.refText}
					>

					</textarea>
					<input
						type="submit"
						value="Add Todo"
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
		let allInputs:string = ' Recepies: ';
		allInputs += ' Title: ' + this.input.value + "; ";
		
		var names=document.getElementsByName('input-block'); 
		var key;
		for(key=0; key < names.length; key++) {
			allInputs += ' Ingredient' + key +': '+ (names[key] as HTMLInputElement).value + '; '
		}
		allInputs += ' Info: ' + this.textarea.value + "; ";
		 //your code goes here }
		// dispatch( addTodo( this.input.value ) );
		/*var kvpairs = [];
		for ( var i = 0; i < this.form.elements.length; i++ ) {
   			var e = this.form.elements[i];
			    kvpairs.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.));
		}
		var queryString = kvpairs.join("&");*/
		console.log(allInputs);
		addTodo( this.input.value );
		
		this.input.value = '';
	}
	appendInput() {
		dispatch( addInput( ) );
	}
}

/**
 * Module.
 */
export {
	AddTodo as default,
	AddTodoProps,
	AddTodoState,
};
