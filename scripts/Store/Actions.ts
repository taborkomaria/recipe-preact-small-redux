import {Action as BaseAction} from 'small-redux';

/**
 * Возможные действия.
 */
// tslint:disable-next-line:variable-name
const Actions = {
	// ADD_TODO: 'ADD_TODO' as 'ADD_TODO',
	// TOGGLE_TODO: 'TOGGLE_TODO' as 'TOGGLE_TODO',
	SET_TODOS: 'SET_TODOS' as 'SET_TODOS',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER' as 'SET_VISIBILITY_FILTER',
	SET_USER: 'SET_USER' as 'SET_USER',
	ADD_INPUT: 'ADD_INPUT' as 'ADD_INPUT',
	SET_RECIPES: 'SET_RECIPES' as 'SET_RECIPES',
	SET_INGR: 'SET_INGR' as 'SET_INGR',
	ADD_INGR: 'ADD_INGR' as 'ADD_INGR',
	SET_RECIPE: 'SET_RECIPE' as 'SET_RECIPE',
	DEL_INGR: 'DEL_INGR' as 'DEL_INGR',
	//SET_IMG: 'SET_IMG' as 'SET_IMG',
};

/**
 * Объект действия.
 */
interface Action extends BaseAction
{
	/** Тип */
	type: keyof typeof Actions;
	/** Данные */
	payload: any;
}

/**
 * Module.
 */
export {
	Actions as default,
	Action,
};
