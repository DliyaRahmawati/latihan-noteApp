import Note from "./Note"
import Login from "./pages/Login"
import { BrowserRouter, Route,Navigate, Routes } from "react-router-dom"
import Layout from "./Layout"
import Register from "./pages/Register"
import { useAuth } from './context/Auth'

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    // const [token,setToken] = useState(null);

    // const handleLogin = (tokens) => {
    //     setToken(tokens)
    // }
    
    // const handleLogout = () => {
    //     setToken(null)
    //     localStorage.removeItem('token');
    // }

    // useEffect(() => {
    //     const tokens = getToken()
    //     setToken(tokens);
    // },[])

    return (
        <BrowserRouter>
            <Routes>
            <Route element={<Layout />}>
                    {isLoggedin ? (
                        <Route>
                            <Route path={"/Note"} element={<Note />} />, 
                            <Route path="/Login" element={<Navigate to = "/Note" />} />
                        </Route>
                    ) : (
                        <>
                        <Route path={"/Register"} element={<Register />} />
                        <Route path={"/Login"} element={<Login />} />
                        <Route path="*" element={<Navigate to = "/Login"/>}/>
                        </>
                    )}
                </Route>
                {/* {token !== null ? 
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                : <Route path={"/Note"} element={<h1 className=" text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"}/>}/> */}
            </Routes>

        </BrowserRouter>

    )
}

export default App