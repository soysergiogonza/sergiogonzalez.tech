import {pages} from '~/data/routes';
import {NavItem} from '~/components/Layout/NavItem';


export const DesktopNavigation = () => {
	return (
		<nav className="pointer-events-auto hidden md:block">
			<ul
				className="flex rounded-full bg-white/90 px-1 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
				{
					pages.map(({url, name}) => {
						return (
							<nav key={name}>
								<ul
									className="flex rounded-full font-medium px-1">
									<NavItem url={url} name={name}/>
								
								</ul>
							</nav>
						);
					})
				}
			</ul>
		</nav>
	);
};
