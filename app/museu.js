import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HistoryPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>O Roubo do Museu do Louvre</Text>

        <Text style={styles.subtitle}>Um crime histórico</Text>

        <Text style={styles.paragraph}>
          Em 1911, o mundo da arte foi abalado por um dos crimes mais notórios da história:
          o desaparecimento da pintura “Mona Lisa” de Leonardo da Vinci do Museu do Louvre, em Paris.
          O roubo chocou a população e atraiu atenção internacional.
        </Text>

        <Text style={styles.subtitle}>Como aconteceu</Text>

        <Text style={styles.paragraph}>
          O ladrão, Vincenzo Peruggia, era um ex-funcionário do museu e conhecia bem a rotina do local.
          Ele entrou escondido, retirou a pintura de sua moldura e a escondeu sob suas roupas. 
          A segurança da época era muito limitada, o que facilitou o crime.
        </Text>

        <Text style={styles.subtitle}>Consequências</Text>

        <Text style={styles.paragraph}>
          O roubo levou a uma revolução na segurança dos museus e mudou a forma como obras de arte eram protegidas.
          A pintura foi recuperada dois anos depois, mas o episódio aumentou ainda mais a fama da “Mona Lisa” e despertou curiosidade sobre os crimes contra a arte.
        </Text>

        <Text style={styles.callToAction}>
          Explore mais curiosidades e detalhes sobre este roubo histórico.
        </Text>

      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0101ff', // mesmo fundo da primeira página
    padding: 20,
  },

  scrollContent: {
    backgroundColor: '#211818ff', // card elegante
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#706967ff',
    padding: 25,
    shadowColor: '#100f0fff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ff3603ff',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e4d905ff',
    marginTop: 15,
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 16,
    color: '#ffffffd0',
    lineHeight: 24,
    marginBottom: 10,
  },

  callToAction: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ff3603ff',
    textAlign: 'center',
    marginTop: 20,
  },
});
