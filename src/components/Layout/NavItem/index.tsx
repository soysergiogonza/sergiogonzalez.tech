import {CSSProperties} from 'react';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {clsx} from 'clsx';

interface Props {
	name: string,
	url: string,
	style?: CSSProperties;
}

export const NavItem = ({name, url}: Props) => {
	const pathname = usePathname() === url;
	
	return (
		<Link href={url}
		      className={clsx(
			      'relative block px-6 py-2 transition mb-1 mt-1  rounded-full',
			      pathname
				      ? 'text-amber-600 dark:text-amber-50 bg-orange-600 rounded-full '
				      : 'hover:text-orange-600 dark:hover:text-amber-600'
		      )}
		>
			<button>
				{name}
			</button>
		</Link>
	);
};