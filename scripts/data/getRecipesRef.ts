import {database} from 'firebase/app';

//function getTodosRef( uid: string ): database.Reference;
function getRecipesRef(): database.Reference | null {
	return database().ref( `/recipes/` );
}
/*function getTodosRef( uid?: string ): database.Reference | null
{
	if ( !uid )
	{
		const stateUser = getState().user;
		
		if ( !stateUser )
		{
			return null;
		}
		
		uid = stateUser.uid;
	}
	
	
	return database().ref( `/users/${uid}/todos` );
}*/

/**
 * Module.
 */
export {
	getRecipesRef as default,
};
