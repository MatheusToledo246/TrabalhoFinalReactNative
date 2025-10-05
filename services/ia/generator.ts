import { GoogleGenAI } from "@google/genai";

export async function generatorScript(script: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    systemInstruction: [
      {
        text: `Estou fazendo um app onde o usuário vai entrar com um local pra onde ele vai viajar e quero responder um roteiro de viagem com pontos turísticos do local que ele informou

Responda diretamente em texto puro como roteiro de viagem e os locais turísticos dessa região, independente de outras informações e sem link.

sugira um roteiro por entrada.

deve ser criado em um formato de lista

`,
      },
    ],
  };
  const model = "gemini-2.5-flash-lite";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: script,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
  return result;
}
