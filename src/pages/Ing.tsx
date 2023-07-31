import {View, Text, Pressable} from 'react-native';
import {useState} from 'react';

function Ing() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Pressable onPress={() => setCount(prev => ++prev)}>
        <Text>완료</Text>
      </Pressable>
      <Text>{count}</Text>
    </View>
  );
}

export default Ing;
