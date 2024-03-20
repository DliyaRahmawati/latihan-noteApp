import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./context/Auth";

export default function Layout(){
    const {isLoggedin, doLogout} = useAuth ()

    const handleClick = async () => {
        doLogout()
    }
    // INI CONTOH PERUBAHAN //
    return(
        <>
        <div className="flex justify-around gap-2 bg-blue-200 h-[70px] py-4 text-align text-2xl ">
            <h1>Vote</h1>

            { isLoggedin ? (
                <span className="font-bold">Udah Login</span>
            ) : (
                <span className="font-bold">Belum Login</span>
            ) }
            
            { isLoggedin ? <>
                    <Link to={"/Note"}><p className="text-black hover:text-slate-400 font-bold text-[20px]">Notes</p></Link>
                    <Link onClick={() => doLogout()}><span className="text-black font-sans hover:text-slate-300">Logout</span></Link> 
                </> : <>
                <Link to={'/Register'}><p className="text-black font-sans hover:text-slate-400">Registrasi</p></Link>
                <Link to={'/Login'} ><p className="text-black font-sans hover:text-slate-400">Login</p></Link>
                </>}

            {/* <nav className="flex gap-10 item-center">
            </nav> */}
        </div>
        <Outlet/>
        </>
    )
}