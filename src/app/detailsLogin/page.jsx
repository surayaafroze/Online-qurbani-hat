"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
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
import { GrGoogle } from "react-icons/gr";
// import { useRouter } from "next/navigation";

export default function DetailsPage() {
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
  //   if(!error){
  //   router.push(`/allAnimals/${cows.id}`)
  // }
  
};
const handelarSignIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
  };
  

  return (
   <div className=" pt-5 pb-5">
     <Card className="border mx-auto w-125 py-10 ">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       
      <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

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
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

       <TextField isRequired name="phone" type="number">
          <Label>Phone</Label>
          <Input placeholder="Enter your number" />
          <FieldError />
        </TextField>

        <TextField isRequired name="address" type="text">
          <Label>Address</Label>
          <Input placeholder="Enter your address" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className={'bg-[#458b45]'}>
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className={'bg-[#458b45] text-white'}>
            Reset
          </Button>
        </div>
      </Form>
    </Card>
   </div>
  );
}