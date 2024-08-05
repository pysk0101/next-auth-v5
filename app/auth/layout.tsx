export default function AuthLayout({ children } : {children : React.ReactNode}) {
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-800">
            {children}
        </div>
    )
}