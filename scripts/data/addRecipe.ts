import {StateRecipe, Ingredient} from '../Store/State';
import getRecipesRef from './getRecipesRef';

import {User} from 'firebase/app';

function addRecipe( title:string, ingredients: Ingredient[], description:string, 
author: User | null, servings:string, imagePreviewUrl:any,
descriptionPreview:string, time:string): void
{
	
	const recipesRef = getRecipesRef();
	
	if ( !recipesRef )
	{
		return;
	}


	console.log('ok');
	
	console.log(author);
		
	if ( !author )
	{
		return;
	}
		
	console.log(title);
	console.log(ingredients);
	console.log(description);
	console.log(author);

	
	
	recipesRef.push()
		.set(
			{
				author: {
					uid: author.uid,
					name: author.displayName
				},
				title,
				ingredients,
				description,
				servings,
				imagePreviewUrl,
				descriptionPreview,
				time
			} as Partial<StateRecipe>,
		);
}

/**
 * Module.
 */
export {
	addRecipe as default,
};
