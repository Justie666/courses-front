export const Video = () => {
	return (
		<video width='600' height='400' controls preload='auto'>
			<source
				src='http://localhost:4200/api/uploads/video.mp4'
				type='video/mp4'
			/>
		</video>
	)
}
