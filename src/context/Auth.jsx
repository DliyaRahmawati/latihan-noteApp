import { createContext, useContext, useState } from "react"
import { handleLogin } from "../api"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => {},
    doLogout: () => {}
}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom hook
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)

    // function
    const doLogin = async (email, password) => {
        // memanggil api dengan data email & password
        console.log("akan melakukan login dengan", email, password)
        // memanggil api
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)

        // jika berhasil maka setIsLoggedin -> true
        // simpan token ke dalam local storage

        // jika gagal tampilkan peringatan
        console.log('testing')
        setIsLoggedin(true)
    }

    const doLogout = () => {
        setIsLoggedin(false)
    }

    // return provider
    return (
        <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
            {children}
        </AuthContext.Provider>  
    )
}

//export provider & hook
export {AuthProvider, useAuth}