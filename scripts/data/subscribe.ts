import * as Firebase from 'firebase/app';
import {StateTodo, StateRecipe} from '../Store/State';
import {setTodos, setUser, setRecipes} from '../Store/creators';
import {dispatch} from '../Store/index';
import getTodosRef from './getTodosRef';
import getRecipesRef from './getRecipesRef';

function subscribe(): void
{
	Firebase.auth().onAuthStateChanged(
		( user: Firebase.User | null ) =>
		{
			if ( user )
			{
				subscribeToTodos( user.uid );
				subscribeToRecipes(  );
			}
			else
			{
				unsubscribeFromTodos();
				unsubscribeFromRecipes();
			}
			
			dispatch( setUser( user ) );
		}
	);
}

function subscribeToTodos( uid: string ): void
{
	const todosRef = getTodosRef( uid );
	
	todosRef.on(
		'value',
		( snapshot ) =>
		{
			const value = (
				snapshot
				? snapshot.val()
				: null
			);
			
			if ( !value )
			{
				dispatch( setTodos( [] ) );
				return;
			}
			
			const keys = Object.keys( value );
			const todos: StateTodo[] = [];
			
			for ( const key of keys )
			{
				const {text, completed} = value[key] as StateTodo;
				
				todos.push(
					{
						id: key,
						text,
						completed,
					},
				);
			}
			
			dispatch( setTodos( todos ) );
		},
	);
}

function subscribeToRecipes(): void
{
	const recipesRef = getRecipesRef(  );
	
	if(recipesRef === null){
		return
	}
	recipesRef.on(
		'value',
		( snapshot ) =>
		{
			const value = (
				snapshot
				? snapshot.val()
				: null
			);

			console.log(value);
			
			if ( !value )
			{
				dispatch( setRecipes( [] ) );
				return;
			}
			
			const keys = Object.keys( value );
			const recipes: StateRecipe[] = [];
			
			for ( const key of keys )
			{
				const {description, ingredients, title, author,servings,imagePreviewUrl, descriptionPreview,time} = value[key] as StateRecipe;
				
				recipes.push(
					{
						id: key,
						description, ingredients, title, author, servings,imagePreviewUrl,descriptionPreview,time
					},
				);
			}

			console.log(recipes);
			
			dispatch( setRecipes( recipes ) );
		},
	);
}

function unsubscribeFromTodos(): void
{
	const todosRef = getTodosRef();
	
	todosRef && todosRef.off();
}

function unsubscribeFromRecipes(): void
{
	const recipesRef = getRecipesRef();
	
	recipesRef && recipesRef.off();
}

/**
 * Module.
 */
export {
	subscribe as default,
};
