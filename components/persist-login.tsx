"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { selectCurrentToken } from "@/redux/features/auth/auth.slice"
import { useRefreshMutation } from "@/redux/features/auth/authApi.slice"
import { Loader2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

import usePersist from "@/hooks/usePersist"

type Props = {
  children?: React.ReactNode
}

const PersistLogin = ({ children = null }: Props) => {
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const [trueSuccess, setTrueSuccess] = useState(false)
  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      console.log("verifying refresh token")
      try {
        await refresh("")
        setTrueSuccess(true)
      } catch (err) {
        console.error(err)
      }
    }
    if (!token && persist) verifyRefreshToken()

    // eslint-disable-next-line
  }, [])

  let content = <></>
  if (!persist) {
    // persist: no
    console.log("no persist")
    content = <>{children}</>
  } else if (isLoading) {
    //persist: yes, token: no
    console.log("loading")
    content = <Loader2 />
  } else if (isError) {
    //persist: yes, token: no
    console.log("error")
    content = (
      <p className="errmsg">
        Error, Please login
        <Link href="/authentication/login">Please login again</Link>.
      </p>
    )
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log("success")
    content = <>{children}</>
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log("token and uninit")
    console.log(isUninitialized)
    content = <>{children}</>
  }

  return content
}
export default PersistLogin
