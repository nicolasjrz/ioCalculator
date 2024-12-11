/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { colors, themeStyles } from '../config/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorIosScreen = () => {
	return (
		<View style={themeStyles.calculatorContainer}>
			<View style={{ paddingHorizontal: 10, paddingBottom: 20 }}>
				<Text style={themeStyles.mainResult}>1500</Text>
				<Text style={themeStyles.subResult}>50</Text>
			</View>

			<View style={themeStyles.row}>
				<CalculatorButton label={'C'} />
				<CalculatorButton label={'+/-'} />
				<CalculatorButton label={'del'} />
				<CalculatorButton label={'/'} color={colors.orange} />
			</View>
			<View style={themeStyles.row}>
				<CalculatorButton label={'7'} />
				<CalculatorButton label={'8'} />
				<CalculatorButton label={'9'} />
				<CalculatorButton label={'x'} color={colors.orange} />
			</View>
			<View style={themeStyles.row}>
				<CalculatorButton label={'4'} />
				<CalculatorButton label={'5'} />
				<CalculatorButton label={'6'} />
				<CalculatorButton label={'-'} color={colors.orange} />
			</View>
			<View style={themeStyles.row}>
				<CalculatorButton label={'1'} />
				<CalculatorButton label={'2'} />
				<CalculatorButton label={'3'} />
				<CalculatorButton label={'+'} color={colors.orange} />
			</View>
			<View style={themeStyles.row}>
				<CalculatorButton label={'0'} doubleSize={true} />
				<CalculatorButton label={'.'} />
				<CalculatorButton label={'='} color={colors.orange} />
			</View>
		</View>
	);
};
