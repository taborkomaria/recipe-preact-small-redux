import {User} from 'firebase/app';

/**
 * Состояние приложения.
 */
interface State
{
	/** Задачи */
	todos: StateTodo[];
	/** Фильтр видимости */
	visibilityFilter: StateVisibilityFilter;
	/** Данные пользователя */
	user: User | null;
	//ingredients: StateIngredient[];
	ingredients:Ingredient[];
	recipeShow:StateRecipe ;
	recipes: StateRecipe[];
	//imagePreviewUrl:any;
}



interface StateUser
{
	uid: string;
	name: string;
}
/**
 * Задача.
 */
interface StateTodo
{
	/** Идентификатор */
	// id: number;
	id: string;
	/** Текст задачи */
	text: string;
	/** Завершена? */
	completed: boolean;
}

/**
 * Задача.
 */
/*interface StateIngredient
{
	/** Идентификатор */
		// id: number;
	/*id: number;
	/** Текст задачи */
	/*text: string;

}*/

interface Ingredient
{
	count:string;
	reCount:string;
	name:string;
	units:string;
}
interface StateRecipe
{
	id:string;
	author:StateUser;
	title:string;
	ingredients:Ingredient[];
	description:string;
	descriptionPreview:string;
	servings: string;
	imagePreviewUrl:any;
}
/**
 * Фильтр видимости.
 */
type StateVisibilityFilter = 'SHOW_FORM' | 'SHOW_RECIPE' | 'SHOW_EDIT' | 'SHOW_RECIPES_LIST';

/**
 * Module.
 */
export {
	State as default,
	StateTodo,
	StateVisibilityFilter,
	StateRecipe,
	Ingredient,
	StateUser
};
