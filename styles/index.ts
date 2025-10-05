import { StyleSheet } from "react-native";

const colors = {
  primary: '#4600ebff',      // Roxo principal
  secondary: '#ee6c02ff',    // Laranja de fundo
  textLight: '#e2ddddff',    // Texto claro
  white: '#ffffff',          // Branco
  gray: '#333333',           // Cinza escuro
  lightGray: '#DDD',         // Cinza claro
  background: '#F5F5F5',     // Fundo padrão
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    marginVertical: 16,
    fontSize: 16,
    color: colors.textLight,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
  },
  button: {
    backgroundColor: colors.primary,
    height: 40,
    width: '100%',
    marginVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button_text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 20,
    borderColor: colors.lightGray,
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  card_title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
    marginBottom: 8,
  },
  card_text: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.gray,
  },
  scrollView: {
    maxHeight: 300,
    width: '100%',
  },
});