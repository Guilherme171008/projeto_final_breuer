import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Easing, ScrollView } from 'react-native';
import { useEffect, useRef } from 'react';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease)
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease)
      }),
    ]).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Museus Mais Influentes do Mundo</Text>
        </View>

        {/* ===================== MUSEU 1 ===================== */}
        <Image
          source={{ uri: "https://i.imgur.com/k6RK9tL.jpeg" }}
          style={styles.avatar}
        />

        <Text style={styles.museumName}>Museu do Prado – Espanha</Text>

        <Text style={styles.description}>
          Localizado em Madrid e inaugurado em 1819, o Museu do Prado é um dos maiores 
          centros artísticos do mundo. Ele reúne obras renascentistas e barrocas que 
          marcaram a história da Europa. Situado no “Paseo del Prado”, faz parte do 
          famoso “Triângulo da Arte”.
        </Text>

        <Text style={styles.workTitle}>Principais Obras:</Text>
        <Text style={styles.list}>
          • As Meninas – Velázquez{"\n"}
          • O Jardim das Delícias – Bosch{"\n"}
          • A Maja Desnuda – Francisco Goya
        </Text>

        {/* GALERIA PRADO */}
        <Text style={styles.galleryTitle}>Galeria</Text>
        <ScrollView horizontal style={styles.gallery}>
          <Image source={{ uri: "https://i.imgur.com/N2c2TgH.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/J6jzx2D.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/2Lx0h1T.jpeg" }} style={styles.galleryImg} />
        </ScrollView>

        {/* ===================== MUSEU 2 ===================== */}

        <Image
          source={{ uri: "https://i.imgur.com/tnz7RZ1.jpeg" }}
          style={styles.avatar}
        />

        <Text style={styles.museumName}>British Museum – Reino Unido</Text>

        <Text style={styles.description}>
          Fundado em 1753 e localizado no bairro histórico de Bloomsbury, em Londres, 
          o British Museum foi o primeiro museu nacional do mundo. Seu acervo conta a 
          evolução de civilizações como Egito, Grécia e Roma, tornando-o referência 
          arqueológica global.
        </Text>

        <Text style={styles.workTitle}>Principais Obras:</Text>
        <Text style={styles.list}>
          • Pedra de Roseta{"\n"}
          • Mármores de Elgin{"\n"}
          • Coleção de Mumificação Egípcia
        </Text>

        {/* GALERIA BRITISH */}
        <Text style={styles.galleryTitle}>Galeria</Text>
        <ScrollView horizontal style={styles.gallery}>
          <Image source={{ uri: "https://i.imgur.com/8o3EPhL.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/7VH3Gei.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/tW9Cs9i.jpeg" }} style={styles.galleryImg} />
        </ScrollView>

        {/* ===================== MUSEU 3 ===================== */}

        <Image
          source={{ uri: "https://i.imgur.com/RXTU4Lb.jpeg" }}
          style={styles.avatar}
        />

        <Text style={styles.museumName}>Metropolitan Museum of Art – EUA</Text>

        <Text style={styles.description}>
          Fundado em 1870 e localizado na Quinta Avenida de Nova York, o MET é um dos 
          maiores museus já construídos. Seu acervo inclui arte europeia, asiática, 
          africana e americana, além de armaduras medievais e artefatos antigos.
        </Text>

        <Text style={styles.workTitle}>Principais Obras:</Text>
        <Text style={styles.list}>
          • Washington Crossing the Delaware{"\n"}
          • Madonna and Child – Duccio{"\n"}
          • Coleções Medievais e Reais
        </Text>

        {/* GALERIA MET */}
        <Text style={styles.galleryTitle}>Galeria</Text>
        <ScrollView horizontal style={styles.gallery}>
          <Image source={{ uri: "https://i.imgur.com/1KnzrMa.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/vDAeWcM.jpeg" }} style={styles.galleryImg} />
          <Image source={{ uri: "https://i.imgur.com/rt6GEHc.jpeg" }} style={styles.galleryImg} />
        </ScrollView>

      </Animated.View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: 'rgb(249, 250, 255)',
  },

  card: {
    backgroundColor: '#1E293B',
    width: '90%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  titleBackground: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    textAlign: 'center',
  },

  avatar: {
    width: 220,
    height: 150,
    borderRadius: 15,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#3B82F6',
  },

  museumName: {
    fontSize: 20,
    color: '#F1F5F9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 15,
  },

  workTitle: {
    fontSize: 17,
    color: '#93C5FD',
    fontWeight: '600',
    marginBottom: 8,
  },

  list: {
    fontSize: 15,
    color: '#E2E8F0',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },

  galleryTitle: {
    fontSize: 16,
    color: '#38BDF8',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: -10,
  },

  gallery: {
    marginBottom: 30,
  },

  galleryImg: {
    width: 120,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
});
