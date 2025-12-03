import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import breuer from "../assets/breuer.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={breuer}
          style={styles.avatar}
        />

        <Text style={styles.title}>Olá! Eu sou Guilherme Breuer </Text>
        <Text style={styles.subtitle}>Estudante • Desenvolvedor • Criativo</Text>

        <Text style={styles.description}>
     Este site faz parte de um projeto escolar e representa um pouco 
          do que eu sei fazer.
        </Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249, 250, 255)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#1E293B',
    width: '100%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#3B82F6',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 5,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 20,
    textAlign: 'center',
  },

  description: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 22,
    textAlign: 'center',
  },
});
