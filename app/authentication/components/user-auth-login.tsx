"use client"

import * as React from "react"
import { useRouter } from "next/router"
import { setCurrentToken } from "@/redux/features/auth/auth.slice"
import { useLoginMutation } from "@/redux/features/auth/authApi.slice"
import { Loader2 } from "lucide-react"
import { useDispatch } from "react-redux"
import * as z from "zod"

import { cn } from "@/lib/utils"
import usePersist from "@/hooks/usePersist"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email minimal 2 karakter",
    })
    .max(50, {
      message: "Email maksimal 50 karakter",
    })
    .regex(/^\S+@\S+\.\S+$/, {
      message: "Format email tidak sesuai",
    }),
  password: z
    .string()
    .min(6, {
      message: "Pasword minimal 6 karakter",
    })
    .max(50, {
      message: "Pasword maksimal 50 karakter",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Format password harus mengandung huruf besar, huruf kecil, angka dan simbol @$!%*?&",
      }
    ),
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface LoginUserField {
  email: string
  password: string
}

export function UserAuthLogin({ className, ...props }: UserAuthFormProps) {
  async function onSubmit(event: React.SyntheticEvent) {}

  let [persist, setPersist] = usePersist()
  const router = useRouter()
  //const [form] = Form.useForm();
  const dispatch = useDispatch()
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()
  const onLogin = async (values: z.infer<typeof formSchema>) => {
    try {
      const authData = await login(values).unwrap()
      console.log(authData)
      if (authData) {
        dispatch(setCurrentToken(authData.accessToken))
        router.push("/")
        setPersist(true)
      }
    } catch (error) {
      console.log(Error)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}
