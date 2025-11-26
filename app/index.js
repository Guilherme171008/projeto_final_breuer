import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useRef, useEffect } from 'react';

export default function App() {
  const fade = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 900,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Quadrado elegante */}
      <View style={styles.card}>
        <Animated.Text 
          style={[
            styles.title, 
            { opacity: fade, transform: [{ translateY: translate }] }
          ]}
        >
          O Roubo do Louvre
        </Animated.Text>

        <Animated.Text 
          style={[
            styles.subtitle, 
            { opacity: fade, transform: [{ translateY: translate }] }
          ]}
        >
          Explore a história por trás de um dos crimes mais intrigantes do mundo.
        </Animated.Text>

        <Animated.Text 
          style={[
            styles.callToAction, 
            { opacity: fade }
          ]}
        >
          Mistério. Arte. Silêncio.
        </Animated.Text>
      </View>

      {/* Linha vermelha estilo “suspense policial” */}
      <View style={styles.bottomLine} />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0101ff', // fundo escuro profundo
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  // Quadrado elegante
  card: {
    width: '90%',
    padding: 25,
    backgroundColor: '#211818ff', // leve contraste com o fundo
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#706967ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // para Android
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ff3603ff', // vermelho vibrante
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.2,
  },

  subtitle: {
    fontSize: 18,
    color: '#ffffffaa', // branco suave
    textAlign: 'center',
    marginBottom: 20,
  },

  callToAction: {
    fontSize: 19,
    fontWeight: '700',
    color: '#e4d905ff', // amarelo elegante
    letterSpacing: 0.8,
  },

  bottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 5,
    width: '100%',
    backgroundColor: '#e9db12ff', // detalhe que dá suspense
  },
});
