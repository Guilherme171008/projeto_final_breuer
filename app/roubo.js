import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';


export default function HistoryPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>O Roubo do Museu do Louvre</Text>

        <Text style={styles.subtitle}>Um crime histórico</Text>

        <Text style={styles.paragraph}>
          Em 1911, o mundo da arte foi abalado por um dos crimes mais notórios da história:
          o desaparecimento da pintura “Mona Lisa”, de Leonardo da Vinci, do Museu do Louvre, em Paris.
          Naquela época, a obra já era admirada, mas não tinha a fama estratosférica que possui hoje.
          O roubo chocou a população, virou manchete em jornais ao redor do mundo e marcou o início do
          que seria um fenômeno midiático sem precedentes.
        </Text>

        <Text style={styles.paragraph}>
          A busca pela pintura mobilizou autoridades francesas, críticos de arte, intelectuais e até
          curiosos. Pessoas faziam filas apenas para observar o espaço vazio na parede do museu,
          onde antes estava o famoso retrato. O crime, inesperado e audacioso, transformou a Mona Lisa
          em uma celebridade mundial.
        </Text>

        <Text style={styles.subtitle}>Como aconteceu</Text>

        <Text style={styles.paragraph}>
          O ladrão, Vincenzo Peruggia, era um ex-funcionário do museu. Ele conhecia bem a rotina do Louvre:
          os horários dos seguranças, as áreas menos vigiadas e os acessos internos. Na madrugada do dia
          21 de agosto de 1911, aproveitando-se de sua antiga credencial e de falhas gravíssimas na
          segurança, ele entrou no museu com um plano simples, mas ousado.
        </Text>

        <Text style={styles.paragraph}>
          Vestindo um jaleco branco — idêntico ao dos trabalhadores do museu — Peruggia retirou a Mona Lisa
          da parede, desmontou a pesada moldura de vidro e madeira e escondeu o quadro debaixo do jaleco.
        </Text>

        <Text style={styles.paragraph}>
          O quadro ficou escondido por **mais de 24 horas dentro do próprio museu**, pois Peruggia ficou
          trancado sem conseguir sair. Apenas no dia seguinte ele conseguiu escapar pela porta dos fundos.
        </Text>

        <Text style={styles.subtitle}>A investigação</Text>

        <Text style={styles.paragraph}>
          A polícia francesa iniciou uma das maiores investigações da história cultural. Artistas famosos,
          como **Pablo Picasso** e o poeta **Guillaume Apollinaire**, chegaram a ser interrogados como
          suspeitos. O caso ganhou contornos cinematográficos quando jornais começaram a divulgar rumores.
        </Text>

        <Text style={styles.paragraph}>
          Quando o Louvre reabriu, milhares de pessoas visitaram o local apenas para ver o espaço vazio.
        </Text>

        <Text style={styles.subtitle}>A descoberta e o retorno</Text>

        <Text style={styles.paragraph}>
          A obra só reapareceu dois anos depois, quando Peruggia tentou vendê-la a um antiquário em Florença.
        </Text>

        <Text style={styles.paragraph}>
          Ele acreditava estar “devolvendo” a arte à Itália — o que era falso historicamente.
        </Text>

        <Text style={styles.subtitle}>Consequências</Text>

        <Text style={styles.paragraph}>
          O roubo revolucionou a segurança dos museus e transformou a Mona Lisa no quadro mais famoso do mundo.
        </Text>

        <Text style={styles.paragraph}>
          Hoje, a pintura é protegida por vidro à prova de balas e sensores modernos.
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
    backgroundColor: 'rgb(245, 240, 240)',
    padding: 20,
  },

  scrollContent: {
    backgroundColor: '#1E293B',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#334155',
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
    color: 'rgb(245, 239, 238)',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#94A3B8',
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
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 20,
  },
});
