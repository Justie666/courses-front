import { VideoHTMLAttributes } from 'react'

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export const Video = ({ ...rest }: VideoProps) => {
	return (
		<video width='600' height='400' {...rest} controls preload='auto'>
			<source
				src='http://localhost:4200/api/uploads/video.mp4'
				type='video/mp4'
			/>
		</video>
	)
}
