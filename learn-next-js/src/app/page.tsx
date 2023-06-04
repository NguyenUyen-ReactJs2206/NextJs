import Image from 'next/image'

export default async function Home() {
	const key = process.env.NEXT11_PUBLIC_API_KEY
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
	const data = await fetch(url)
	const res = await data.json()
	const delay = (time: number) => {
		return new Promise((resolve) => {
			setTimeout(resolve, time)
		})
	}
	await delay(1000)
	return (
		<div>
			<h1 className="font-bold">Home</h1>
			<ul>
				{res.results.map((movie: any) => {
					return <li key={movie.id}>{movie.title}</li>
				})}
			</ul>
		</div>
	)
}
