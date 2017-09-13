import {h} from 'preact';

/**
 * Component Properties.
 */
interface LinkProps
{
	active: boolean;
	children?: JSX.Element[];
	onClick( event: Event ): void;
}

/**
 * Ссылка-переключатель.
 */
function Link(
	{active, children, onClick}: LinkProps,
): JSX.Element
{
	if ( active )
	{
		return <span>{children}</span>;
	}
	
	return (
		<a href="#"
			onClick={onClick}
		>
			{children}
		</a>
	);
}

/**
 * Module.
 */
export {
	Link as default,
	LinkProps,
};
