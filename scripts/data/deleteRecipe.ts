//import {StateRecipe, Ingredient} from '../Store/State';
import getRecipeRef from './getRecipeRef';

//import {User} from 'firebase/app';

function deleteRecipe( id:string): void
{
	
	const recipeRef = getRecipeRef(id);
	
	if ( !recipeRef )
	{
		return;
	}


	
	recipeRef.remove();
}

/**
 * Module.
 */
export {
	deleteRecipe as default,
};
