/**
 * Serviço de geração de roteiros de viagem usando Google Gemini AI
 * Responsável por comunicar com a API de IA e gerar roteiros personalizados
 */

import { GoogleGenAI } from "@google/genai";

/**
 * Gera um roteiro de viagem personalizado baseado no destino fornecido
 * @param destination - Destino ou tipo de viagem descrito pelo usuário
 * @returns Promise<string | undefined> - Roteiro gerado ou undefined se houver erro
 */
export async function generatorScript(destination: string): Promise<string | undefined> {
  try {
    // Inicializa a IA com a chave da API
    const ai = new GoogleGenAI({
      apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });

    // Configuração da IA
    const config = {
      thinkingConfig: {
        thinkingBudget: 0, // Orçamento de processamento
      },
      systemInstruction: [
        {
          text: `Você é um especialista em turismo e planejamento de viagens. 
          
          O usuário fornecerá um destino ou tipo de viagem e você deve criar um roteiro detalhado e personalizado.
          
          Inclua:
          - Pontos turísticos principais
          - Restaurantes recomendados  
          - Dicas de hospedagem
          - Meio de transporte
          - Duração sugerida
          - Orçamento estimado
          - Dicas culturais e de segurança
          
          Responda em formato de lista organizada, em texto puro, sem links.
          Crie apenas um roteiro completo por consulta.`,
        },
      ],
    };

    // Modelo de IA a ser utilizado
    const model = "gemini-2.5-flash-lite";
    
    // Conteúdo da requisição
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: destination,
          },
        ],
      },
    ];

    // Faz a requisição para a API
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    // Extrai o texto da resposta
    const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return result;
  } catch (error) {
    console.error("Erro ao gerar roteiro:", error);
    throw new Error("Não foi possível gerar o roteiro. Tente novamente.");
  }
}
