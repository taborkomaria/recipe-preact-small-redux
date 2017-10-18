import {StateRecipe, Ingredient} from '../Store/State';
import getRecipeRef from './getRecipeRef';

//import {User} from 'firebase/app';

function editRecipe( id:string, title:string, descriptionPreview:string, 
	ingredients: Ingredient[], description:string, servings:string, time:string): void
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
				descriptionPreview,
				ingredients,
				description,
				servings,
				time
			} as Partial<StateRecipe>,
		);
}

/**
 * Module.
 */
export {
	editRecipe as default,
};
