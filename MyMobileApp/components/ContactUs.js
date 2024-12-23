import { StyleSheet, View } from 'react-native';
import { Divider  , Text} from 'react-native-paper';

export default function ContactUs() {
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge">Contact US</Text>
        <Divider />

      </View>
      <View style={styles.body}>



      </View>
      <View style={styles.footer}>
        <Text variant="headlineLarge">MyApp © 2024</Text>
        <Divider />

      </View>

    </>

  );
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: "100%",
    alignItems: 'center'

  },
  body: {
    flex: 5,
    width: "100%"
  },
  footer: {
    flex: 2,
    width: "100%",
    alignItems: 'center'

  }
});