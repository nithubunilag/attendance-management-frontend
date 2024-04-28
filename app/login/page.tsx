"use client"
import GenericForm from "../components/ui/FormInput/genericForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GoogleIcon from "@/public/google.png"
import Image from "next/image" 
import { Logo } from "@/public/icons"
import { Select } from "@/components/ui/select"
import { Multiselect } from "@/components/multiselect"
import { MailIcon, EyeOff, EyeIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const fields = [
    {type: "email", name: "email", required: true, label: "Email", autoComplete: "email"},
    {type: "date", name: "date", required: true, label: "Date"},
    {type: "text", name: "favorite_color", required: false, label: "Favorite color"},
]


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({email: "", password: ""})
    
  const handleLogin = (e: any) => {
    e.preventDefault()
    // Logic for Api call
  }

  const handleGoogleSignUp = () => {
    // Logic for google sigup
  }
    return (
      <div>
        <header className="">
      <div className="py-4 mobile_lg:px-4 px-10 flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        
        <div className="block">
         <Multiselect/>
        </div>
      </div>
    </header>
    <form onSubmit={handleLogin} className="h-[calc(100vh-100px)] mobile_sm:px-4 w-full flex justify-center items-center">
            {/* <GenericForm fields={fields}/> */}
            <div className="mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semi-bold text-[#101928]">Log In</h1>
        <p className="text-[#667185] text-[13px] dark:text-gray-400">Enter your credentials to access your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2 relative">
          <Label htmlFor="email" className="text-[101928]">EMAIL ADDRESS</Label>
          <Input className="pr-10" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" placeholder="m@example.com" required type="email" />
          <div className="absolute cursor-pointer inset-y-0 right-0 top-[30%] flex items-center pr-3 pointer-events-none">
        <MailIcon size={22} className=" text-[#667185]" />
      </div>
        </div>
        <div className="relative space-y-2">
          <Label htmlFor="password" className="text-[101928]">PASSWORD</Label>
          <Input className="pr-10" value={formData.password} id="password" onChange={(e) => setFormData({...formData, password: e.target.value})} required type={passwordVisible ? "text" : "password"} />
          <div onClick={() => setPasswordVisible(prev => !prev)} className="absolute cursor-pointer inset-y-0 right-0 top-[30%] flex items-center pr-3">
        {passwordVisible ? <EyeIcon  size={22} className=" text-[#667185]" /> : <EyeOff size={22} className=" text-[#667185]" />}
      </div>
        </div>
        <div className="flex w-full pb-2 mobile_lg:gap-12 gap-20 justify-between">
            <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label htmlFor="" className="text-[13px]">Remember me for 30 days</label>
            </div>
            <div>
                <p className="text-[#099137] text-[13px]">Forget Password</p>
            </div>
        </div>
        <Button size="lg" className="w-full drop-shadow-xlselect bg-[#099137] py-4" type="submit">
          Log into Account
        </Button>
        <div className="before:absolute text-[#667185] py-2 relative before:top-1/2 flex w-full justify-center items-center before:left-0 before:h-[1px] before:w-[45%] before:bg-[#F0F2F5] after:absolute after:top-1/2 after:right-0 after:h-[1px] after:w-[45%] after:bg-[#F0F2F5]">
            or
        </div>
            <Button onClick={handleGoogleSignUp} size="lg" className="w-full py-4 flex items-center gap-3" variant="outline">
            <Image src={GoogleIcon} width={20} height={20} alt="Google Icon"/>
            <span>Sign in with Google</span> 
        </Button>
        
       <div className="flex items-center gap-2 text-[13px] justify-center">
        <p>Are you new here?</p>
        <span className="text-[#099137] cursor-pointer font-semibold">Create Account</span>
       </div>
      </div>
    </div>
        </form>
      </div>
        
    )
}
export default Login