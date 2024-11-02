
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-dark text-white">
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 border rounded-sm"></div>
        <span className="text-lg font-semibold text-black">Second Brain</span>
      </div>
      <Button variant="default">Login</Button>
    </div>
  )
}