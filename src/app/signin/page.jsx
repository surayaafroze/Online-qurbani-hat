"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { motion } from "motion/react"
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

export default function SignInPage() {
  // const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const email =e.target.email.value;
    const password =e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,password,
      callbackURL:'/'
    })
    console.log(data,error)
    if(data){
    toast.success('Login successful!')
  }
  else{toast.warning('Oops! Something went wrong. Try again')}
  
  
};
const handelarSignIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
  };
  

  return (
   <motion.div 
   initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
   className=" pt-5 pb-5 px-6">
     <Card className="border mx-auto max-w-120 py-10 px-7 ">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex max-w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2 justify-center items-center mt-3">
          <Button type="submit" className={'bg-[#458b45]'}>
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary" className={'bg-[#458b45] text-white'}>
            Reset
          </Button>
        </div>
      </Form>
      
      <p className="text-center">or</p>
      <div className="text-center"><Button onClick={handelarSignIn} variant="outline" className={'w-full border'} ><GrGoogle></GrGoogle> Continue with Google</Button>
       <p className='mt-4'>Dont have an account <Link href='/signup' className='text-red-500'>register</Link></p>
      </div>
    </Card>
   </motion.div>
  );
}