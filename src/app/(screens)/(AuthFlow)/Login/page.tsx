"use client";

import { useForm, FormProvider } from "react-hook-form";
import FormBuilder from "@/components/form/FormBuilder";
import { useState } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  terms: boolean;
}

const formConfig = [
  {
    id: "first_name",
    name: "First Name",
    type: "text",
    required: true,
    placeholder: "Enter your first name",
  },
  {
    id: "last_name",
    name: "Last Name",
    type: "text",
    required: true,
    placeholder: "Enter your last name",
  },
  {
    id: "email",
    name: "Email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
  },
  {
    id: "terms",
    name: "Accept Terms and Conditions",
    type: "checkbox",
    required: true,
  },
];

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Login = () => {
  const methods = useForm<FormData>({ defaultValues: {} });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto w-full h-full p-6 shadow rounded-lg shadow-input bg-white dark:bg-black">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl">Login to FormifyAI</h1>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formConfig.map((formField) => (
            <FormBuilder
              key={formField.id}
              name={formField.id}
              label={formField.name}
              type={formField.type}
              validations={{ required: formField.required }}
              placeholder={formField.placeholder}
              className="my-2"
            />
          ))}

          <Button
            className="mt-4 relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            disabled={loading}
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {loading ? "Submitting..." : "Login"}
            </span>
            <BottomGradient />
          </Button>
        </form>
      </FormProvider>
      <div className="w-full flex justify-center mt-5">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/Signup">
            <span className="underline cursor-pointer">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
