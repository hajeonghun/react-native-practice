import {View, Text, Pressable} from 'react-native';
import {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

function Ing() {
  const [count, setCount] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={{backgroundColor: 'red'}}>
        <Pressable onPress={() => setCount(prev => ++prev)}>
          <Text>완료</Text>
        </Pressable>
        <Text>{count}</Text>
      </View>
    </View>
  );
}

export default Ing;
