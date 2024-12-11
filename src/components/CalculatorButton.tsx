import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, themeStyles } from '../config/app-theme';

interface Props {
	label: string;
	color?: string;
	doubleSize?: boolean;
}

export const CalculatorButton = ({ label, color = colors.darkGray, doubleSize = false }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => ({
				...themeStyles.button,
				opacity: pressed ? 0.8 : 1,
				backgroundColor: color,
				width: doubleSize ? 180 : 80,
			})}
		>
			<Text style={themeStyles.buttonText}>{label}</Text>
		</Pressable>
	);
};
