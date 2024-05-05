/* eslint-disable @typescript-eslint/no-explicit-any */
interface MutationSettings<Params = void, Func = unknown> {
	config?: ApiRequestConfig
	options?: import('@tanstack/react-query').UseMutationOptions<
		Awaited<ReturnType<Func>>,
		any,
		Params,
		any
	>
}

interface QuerySettings<Func = unknown> {
	config?: ApiRequestConfig
	options?: Omit<
		import('@tanstack/react-query').UseQueryOptions<
			Awaited<ReturnType<Func>>,
			any,
			Awaited<ReturnType<Func>>,
			any
		>,
		'queryKey'
	>
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined
	? { config?: ApiRequestConfig }
	: { params?: Params; config?: ApiRequestConfig }

interface BaseResponse {
	message: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

interface FAQItem {
	question: string
	answer: string
}

interface ValueOption {
	value: string
	label: string
}
