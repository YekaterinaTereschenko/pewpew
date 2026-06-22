import { useState, useEffect } from 'react'

export function usePageLoading() {
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        if (document.readyState === 'complete') {
            setIsPending(false)
            return
        }

        const handleLoad = () => setIsPending(false)
        window.addEventListener('load', handleLoad)

        return () => window.removeEventListener('load', handleLoad)
    }, [])

    return { isPending }
}