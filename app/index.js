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
    backgroundColor: 'rgb(242, 244, 248)', // fundo escuro profundo
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  // Quadrado elegante
  card: {
    width: '90%',
    padding: 25,
    backgroundColor:  '#1E293B', // leve contraste com o fundo
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#334155',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowColor: '#000',
    elevation: 10, // para Android
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: 'rgb(242, 237, 235)', // vermelho vibrante
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.2,
  },

  subtitle: {
    fontSize: 18,
    color: '#94A3B8', // branco suave
    textAlign: 'center',
    marginBottom: 20,
  },

  callToAction: {
    fontSize: 19,
    fontWeight: '700',
    color: '#94A3B8', // amarelo elegante
    letterSpacing: 0.8,
  },

  bottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 5,
    width: '100%',
    backgroundColor: '#94A3B8', // detalhe que dá suspense
  },
});
