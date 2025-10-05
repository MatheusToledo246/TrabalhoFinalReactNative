import { generatorScript } from "@/services/ia/generator";
import { styles } from "@/styles";
import { MotiView } from 'moti';
import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [destination, setDestination] = useState('')
  const [itinerary, setItinerary] = useState('')
  const [isLoading, setLoading] = useState(false)


  const handlePress = async () => {

    if (destination.length < 5) {
      alert("Descrição muito curta! Conte-nos mais sobre sua viagem.")
      return;
    }

    setLoading(true)
    setItinerary('')
    const result = await generatorScript(destination);
    setItinerary(result || "...");
    setLoading(false);
  }

  return (
    <View
      style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text style={styles.title}>MT Viagens</Text>
      <Text style={styles.subtitle}>Seu gerador de roteiros de viagens personalizados</Text>
      <TextInput
        value={destination}
        onChangeText={setDestination}
        style={styles.input}
        placeholder="Descreva seu destino ou tipo de viagem..."
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button_text}>{isLoading ? "Carregando ..." : "Gerar roteiro personalizado!"}</Text>
      </TouchableOpacity>

      {itinerary && <MotiView
        from={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        style={styles.card}>
        <Text style={styles.card_title}>Seu roteiro está pronto:</Text>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
          <Text style={styles.card_text}>{itinerary}</Text>
        </ScrollView>
      </MotiView>}
    </View>
  );
}
