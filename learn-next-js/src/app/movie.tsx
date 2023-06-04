import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface MovieProps {
	key: string
	id: string
	title: string
	poster_path: string
	release_date: string
}

export default function Movie({ key, id, title, poster_path, release_date }: MovieProps) {
	const imagePath = 'https://image.tmdb.org/t/p/original'
	return (
		<div className="text-center">
			<b className="text-ellipsis overflow-hidden line-clamp-1"> {title}</b>
			<Link href={`/movie/${id}`} className="justify-center grid">
				<Image src={imagePath + poster_path} width={200} height={100} alt={title} />
			</Link>
		</div>
	)
}
