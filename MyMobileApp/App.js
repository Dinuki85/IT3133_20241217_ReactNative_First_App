import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';
import Home from './components/Home';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Home />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
