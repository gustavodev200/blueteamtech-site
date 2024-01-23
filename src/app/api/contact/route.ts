import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";

const bodySchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, email, message } = bodySchema.parse(body);

    const messageData = {
      embeds: [
        {
          type: "rich",
          title: `Mensagem de Contato`,
          description: "",
          color: 0x4983f5,
          fields: [
            {
              name: `Assunto`,
              value: subject,
              inline: true,
            },
            {
              name: `Email`,
              value: email,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
