"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "../ui/button";
import { Textarea } from "../ui/textarea";
import { DialogData } from "@/@types/dialog";
import { generateForm } from "@/actions/generate_form";
import { useFormState, useFormStatus } from "react-dom";

const initialState: {
  message: string;
  data?: unknown;
} = {
  message: "",
};

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate"}
    </Button>
  );
}

const FormGenerator = (props: DialogData) => {
  const [state, formAction] = useFormState(generateForm, initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state?.message === "success") {
      setOpen(false);
    }
  }, [state?.message]);

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger className="border-white border-2 rounded-md px-4 py-2">{props?.btn}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props?.title}</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <DialogDescription className="grid gap-4 py-4 border-gray-500 outline-none">
            <Textarea className="h-72" maxLength={700} />
          </DialogDescription>
          <DialogFooter>
            <SubmitButton />
            <Button type="submit">Create Manually</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormGenerator;
