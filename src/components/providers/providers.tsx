'use client'
import { Provider } from 'react-redux'
import { PreloadedState, creatStore, AppStore } from '../../features/auth/store/store'
import { ReactNode, useRef } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'



type ProvidersProps = {
    children: ReactNode;
    preloadedState: PreloadedState
}


export default function Providers({ children, preloadedState }: ProvidersProps) {


    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = creatStore(preloadedState)
    }

    return (
        <Provider store={storeRef.current}>
            {children}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Provider>
    )
}