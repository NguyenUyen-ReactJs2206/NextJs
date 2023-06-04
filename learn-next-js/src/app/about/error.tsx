'use client'
import * as React from 'react'

export interface Props {
	error: any
	reset: any
}

export default function Error({ error, reset }: Props) {
	return (
		<div className="w-full text-center">
			<div className="text-2xl text-red-500">ERROR DUE TO: {error.message}</div>
		</div>
	)
}
