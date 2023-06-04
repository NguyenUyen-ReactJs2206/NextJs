import { NextRouter, useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailPageProps {
	params: any
}

export default function PostId({ params }: PostDetailPageProps) {
	return (
		<div>
			<h1>Post Detail Page</h1>
			<p>Query : {params.postId}</p>
		</div>
	)
}
