import React, { createContext } from "react";
import "./App.css";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

// 5 - desestruturando props
import Destructuring, { Category } from "./components/Destructuring";

// 6 - use state
import State from "./components/State";

//10 - utilizando contexto
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  mySecondText = "opa";

  // 9 - context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo"></SecondComponent>
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={15}
          tags={["politica", "religiao"]}
          category={Category.TS}
        ></Destructuring>
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
