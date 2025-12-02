import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Easing, ScrollView} from 'react-native';
import { useEffect, useRef } from 'react'; 
import isabella from "../assets/isabella.jpg";
import roubo1 from "../assets/roubo1.jpg";
import roubo2 from "../assets/roubo2.jpg";
import roubo3 from "../assets/roubo3.jpg";
import museu2 from "../assets/museu2.jpg";
import roubo4 from "../assets/roubo4.jpg";
import roubo5 from "../assets/roubo5.jpg";
import roubo6 from "../assets/roubo6.jpg";
import museu3 from "../assets/museu3.jpg";
import roubo7 from "../assets/roubo7.jpg";
import roubo8 from "../assets/roubo8.jpg";
import roubo9 from "../assets/roubo9.jpg";



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
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
        ]}
      >

        {/* ======================= TÍTULO ======================= */}
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Furtos Históricos em Museus</Text>
        </View>

        {/* ===================================================== */}
        {/* ==================== CASO 1 ========================= */}
        {/* ===================================================== */}

        <Image
          source={isabella}
          style={styles.mainImage}
        />
        <Text style={styles.museumName}>Isabella Stewart Gardner Museum – EUA (1990)</Text>

        <Text style={styles.description}>
          O maior furto de arte da história aconteceu em Boston, quando dois homens 
          se passaram por policiais e levaram 13 obras de valor incalculável. 
          Entre elas estavam peças de Rembrandt, Degas e Vermeer.  
          Até hoje, o FBI mantém o caso aberto e nenhum item foi recuperado.
        </Text>

        <Text style={styles.workTitle}>Principais Itens Roubados:</Text>
        <Text style={styles.list}>
          • “The Concert” – Vermeer{"\n"}
          • “The Storm on the Sea of Galilee” – Rembrandt{"\n"}
          • 3 desenhos de Edgar Degas
        </Text>

        <Text style={styles.valueText}>Prejuízo estimado: US$ 500 milhões</Text>
        <Text style={styles.source}>
          Fonte: FBI, Isabella Gardner Museum
        </Text>
      
        {/* MINI-GALERIA */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
          <Image source={roubo1} style={styles.galleryImage} />
           <Image source={roubo2} style={styles.galleryImage} />
        <Image source={roubo3} style={styles.galleryImage} />
        </ScrollView>

        {/* ===================================================== */}
        {/* ==================== CASO 2 ========================= */}
        {/* ===================================================== */}

        <Image
          source={museu2}
          style={styles.mainImage}
        />

        <Text style={styles.museumName}>Museu de Belas Artes de Montreal – Canadá (1972)</Text>

        <Text style={styles.description}>
          Conhecido como "Skylight Caper", o furto aconteceu quando criminosos 
          entraram por uma claraboia em manutenção. Eles renderam os seguranças 
          e levaram 18 pinturas e cerca de 40 joias e objetos preciosos.  
          Apenas algumas foram recuperadas.
        </Text>

        <Text style={styles.workTitle}>Principais Itens Roubados:</Text>
        <Text style={styles.list}>
          • Obras de Pieter Brueghel{"\n"}
          • Pinturas barrocas raras{"\n"}
          • Objetos de ourivesaria europeia
        </Text>

        <Text style={styles.valueText}>Prejuízo estimado: US$ 2 milhões (≈ US$ 12 milhões hoje)</Text>
        <Text style={styles.source}>
          Fonte: The Canadian Encyclopedia, CBC
        </Text>

        {/* MINI-GALERIA */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
           <Image source={roubo4} style={styles.galleryImage} />
                   <Image source={roubo5} style={styles.galleryImage} />
                     <Image source={roubo6} style={styles.galleryImage} />
        </ScrollView>

        {/* ===================================================== */}
        {/* ==================== CASO 3 ========================= */} {/* ===================================================== */}

        <Image
          source={museu3}
          style={styles.mainImage}
        />

        <Text style={styles.museumName}>National Art Museum of Azerbaijan – Baku (1993)</Text>

        <Text style={styles.description}>
          Em meio à instabilidade política pós-União Soviética, o museu sofreu 
          um dos maiores furtos do leste europeu.  
          Foram roubados cerca de 274 itens, incluindo miniaturas persas, 
          tapetes históricos e pinturas raras.
        </Text>

        <Text style={styles.workTitle}>Principais Itens Roubados:</Text>
        <Text style={styles.list}>
          • Miniaturas iranianas do século XVIII{"\n"} 
          • Pinturas clássicas russas{"\n"} 
          • Antiguidades caucasianas
        </Text>

        <Text style={styles.valueText}>Prejuízo estimado: US$ 10–15 milhões</Text>
        <Text style={styles.source}>
          Fonte: Interpol, UPI Archives
        </Text>

        {/* MINI-GALERIA */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
          <Image source={roubo7} style={styles.galleryImage} />
        <Image source={roubo8} style={styles.galleryImage} />
         <Image source={roubo9} style={styles.galleryImage} />
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
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },

  mainImage: {
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

  valueText: {
    color: '#FDE68A',
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 15,
  },

  source: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },

  galleryScroll: {
    marginBottom: 25,
  },

  galleryImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
});
