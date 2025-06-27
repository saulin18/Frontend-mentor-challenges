import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    ...props 
}: ButtonProps) {
    const baseClasses = "flex items-center gap-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    
    const variantClasses = {
        primary: "bg-white dark:bg-blue-900 text-grey-950 dark:text-white hover:bg-grey-50 dark:hover:bg-blue-800 shadow-md hover:shadow-lg",
        secondary: "bg-grey-200 dark:bg-blue-800 text-grey-950 dark:text-white hover:bg-grey-300 dark:hover:bg-blue-700",
        ghost: "bg-transparent text-grey-950 dark:text-white hover:bg-grey-100 dark:hover:bg-blue-800"
    }
    
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    }
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
        <button 
            className={combinedClasses}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button 