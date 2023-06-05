import Image from 'next/image'
import React from 'react'

type Props = {
	params: any
}

export default async function MovieDetail({ params }: Props) {
	const { id } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT11_PUBLIC_API_KEY}`,
		{ next: { revalidate: 10 } }
	)
	console.log(data, 'data')
	const res = await data.json()
	return (
		<div>
			<h1 className="font-bold text-4xl">MovieDetail : {params.id}</h1>
			<div className="my-5">
				<h2 className="text-4xl">{res.title}</h2>
				<h2 className="text-4xl">Runtime: {res.runtime}</h2>
				<Image
					width={800}
					height={800}
					className="my-12 w-full"
					src={imagePath + res.backdrop_path}
					alt={res.title}
					priority
				/>
				<p>{res.overview}</p>
			</div>
		</div>
	)
}
