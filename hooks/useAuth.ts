import { selectCurrentToken } from "@/redux/features/auth/auth.slice"
import jwtDecode from "jwt-decode"
import { useSelector } from "react-redux"

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  if (token) {
    try {
      const decoded = jwtDecode(token as string)
      if (decoded) {
        return true
      }
    } catch (error) {
      return false
    }
  }
  return false
}

export default useAuth
