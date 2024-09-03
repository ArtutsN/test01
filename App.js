import { useState } from 'react'
import { View, Text, Button } from 'react-native'

function App() {
  const [name, setName] = useState('')

  function pegarNome() {
    setName('Arthur')
  }

  return (
    <View style={{ marginTop: 50 }}>
      <text style={{ fontSize: 24 }}>{name}</text>
      <Button
        title='save'
        onPress={ () => pegarNome() }
      />
    </View>
  )
}

export default App
/*
function Header() {
  let name = 'Arthur N'
  return <Text style={{ fontSize: 24, padding: 16 }}>{name}</Text>
}

function LogoImage() {
  let img = ''
  return {
    <Image
  source = {{ uri: img }
}
style = {{ width: '100%', height: 300 }}
  }
}
*/