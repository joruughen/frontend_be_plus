import { Link, Stack } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
      <>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <View style={styles.container}>
          <Text style={styles.title}>This screen doesn't exist.</Text>
          <Link href="/" style={styles.link}>
            <Text style={styles.linkText}>Go to home screen!</Text>
          </Link>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 16,
    color: '#0a7ea4', // Puedes ajustar el color según tu preferencia
    lineHeight: 30,
  },
});
