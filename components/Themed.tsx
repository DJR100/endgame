import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export function Text(props: DefaultText['props']) {
  const colorScheme = useColorScheme() ?? 'light';
  const color = Colors[colorScheme].text;

  return <DefaultText style={[{ color }, props.style]} {...props} />;
}

export function View(props: DefaultView['props']) {
  const colorScheme = useColorScheme() ?? 'light';
  const backgroundColor = Colors[colorScheme].background;

  return <DefaultView style={[{ backgroundColor }, props.style]} {...props} />;
} 