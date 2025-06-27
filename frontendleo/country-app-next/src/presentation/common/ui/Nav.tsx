'use client'
import Link from 'next/link'
import { MoonIcon } from 'lucide-react'
import { useTheme } from '../hooks/use-theme'
import Button from './Button'

function Nav() {
    const { toggleTheme } = useTheme();

    const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        toggleTheme();
    };

    return (
        <nav className="flex justify-between items-center border-b border-gray-200 dark:border-blue-800 " style={{ padding: '1rem', paddingInline: '2rem' }}>
            <Link href="/">
                <h1 className="text-2xl font-extrabold text-grey-950 dark:text-white">Where in the world?</h1>
            </Link>
            <Button
                onClick={handleThemeToggle}
                variant="primary"
                size="lg"
            >
                Dark Mode <MoonIcon className="w-4 h-4" /> 
            </Button>
        </nav>
    )
}

export default Nav;