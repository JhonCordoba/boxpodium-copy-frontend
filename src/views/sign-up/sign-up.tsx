import { Banner } from "../../components/banner";
import { SignUpForm } from "../../components/sign-up-form";

export function SignUp() { 
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            <div className="w-full h-full md:h-auto flex bg-[#F1F2F6]">
                <Banner />
            </div>
            <div className="w-full h-full  md:h-auto flex">
                <SignUpForm />
            </div>
        </div>
    );
}