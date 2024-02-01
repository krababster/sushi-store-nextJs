import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: '400',
	subsets: ['latin']
})

export default function Home() {
	return (
		<div className={roboto.className}>
			<h1>Home page</h1>
		</div>
	)
}
