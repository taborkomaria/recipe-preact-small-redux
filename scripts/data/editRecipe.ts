import {StateRecipe, Ingredient} from '../Store/State';
import getRecipeRef from './getRecipeRef';

//import {User} from 'firebase/app';

function editRecipe( id:string, title:string, ingredients: Ingredient[], description:string, servings:string): void
{
	
	const recipeRef = getRecipeRef(id);
	
	if ( !recipeRef )
	{
		return;
	}


	
	recipeRef.update
		(
			{
				title,
				ingredients,
				description,
				servings
			} as Partial<StateRecipe>,
		);
}

/**
 * Module.
 */
export {
	editRecipe as default,
};
