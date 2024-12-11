/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorIosScreen } from './screens/CalculatorIos';
import { themeStyles } from './config/app-theme';

function App(): React.JSX.Element {
	return (
		<SafeAreaView style={themeStyles.background}>
			<StatusBar barStyle={'light-content'} />
			<CalculatorIosScreen />
		</SafeAreaView>
	);
}

export default App;
