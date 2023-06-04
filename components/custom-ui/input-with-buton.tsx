import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="mx-auto flex max-w-lg items-center space-x-2">
      <Input type="text" placeholder="Cari buku" />
      <Button className="w-36">Cari buku</Button>
    </div>
  )
}
