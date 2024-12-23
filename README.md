<h1>React Native App</h1> 

This is the README file for the  React Native app, outlining the project's purpose, structure, and dependencies.</br>

<h2>Project Overview</h2>

The Fieta app is a simple React Native application that demonstrates the usage of React Native Paper components for UI, along with essential features such as safe area context handling and styled text. The app includes a single Home component with a headline, styled body text, and a button.

<h2>Features</h2>

<b>React Native Paper Integration</b>: Utilized for beautiful, Material Design-styled components.<br/>

Safe Area Context: Ensures the app layout avoids overlapping with system UI elements.

Scroll View Support: Allows scrolling through long content.

Styled Components: Applied custom styles to align the content visually.

Installed Packages

Dependencies

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

DevDependencies

@babel/core (^7.20.0): Compiler for converting modern JavaScript into a compatible format.

Code Structure

components/Home.js

The Home component includes:

Text: Displays a headline and body text using variants such as headlineLarge and bodyMedium.

Divider: Adds a horizontal line to visually separate content.

Button: Provides a Material Design-styled button with an icon.

Custom styles applied to ensure padding and justified text alignment.

App.js

The main entry point of the app, which:

Wraps the application in a PaperProvider for theming support.

Uses SafeAreaView to ensure layout avoids system UI overlap.

Includes a ScrollView to make long content scrollable.

Embeds the Home component.

package.json

Contains metadata about the project, including dependencies, devDependencies, and scripts for running the app on different platforms (Android, iOS, Web).

How to Run the App

Install dependencies:

npm install

Start the app:

npm start

Run on a specific platform:

Android: npm run android

iOS: npm run ios

Web: npm run web

Custom Styling

The app includes custom styling for body text to ensure:

Proper padding around the content.

Justified text alignment for better readability.

Styles are defined using React Native's StyleSheet:

const styles = StyleSheet.create({
  body: {
    padding: 10,
    textAlign: "justify",
  },
});

<h1>Key Functionality</h1>

Material Design Components: The app leverages React Native Paper for creating a polished user interface.

Scrollable Content: Long text content is scrollable using ScrollView.

Safe Layout: SafeAreaView ensures content respects safe areas on devices with notches or rounded edges.

Contribution

Feel free to contribute by submitting issues or pull requests. Make sure to follow best practices and test your changes before submitting.

License

This project is licensed under the MIT License.


