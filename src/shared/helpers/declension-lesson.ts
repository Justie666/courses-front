export const declensionLesson = (number: number = 0) => {
	const remainder = Math.abs(number) % 100
	const tens = Math.floor(number / 100) % 10

	if (remainder === 1 && tens !== 1) {
		return 'урок' // one lesson
	} else if (remainder >= 2 && remainder <= 4 && tens !== 1) {
		return 'урока' // two lessons, three lessons, four lessons
	} else {
		return 'уроков' // five lessons, eleven lessons, one hundred twenty lessons
	}
}
