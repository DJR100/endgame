import { StyleSheet, TouchableOpacity, SafeAreaView, View as RNView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

export default function Dashboard() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Main content area */}
        <View style={styles.mainContent}>
          <RNView style={styles.circle}>
            {/* Placeholder for the main circle/timer display */}
          </RNView>
          <Text style={styles.daysText}>4 days</Text>
          <Text style={styles.timeText}>12hr 40m 51s</Text>
        </View>

        {/* Navigation buttons */}
        <View style={styles.navigationSection}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>Breathwork</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>Meditation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>Community</Text>
            </TouchableOpacity>
          </View>

          {/* Panic Button */}
          <TouchableOpacity
            style={styles.panicButton}
            onPress={() => {}}>
            <Text style={styles.panicButtonText}>Panic Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A1A', // Darker navy background
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FFFFFF15',
    marginBottom: 20,
  },
  daysText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 16,
    color: '#FFFFFF80',
    marginBottom: 20,
  },
  navigationSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  circleButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#1E1B38', // Deeper navy blue for buttons
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  panicButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  panicButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
