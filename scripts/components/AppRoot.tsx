import {h} from 'preact';
//import AddRecipe from './AddRecipe';
import Auth from './Auth';
import ShowBlock from './ShowBlock';
import RecipesList from './RecipesList';

function TodoApp(): JSX.Element
{
	return (
		<div class="wrapper">
			
				<Auth />
				
			
			<ShowBlock />
		</div>
	);
}
//<AddRecipe />
/**
 * Корень приложения.
 */
// tslint:disable-next-line:variable-name
const AppRoot = <TodoApp />;

/**
 * Module.
 */
export {
	AppRoot as default,
	TodoApp,
};
