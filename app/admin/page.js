'use client'

import { useState } from 'react'

const initialPrices = {
	'Wit Brood': '€2,95',
	'Volkoren': '€3,25',
	'Zuurdesem': '€3,95',
	'Appelgebak': '€2,75',
	'Slagroomtaart': '€16,95',
	'Chocolade Muffins': '€2,50',
	'Boterkoekjes': '€4,95',
	'Gevulde Koeken': '€2,25',
	'Chocolate Chip Cookies': '€1,95',
}

export default function AdminPage () {
	const [loggedIn, setLoggedIn] = useState(false)
	const [form, setForm] = useState({ username: '', password: '' })
	const [prices, setPrices] = useState(initialPrices)
	const [message, setMessage] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		if (form.username === 'admin' && form.password === 'bakkerij') {
			setLoggedIn(true)
			setMessage('')
		} else {
			setMessage('Ongeldige inloggegevens')
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handlePriceChange = (e, product) => {
		const { value } = e.target
		setPrices((prev) => ({ ...prev, [product]: value }))
	}

	const handleSave = (e) => {
		e.preventDefault()
		setMessage('Prijzen opgeslagen! (Alleen lokaal)')
	}

	if (!loggedIn) {
		return (
			<div className="max-w-sm mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
				<h1 className="text-2xl font-bold mb-6 text-amber-800">Admin Login</h1>
				<form onSubmit={handleLogin} className="space-y-4">
					<input
						type="text"
						name="username"
						placeholder="Gebruikersnaam"
						value={form.username}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Wachtwoord"
						value={form.password}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
						required
					/>
					<button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">Inloggen</button>
				</form>
				{message && <p className="mt-4 text-red-600">{message}</p>}
			</div>
		)
	}

	return (
		<div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-amber-800">Prijzen aanpassen</h1>
			<form onSubmit={handleSave} className="space-y-4">
				{Object.entries(prices).map(([product, price]) => (
					<div key={product} className="flex items-center justify-between">
						<label className="font-medium text-gray-700 w-1/2">{product}</label>
						<input
							type="text"
							value={price}
							onChange={e => handlePriceChange(e, product)}
							className="border rounded px-2 py-1 w-32 text-right"
						/>
					</div>
				))}
				<button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">Opslaan</button>
			</form>
			{message && <p className="mt-4 text-green-700">{message}</p>}
		</div>
	)
} 