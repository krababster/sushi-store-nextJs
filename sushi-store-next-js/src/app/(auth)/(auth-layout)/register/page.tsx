'use client'
import { FormEvent, useState } from 'react'
import styles from './register.module.css'

export default function Register() {
	const [loginValue, setLoginValue] = useState<string>('')
	const [emailValue, setEmailValue] = useState<string>('')
	const [passwordValue, setPasswordValue] = useState<string>('')
	const [rePasswordValue, setRePasswordValue] = useState<string>('')

	const submitHandler = (e: FormEvent) => {
		e.preventDefault()
		console.log(
			`Login - ${loginValue}, Email - ${emailValue}, Password - ${passwordValue}`
		)
	}
	return (
		<div>
			<form className={styles.formContainer} onSubmit={submitHandler}>
				<label>
					Логін
					<input
						type="text"
						placeholder="Login"
						value={loginValue}
						onChange={(e) => setLoginValue(e.target.value)}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						placeholder="Email"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
				</label>
				<label>
					Пароль
					<input
						type="password"
						placeholder="Password"
						value={passwordValue}
						onChange={(e) => setPasswordValue(e.target.value)}
					/>
				</label>
				<label>
					Повторити пароль
					<input
						type="password"
						placeholder="Return password"
						value={rePasswordValue}
						onChange={(e) => setRePasswordValue(e.target.value)}
					/>
				</label>
				<button className={styles.regBtn}>Реєстрація</button>
			</form>
		</div>
	)
}
