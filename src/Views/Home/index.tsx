import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton'
import { TextInputElement } from '../../components/TextInputElement'

interface NomeCompleto {
  nome: string
  sobrenome: string
}

export const Home = () => {
  const [nomeCompleto, setNomeCompleto] = useState<NomeCompleto>({
    nome: '',
    sobrenome: '',
  })
  console.log(nomeCompleto)

  function handleChange(text: string) {
    setNomeCompleto((prevState) => ({ ...prevState, nome: text }))
  }

  function handleChangeSobrenome(text: string) {
    setNomeCompleto((prevState) => ({ ...prevState, sobrenome: text }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu primeiro aplicativo</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInputElement
            placeholder="Digite seu nome"
            style={styles.intupComponent}
            value={nomeCompleto.nome}
            handleChange={handleChange}
          />
          <TextInputElement
            placeholder="Digite seu sobrenome"
            style={styles.intupComponent}
            value={nomeCompleto.sobrenome}
            handleChange={handleChangeSobrenome}
          />
        </View>
        <RoundedButton style={styles.addSubject} title={'+'} />
      </View>

      {nomeCompleto.nome.length > 1 ? (
        <Text style={styles.text}>
          Seu nome completo é {`${nomeCompleto.nome} ${nomeCompleto.sobrenome}`}
        </Text>
      ) : null}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingTop: 20,
  },
  addSubject: { marginLeft: 10, alignSelf: 'center' },
  intupComponent: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  nomesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
