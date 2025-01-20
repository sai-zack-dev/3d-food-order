import { Canvas } from '@react-three/fiber/native';
import { StyleSheet,View } from 'react-native';
import { BottomUi } from './components/BottomUi';
import { Burger } from './components/Burger';
import { Suspense } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas camera={{position: [-2, 2.5, 5], fov: 30}}>
        <color attach="background" args={["#E5F4FF"]} />
        <Suspense>
        <Burger />
        </Suspense>
      </Canvas>

      <BottomUi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
