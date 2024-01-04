import { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import TextInput from "./components/TextInput"
import DateInput from "./components/DateInput"
import getAgeFrom from "./helpers/dateHelper"
import getNewId from "./services/idService"
import Timer from "./components/Timer"
import CheckboxInput from "./components/CheckboxInput"

export default function App() {
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState("1982-12-22")
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    document.title = name
  }, [name])


  function handleInputChange(newName) {
    setName(newName)
  }

  function handleBirthDateChange(newDate) {
    setBirthDate(newDate)
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer)
  }

  return (
    <Fragment>
      <Header size="text-xl">Projeto Base</Header>
      <Main>
        {
          showTimer && <div className="text-right">
          <Timer />
        </div>
        }
        
        <CheckboxInput 
          labelDescription="Mostrar timer"
          onCheckboxChange={toggleShowTimer}
        />
        <TextInput
          labelDescription="Digite um nome: "
          inputValue={name}
          onInputChange={handleInputChange}
          labelName="name"
          id={getNewId()}
          autoFocus
        />

        <DateInput
          labelDescription="Digite a data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
          labelName="date"
          id={getNewId()}
        />

        <p>O seu nome é {name}, que tem {name.length} caracteres, e você tem {getAgeFrom(birthDate)} anos.</p>
      </Main>
    </Fragment>
  );
}
