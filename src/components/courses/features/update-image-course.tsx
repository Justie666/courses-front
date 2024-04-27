import { ImageIcon } from 'lucide-react'

import { useUpdateImageCourseMutation } from '@/shared/api'
import { Button, Input, Label } from '@/shared/ui'

interface UpdateImageCourseProps {
	courseId: string
}

export const UpdateImageCourse = ({ courseId }: UpdateImageCourseProps) => {
	const { mutate: updateImageCourse } = useUpdateImageCourseMutation()

	const handleUpdateImageCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
		const image = e.target?.files?.[0]
		if (image) {
			e.target.value = ''
			updateImageCourse({
				params: { id: courseId, image: image },
				config: {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			})
		}
	}

	return (
		<Button size='icon' variant='outline'>
			<Input
				type='file'
				className='hidden'
				id={`image-update-${courseId}`}
				accept='image/*'
				onInput={handleUpdateImageCourse}
			/>
			<Label htmlFor={`image-update-${courseId}`}>
				<ImageIcon />
			</Label>
		</Button>
	)
}
