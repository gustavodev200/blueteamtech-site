"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string().email("E-mail inválido"),
  subject: z.string(),
  message: z
    .string()
    .min(1, "Mensagem muito curta")
    .max(500, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };
  return (
    <div
      className="w-full h-auto bg-[#fff] md:rounded-lg p-[2rem] flex flex-col justify-center absolute top-[-438px] "
      id="contact"
    >
      <h4 className="font-bold text-2xl">Entre em contato</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[1.625rem]">
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full h-14 outline-none border-solid border-[1px] border-primary-300 rounded-lg px-4"
            {...register("email", { required: true })}
          />

          <select
            {...register("subject", { required: true })}
            className="w-full h-14 outline-none border-solid border-[1px] border-primary-300 rounded-lg px-4"
          >
            <option value="Desenvolvimento de Website Corporativo">
              Desenvolvimento de Website Corporativo
            </option>
            <option value="Desenvolvimento de Site de Portfólio">
              Desenvolvimento de Site de Portfólio
            </option>
            <option value="Desenvolvimento de Blog">
              Desenvolvimento de Blog
            </option>
            <option value="Desenvolvimento Loja Online">
              Desenvolvimento Loja Online
            </option>
            <option value="Desenvolvimento Landing Page">
              Desenvolvimento Landing Page
            </option>
          </select>
        </div>

        <textarea
          required
          placeholder="Mensagem"
          className="mt-[1.625rem] w-full h-36 outline-none border-solid border-[1px] border-primary-300 rounded-lg p-4 resize-none"
          maxLength={500}
          {...register("message", { required: true })}
        />

        <div>
          <button
            type="submit"
            className="w-full h-14 bg-primary-300 rounded-lg mt-[1.625rem] text-[#fff] font-bold hover:bg-primary-500"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
