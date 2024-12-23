<h1>React Native First App</h1> 

This is the README file for the  React Native app, outlining the project's purpose, structure, and dependencies.</br>

<h2>Project Overview</h2>

<p>The Fieta app is a simple React Native application that demonstrates the usage of React Native Paper components for UI, along with essential features such as safe area context handling and styled text. The app includes a single Home component with a headline, styled body text, and a button.</p>

<h2>Features</h2>

<b>React Native Paper Integration</b>: Utilized for beautiful, Material Design-styled components.<br/>

<b>Safe Area Context</b>: Ensures the app layout avoids overlapping with system UI elements.</br>

<b>Scroll View Support</b>: Allows scrolling through long content.</br>

<b>Styled Components</b>: Applied custom styles to align the content visually.

<h2>Installed Packages</h2>

<h3>Dependencies</h3>

@expo/metro-runtime (~4.0.0): Used internally by Expo for Metro bundler runtime.

expo (~52.0.20): Core framework for developing React Native applications.

expo-status-bar (~2.0.0): Provides a customizable status bar for the app.

react (18.3.1): JavaScript library for building user interfaces.

react-dom (18.3.1): React package for working with the DOM.

react-native (0.76.5): Framework for building mobile applications using React.

react-native-paper (^5.12.5): Library for Material Design components in React Native.

react-native-safe-area-context (^5.0.0): Provides a context API for determining safe area insets.

react-native-vector-icons (^10.2.0): Library for customizable vector icons.

react-native-web (~0.19.13): Enables React Native components to run in a web environment.

<h3>DevDependencies</h3>

@babel/core (^7.20.0): Compiler for converting modern JavaScript into a compatible format.

<h2>Code Structure</h2>

<h3>components/Home.js</h3>

<h4>The Home component includes:</h4>

<strong>Text</strong>: Displays a headline and body text using variants such as headlineLarge and bodyMedium.<br/>

<strong>Divider</strong>: Adds a horizontal line to visually separate content.<br/>

<strong>Button</strong>: Provides a Material Design-styled button with an icon.<br/>

Custom styles applied to ensure padding and justified text alignment.

<h3>App.js</h3>

<h3>The main entry point of the app, which:</h3>

Wraps the application in a PaperProvider for theming support.<br/>

Uses SafeAreaView to ensure layout avoids system UI overlap.<br/>

Includes a ScrollView to make long content scrollable.<br/>

Embeds the Home component.<br/>

<h4>package.json</h4>

Contains metadata about the project, including dependencies, devDependencies, and scripts for running the app on different platforms (Android, iOS, Web).<br/>


<h3>How to Run the App</h3>

Install dependencies:npm install<br/>

Start the app:npx expo start<br/>

Run on a specific platform:<br/>

Android: npm run android<br/>

iOS: npm run ios<br/>

Web: npm run web<br/>

<h3>Custom Styling</h3>

The app includes custom styling for body text to ensure:
Proper padding around the content.<br/>

Justified text alignment for better readability.<br/>

Styles are defined using React Native's StyleSheet:<br/><br/>
const styles = StyleSheet.create({
  body: {
    padding: 10,
    textAlign: "justify",
  },
});
<br/>
<br/>

<h1>Key Functionality</h1>

Material Design Components: The app leverages React Native Paper for creating a polished user interface.<br/>

Scrollable Content: Long text content is scrollable using ScrollView.<br/>

Safe Layout: SafeAreaView ensures content respects safe areas on devices with notches or rounded edges.<br/>




