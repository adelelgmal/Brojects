import { clearToken } from "@/features/auth/server/auth.actions";
import { setAuthInfo } from "@/features/auth/store/auth.slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


export default  function useLogout() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
const router = useRouter();


 async function logout() {

        await clearToken();
        dispatch(setAuthInfo({
            isAuthenticated: false,
            userInfo: null
        }));

        router.push('/login');
        router.refresh();
    }

    return { logout };
    
 }

