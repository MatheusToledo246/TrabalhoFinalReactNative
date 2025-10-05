/**
 * MT Viagens - Gerador de Roteiros de Viagem
 * Tela principal do aplicativo que permite ao usuário inserir um destino
 * e receber um roteiro personalizado gerado por IA
 */

// Importações de bibliotecas externas
import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

// Importações locais
import { generatorScript } from "@/services/ia/generator";
import { styles } from "@/styles";

export default function Index() {
  // Estados do componente
  const [destination, setDestination] = useState(''); // Destino inserido pelo usuário
  const [itinerary, setItinerary] = useState('');     // Roteiro gerado pela IA
  const [isLoading, setLoading] = useState(false);    // Estado de carregamento

  /**
   * Função responsável por gerar o roteiro de viagem
   * Valida a entrada do usuário e chama a API de IA
   */
  const handlePress = async () => {
    // Validação: verifica se a descrição tem pelo menos 5 caracteres
    if (destination.length < 5) {
      alert("Descrição muito curta! Conte-nos mais sobre sua viagem.")
      return;
    }

    // Inicia o processo de geração do roteiro
    setLoading(true);
    setItinerary(''); // Limpa o roteiro anterior
    
    try {
      const result = await generatorScript(destination);
      setItinerary(result || "Não foi possível gerar o roteiro. Tente novamente.");
    } catch (error) {
      setItinerary("Erro ao gerar roteiro. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Configura a barra de status */}
      <StatusBar barStyle="dark-content" />
      
      {/* Cabeçalho da aplicação */}
      <Text style={styles.title}>MT Viagens</Text>
      <Text style={styles.subtitle}>Seu gerador de roteiros de viagens personalizados</Text>
      
      {/* Campo de entrada para o destino */}
      <TextInput
        value={destination}
        onChangeText={setDestination}
        style={styles.input}
        placeholder="Descreva seu destino ou tipo de viagem..."
        multiline={false}
        maxLength={200}
      />
      
      {/* Botão para gerar o roteiro */}
      <TouchableOpacity 
        style={[styles.button, isLoading && { opacity: 0.7 }]} 
        onPress={handlePress}
        disabled={isLoading}
      >
        <Text style={styles.button_text}>
          {isLoading ? "Carregando..." : "Gerar roteiro personalizado!"}
        </Text>
      </TouchableOpacity>

      {/* Card com o roteiro gerado (animado) */}
      {itinerary && (
        <MotiView
          from={{ opacity: 0, translateY: 200 }}
          animate={{ opacity: 1, translateY: 0 }}
          style={styles.card}
        >
          <Text style={styles.card_title}>Seu roteiro está pronto:</Text>
          {/* ScrollView para permitir rolagem em roteiros longos */}
          <ScrollView 
            style={styles.scrollView} 
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            <Text style={styles.card_text}>{itinerary}</Text>
          </ScrollView>
        </MotiView>
      )}
    </View>
  );
}
