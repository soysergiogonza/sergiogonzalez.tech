import Link from 'next/link';

const Header = () => {
	return (
		<header className="container mx-auto flex sm:justify-center space-x-4 border-amber-400">
			{[
				['Home', '/'],
				['Team', '/team'],
				['Projects', '/projects'],
				['Reports', '/reports'],
			].map(([title, url]) => (
				<Link href={url} key={title}
				      className="border-amber-400 border rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
			))}
		</header>
	);
};

export {Header};