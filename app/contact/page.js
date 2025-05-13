'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setStatus({
      message: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.',
      type: 'success'
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-amber-800">Contact</h1>
        <p className="text-xl text-amber-700">Neem contact met ons op</p>
      </section>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Naam
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Verstuur
          </button>
        </form>

        {status.message && (
          <div className={`mt-6 p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {status.message}
          </div>
        )}
      </div>

      <div className="bg-amber-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">Contactgegevens</h2>
        <div className="space-y-2">
          <p><strong>Adres:</strong> Bakkerstraat 123, 1234 AB Amsterdam</p>
          <p><strong>Telefoon:</strong> 020-1234567</p>
          <p><strong>E-mail:</strong> info@hetwittebollletje.nl</p>
        </div>
      </div>
    </div>
  )
} 