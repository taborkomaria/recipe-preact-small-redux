import {User} from 'firebase/app';
import Actions, {Action} from './Actions';
 //import {getState} from './index';
import {StateTodo, StateVisibilityFilter, StateRecipe, Ingredient} from './State';

/*let nextTodoId = getState().todos.length;

function addTodo( text: string ): Action
{
	return {
		type: Actions.ADD_TODO,
		payload: {
			id: nextTodoId++,
			text,
			completed: false,
		} as StateTodo,
	};
}*/

/*function toggleTodo( id: number ): Action
{
	return {
		type: Actions.TOGGLE_TODO,
		payload: {id},
	};
}*/
//let nextIngredientId = getState().ingredients.length;
/*function addInput( text: string ): Action
{
	return {
		type: Actions.ADD_INPUT,
		payload: {
			id: nextIngredientId++,
			text,
		} as StateIngredient,
	};
}*/
function setVisibilityFilter( visibilityFilter: StateVisibilityFilter ): Action
{
	return {
		type: Actions.SET_VISIBILITY_FILTER,
		payload: {visibilityFilter},
	};
}

function setTodos( todos: StateTodo[] ): Action
{
	return {
		type: Actions.SET_TODOS,
		payload: {todos},
	};
}

function setRecipes( recipes: StateRecipe[] ): Action
{
	return {
		type: Actions.SET_RECIPES,
		payload: {recipes},
	};
}

function setUser( user: User | null ): Action
{
	return {
		type: Actions.SET_USER,
		payload: {user},
	};
}

function setIngr( ingredients: Ingredient[] ): Action
{
	return {
		type: Actions.SET_INGR,
		payload: {ingredients},
	};
}
/*function setImg( imagePreviewUrl: any ): Action
{
	return {
		type: Actions.SET_IMG,
		payload: {imagePreviewUrl},
	};
}
*/
function addInput( ): Action
{
	return {
		type: Actions.ADD_INGR,
		payload: {
			name: ' ',
			count: ' ',
			reCount: ' ',
			units:' '
		} as Ingredient,
	};
}

function delIngr( index:number ): Action
{
	return {
		type: Actions.DEL_INGR,
		payload: {
			index
		},
	};
}

function setRecipe( recipeShow: StateRecipe ): Action
{
	return {
		type: Actions.SET_RECIPE,
		payload: {recipeShow},
	};
}


/**
 * Module.
 */
export {
	// addTodo,
	// toggleTodo,
	setVisibilityFilter,
	setTodos,
	setUser,
	setRecipes,
	addInput,
	setIngr,
	setRecipe,
	delIngr,
	//setImg
};
