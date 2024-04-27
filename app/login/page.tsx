import GenericForm from "../components/ui/FormInput/genericForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GoogleIcon from "@/public/google.png"
import Image from "next/image" 

const fields = [
    {type: "email", name: "email", required: true, label: "Email", autoComplete: "email"},
    {type: "date", name: "date", required: true, label: "Date"},
    {type: "text", name: "favorite_color", required: false, label: "Favorite color"},
]


const Login = () => {
    
    return (
        <div className="h-screen w-full flex justify-center items-center">
            {/* <GenericForm fields={fields}/> */}
            <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semi-bold text-[#101928]">Log In</h1>
        <p className="text-[#667185] dark:text-gray-400">Enter your credentials to access your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div>
            <div>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <div>
                <p>Forget Password</p>
            </div>
            
        </div>
        <Button className="w-full bg-[#099137] py-4" type="submit">
          Log into Account
        </Button>
        <div className="before:absolute text-[#667185] py-2 relative before:top-1/2 flex w-full justify-center items-center before:left-0 before:h-[1px] before:w-[45%] before:bg-[#F0F2F5] after:absolute after:top-1/2 after:right-0 after:h-[1px] after:w-[45%] after:bg-[#F0F2F5]">
            or
        </div>
            <Button className="w-full py-4 flex items-center gap-3" variant="outline">
            <Image src={GoogleIcon} width={20} height={20} alt="Google Icon"/>
            <span>Sign in with Google</span> 
        </Button>
        
       
      </div>
    </div>
        </div>
    )
}
export default Login