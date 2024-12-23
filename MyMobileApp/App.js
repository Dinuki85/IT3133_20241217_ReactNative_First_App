import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';



export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Home/>
            <ContactUs/>

            <StatusBar style="auto" />
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
