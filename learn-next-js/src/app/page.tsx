import Movie from './movie'
import React from 'react'

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
			<h1 className=" grid gap-2 grid-cols-fluid justify-center items-center">
				{res.results.map((movie: any) => {
					return (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							poster_path={movie.poster_path}
							release_date={movie.release_date}
						/>
					)
				})}
			</h1>
		</div>
	)
}
