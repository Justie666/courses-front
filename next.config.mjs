/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4200',
				pathname: '/api/**'
			}
		],
		formats: ['image/avif', 'image/webp']
	},
	env: {
		source: '/.env'
	}
}

export default nextConfig
