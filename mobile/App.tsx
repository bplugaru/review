import { Box, GluestackUIProvider, config } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { RootStackParamList } from './type';
import AddReview from './screens/AddReview';
import SaveReview from './components/SaveReview';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config.theme}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Screen name="Home" component={Home} />
              <RootStack.Screen
                name="AddReview"
                component={AddReview}
                options={{
                  headerTitle: () => <Text>Review Waan Thai</Text>,
                  headerRight: () => <SaveReview />,
                }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
