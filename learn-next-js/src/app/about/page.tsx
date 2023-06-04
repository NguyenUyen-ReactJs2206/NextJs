import Image from 'next/image'
import * as React from 'react'

export interface AboutPageProps {}

export default async function AboutPage(props: AboutPageProps) {
	const result = await fetch(
		'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs'
	)
	const data = await result.json()
	const delay = (time: number) => {
		return new Promise((resolve) => {
			setTimeout(resolve, time)
		})
	}
	await delay(1000)
	return (
		<div>
			ABOUT-PAGE
			{/* <span>Debug: {JSON.stringify(data)} </span> */}
			<ul>
				{data.youtubes.map((el: any) => {
					return <li key={el.id}>{el.title}</li>
				})}
			</ul>
		</div>
	)
}
// function delay(time: number) {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, time)
// 	})
// }
