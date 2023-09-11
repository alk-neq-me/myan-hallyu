import { useStore } from "@/store"
import { observer } from 'mobx-react-lite'
import { Text, View } from 'react-native'
import { Button } from "./ui"

interface CounterProps {}

export const Counter = observer(function(props: CounterProps) {
  const {} = props;
  const { value, increment } = useStore().counter

  return (
    <View>
      <Text> count: {value}</Text>
      <Button title="increment" onPress={() => {
        increment()
      }} />
    </View>
  )
})
