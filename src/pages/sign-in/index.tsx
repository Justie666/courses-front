import { SignInForm, SignUpForm } from '@/components'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/ui'

export const SignInPage = () => {
	return (
		<div className='container'>
			<Tabs defaultValue='sign-in' className='mx-auto max-w-[500px]'>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='sign-in'>Авторизация</TabsTrigger>
					<TabsTrigger value='sign-up'>Регистрация</TabsTrigger>
				</TabsList>
				<TabsContent value='sign-in'>
					<Card>
						<CardHeader>
							<CardTitle>Авторизация</CardTitle>
							<CardDescription>
								Введите email и пароль чтобы авторизоваться
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<SignInForm />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value='sign-up'>
					<Card>
						<CardHeader>
							<CardTitle>Регистрация</CardTitle>
							<CardDescription>
								Введи все данные чтобы зарегистрироваться
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<SignUpForm />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
