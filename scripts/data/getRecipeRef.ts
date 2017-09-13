import {database} from 'firebase/app';


function getRecipeRef( uid?: string ): database.Reference | null
{
	if ( !uid )
	{
		return null;
	}
	
	
	return database().ref( `/recipes/${uid}` );
}

/**
 * Module.
 */
export {
	getRecipeRef as default,
};
