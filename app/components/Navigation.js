'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navigation() {
    const pathname = usePathname()
    
    return (
        <nav className="bg-amber-700 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-bold text-xl">
                            Het witte bolletje
                        </Link>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link 
                                href="/" 
                                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors
                                    ${pathname === '/' ? 'bg-amber-800' : ''}`}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/assortiment" 
                                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors
                                    ${pathname === '/assortiment' ? 'bg-amber-800' : ''}`}
                            >
                                Assortiment
                            </Link>
                            <Link 
                                href="/contact" 
                                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors
                                    ${pathname === '/contact' ? 'bg-amber-800' : ''}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button p-2 rounded-md hover:bg-amber-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link 
                        href="/" 
                        className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-600 transition-colors
                            ${pathname === '/' ? 'bg-amber-800' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/assortiment" 
                        className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-600 transition-colors
                            ${pathname === '/assortiment' ? 'bg-amber-800' : ''}`}
                    >
                        Assortiment
                    </Link>
                    <Link 
                        href="/contact" 
                        className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-600 transition-colors
                            ${pathname === '/contact' ? 'bg-amber-800' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation 