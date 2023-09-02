function LandingScreen({ navigation }) {
  return (
    <View>
      <Text>Landing Screen</Text>
      <Button title="Ir al Mazo" onPress={() => navigation.navigate('Mazo')} />
    </View>
  );
}