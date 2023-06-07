import { selectCurrentToken } from "@/redux/features/auth/auth.slice"
import jwtDecode from "jwt-decode"
import { useSelector } from "react-redux"

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  const decoded = jwtDecode(token as string)
  try {
    if (decoded) {
      return true
    }
  } catch (error) {
    return false
  }
}

export default useAuth
