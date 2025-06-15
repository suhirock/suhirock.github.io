type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

/**
 * 
 * @param date 
 * @param dateStyle 
 * @param locales 
 * @returns 
 */
export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'ja') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'))
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}

/**
 * @param date
 * @returns 
 */
export function getYear(date: string) {
    const parseDate = new Date(date.replaceAll('-', '/'))
	return parseDate.getFullYear()
}

/**
 * @param date
 * @returns 
 */
export function getMonth(date: string) {
    const parseDate = new Date(date.replaceAll('-', '/'))
	return String(parseDate.getMonth() + 1).padStart(2, '0')
}

/**
 * @param date 
 * @returns 
 */
export function getDate(date: string) {
    const parseDate = new Date(date.replaceAll('-', '/'))
	return String(parseDate.getDate()).padStart(2, '0')
}