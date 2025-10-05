import {
    GoogleGenAI,
} from '@google/genai';

export async function generateTravelItinerary(destination: string) {
    const ai = new GoogleGenAI({
        apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
        thinkingConfig: {
            thinkingBudget: 0,
        },
        systemInstruction: [
            {
                text:
                    `Você é um especialista em turismo e planejamento de viagens. O usuário irá fornecer um destino ou tipo de viagem e você deve criar um roteiro detalhado e personalizado.
                
                Inclua:
                - Pontos turísticos principais
                - Restaurantes recomendados
                - Dicas de hospedagem
                - Meio de transporte
                - Duração sugerida
                - Orçamento estimado
                - Dicas culturais e de segurança
                
                Responda em texto puro, bem estruturado e fácil de ler, sem links.
                Crie apenas um roteiro por consulta.`,
            }
        ],
    };
    const model = 'gemini-2.5-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: destination,
                },
            ],
        },
    ];

    try {
        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });

        const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        return result;
    } catch (error) {
        return "Ops! Não conseguimos gerar seu roteiro agora. Tente novamente!"
    }
}


