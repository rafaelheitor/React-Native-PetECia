import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInputElement } from '../../components/TextInputElement'

interface Cadastro {
  nome: string
  email: string
  telefone: string
  senha: string
}

export const SignUp = () => {
  const [dadosCadastro, setDadosCadastro] = useState<Cadastro>({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  })

  function handleChangeNome(text: string) {
    setDadosCadastro((prevState) => ({ ...prevState, nome: text }))
  }

  function handleChangeEmail(text: string) {
    setDadosCadastro((prevState) => ({ ...prevState, email: text }))
  }

  function handleChangeSenha(text: string) {
    setDadosCadastro((prevState) => ({ ...prevState, senha: text }))
  }

  function handleChangeTelefone(text: string) {
    setDadosCadastro((prevState) => ({ ...prevState, telefone: text }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInputElement
            placeholder="Digite seu nome"
            style={styles.intupComponent}
            value={dadosCadastro.nome}
            handleChange={handleChangeNome}
          />
          <TextInputElement
            placeholder="Digite seu Email"
            type="email-address"
            style={styles.intupComponent}
            value={dadosCadastro.email}
            handleChange={handleChangeEmail}
          />
          <TextInputElement
            placeholder="Digite seu telefone"
            type="phone-pad"
            style={styles.intupComponent}
            value={dadosCadastro.telefone}
            handleChange={handleChangeTelefone}
          />
          <TextInputElement
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.intupComponent}
            value={dadosCadastro.senha}
            handleChange={handleChangeSenha}
          />
        </View>
      </View>

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
    flex: 0.9,
    paddingTop: 20,
  },
  addSubject: { marginLeft: 10, alignSelf: 'center' },
  intupComponent: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    marginTop: 30,
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
