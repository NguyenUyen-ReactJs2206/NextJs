import * as React from 'react'

export interface AboutPageProps {}

export default async function AboutPage(props: AboutPageProps) {
	const result = await fetch(
		'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs'
	)
	const data = await result.json()
	console.log(data, 'ddddddd')
	return (
		<div>
			ABOUT-ERROR PAGE
			{/* <span>Debug: {JSON.stringify(data)} </span> */}
			<ul>
				{data.youtubes.map((el) => {
					return <li key={el.id}>{el.title}</li>
				})}
			</ul>
		</div>
	)
}
