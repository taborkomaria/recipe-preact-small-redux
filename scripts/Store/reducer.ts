import {User} from 'firebase/app';
import {combineReducers} from 'small-redux';
import Actions, {Action} from './Actions';
import State, {StateTodo, StateVisibilityFilter, Ingredient, StateRecipe} from './State';

/**
 * Initial app state.
 */
const initialState: State = {
	todos: [],
	visibilityFilter: 'SHOW_RECIPES_LIST',
	user: null,
	ingredients: [],
	recipes:[],
	recipeShow:null, 
};

function todos(
	state: StateTodo[] = initialState.todos,
	action: Action,
): StateTodo[]
{
	switch ( action.type )
	{
		/*case Actions.ADD_TODO:
			return [
				...state,
				action.payload,
			];
		
		case Actions.TOGGLE_TODO:
			return state.map(
				( todo: StateTodo ) => (
					( todo.id === action.payload.id )
					? {
						...todo,
						completed: !todo.completed,
					}
					: todo
				),
			);*/
		
		case Actions.SET_TODOS:
			return action.payload.todos;
		
		default:
			return state;
	}
}

function visibilityFilter(
	state: StateVisibilityFilter = initialState.visibilityFilter,
	action: Action,
): StateVisibilityFilter
{
	switch ( action.type )
	{
		case Actions.SET_VISIBILITY_FILTER:
			return action.payload.visibilityFilter;
		
		default:
			return state;
	}
}

function user(
	state: User | null = initialState.user,
	action: Action,
): User | null
{
	switch ( action.type )
	{
		case Actions.SET_USER:
			return action.payload.user;
		
		default:
			return state;
	}
}

function ingredients(
	state: Ingredient[] = initialState.ingredients,
	action: Action,
): Ingredient[]
{
	switch ( action.type )
	{
		case Actions.SET_INGR:
			return action.payload.ingredients;
		case Actions.ADD_INGR:
			return [
					...state,
					action.payload,
				];
		case Actions.DEL_INGR:
			return [
					...state.slice(0, action.payload.index),
					...state.slice(action.payload.index+1)
				];
		default:
			return state;
	}
}

/*function imagePreviewUrl(
	state: any = initialState.imagePreviewUrl,
	action: Action,
): any
{
	switch ( action.type )
	{
		case Actions.SET_IMG:
			return action.payload.img;
		default:
			return state;
	}
}*/
function recipeShow(
	state: StateRecipe | null= initialState.recipeShow,
	action: Action,
): StateRecipe | null
{
	switch ( action.type )
	{
		case Actions.SET_RECIPE:
			return action.payload.recipeShow;
		default:
			return state;
	}
}
function recipes(
	state: StateRecipe[] = initialState.recipes,
	action: Action,
): StateRecipe[]
{
	switch ( action.type )
	{
		case Actions.SET_RECIPES:
			return action.payload.recipes;
		default:
			return state;
	}
}

const reducer = combineReducers<State, Action>(
	{
		todos,
		visibilityFilter,
		user,
		ingredients,
		recipes,
		recipeShow
		
	},
);

/**
 * Module.
 */
export {
	reducer as default,
};
