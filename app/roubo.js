import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HistoryPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>O Roubo das Joias de Napoleão em 2025</Text>

        <Text style={styles.subtitle}>Um crime histórico na era moderna</Text>

        <Text style={styles.paragraph}>
          Em abril de 2025, o Museu do Louvre enfrentou um dos maiores escândalos de sua história recente:
          o roubo das lendárias Joias de Napoleão Bonaparte, um conjunto de coroas, anéis, insígnias e artefatos
          que faziam parte do acervo imperial francês. Avaliadas em bilhões de euros e consideradas tesouros
          nacionais, as joias desapareceram em uma operação criminosa extremamente sofisticada.
        </Text>

        <Text style={styles.paragraph}>
          O roubo chocou o mundo inteiro e reacendeu o debate sobre a segurança de patrimônios históricos.
          Em poucas horas, o caso viralizou nas redes sociais, se tornando o evento cultural mais comentado
          do ano.
        </Text>

        <Text style={styles.subtitle}>Como o roubo aconteceu</Text>

        <Text style={styles.paragraph}>
          A polícia francesa revelou que o grupo responsável era composto por quatro indivíduos altamente
          treinados, liderados por uma criminosa conhecida apenas como **"A Viúva Negra"**, especialista em
          furtos de arte e tecnologia de invasão. O plano foi preparado ao longo de dois anos.
        </Text>

        <Text style={styles.paragraph}>
          Na noite de 12 de abril, a quadrilha executou o ataque utilizando drones modificados, sensores
          falsificados e um sistema de interferência capaz de desativar temporariamente a rede elétrica
          interna do setor onde as joias estavam expostas. A operação levou menos de 7 minutos.
        </Text>

        <Text style={styles.paragraph}>
          Os ladrões utilizaram um equipamento de corte a laser de alta precisão para abrir a cápsula
          blindada onde as joias estavam. Em seguida, fugiram por um corredor de manutenção raramente
          utilizado, escapando pelas margens do Rio Sena com a ajuda de motos aquáticas.
        </Text>

        <Text style={styles.subtitle}>A investigação</Text>

        <Text style={styles.paragraph}>
          A investigação rapidamente tornou-se internacional. A Interpol, Europol e agências de segurança
          de diversos países formaram uma força-tarefa para identificar padrões e rastrear o caminho das
          joias roubadas. Especialistas em arte afirmam que o objetivo do grupo não era vender as peças,
          mas entregá-las a um colecionador privado extremamente rico.
        </Text>

        <Text style={styles.paragraph}>
          Entre os detalhes curiosos revelados pela investigação estava o uso de microchips
          criptografados escondidos nas roupas da equipe criminosa, projetados para bloquear qualquer
          tentativa de rastreamento térmico ou por radiofrequência.
        </Text>

        <Text style={styles.subtitle}>A descoberta e o resgate</Text>

        <Text style={styles.paragraph}>
          As joias só foram encontradas cinco meses depois, em setembro de 2025, durante uma operação
          secreta na fronteira entre Suíça e Áustria. A Viúva Negra foi presa tentando transportar as joias
          desmontadas dentro de um compartimento oculto no teto de um veículo de luxo.
        </Text>

        <Text style={styles.paragraph}>
          Felizmente, todas as peças foram recuperadas e retornaram ao Louvre após passar por uma avaliação
          completa para garantir sua integridade. A segurança das galerias históricas foi totalmente
          reformulada, incluindo scanners biométricos e vitrines com travamento inteligente.
        </Text>

        <Text style={styles.subtitle}>Consequências</Text>

        <Text style={styles.paragraph}>
          O caso gerou mudanças profundas em museus de todo o mundo. O uso de inteligência artificial para
          monitoramento, drones de vigilância interna e protocolos digitais avançados tornaram-se padrão.
        </Text>

        <Text style={styles.paragraph}>
          As Joias de Napoleão, agora mais famosas do que nunca, atraem milhares de visitantes todos os dias,
          que desejam ver de perto os tesouros que quase desapareceram para sempre.
        </Text>

        <Text style={styles.callToAction}>
          Explore mais curiosidades sobre este roubo que marcou 2025.
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
