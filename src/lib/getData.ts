export type TChartData = {
	'chart-area': {
		data: Array<{
			month: string
			desktop: number
			mobile: number
		}>
	}
	'chart-bar': {
		data: Array<{
			month: string
			desktop: number
			mobile: number
		}>
	}
	'chart-pie': {
		data: Array<{
			browser: string
			visitors: number
			fill: string
		}>
	}
	'chart-radar-grid-filled': {
		data: Array<{
			month: string
			desktop: number
		}>
	}
}

export const getChartData = async (): Promise<TChartData> => {
	try {
		// Using dynamic import for JSON
		const chartData = await import('@/data/charts.json')
		return chartData.default
	} catch (error) {
		console.error('Error loading chart:', error)
		throw error
	}
}

export const getChartDataBykey = async (key: keyof TChartData) => {
	const data = await getChartData()
	return data[key]
}
