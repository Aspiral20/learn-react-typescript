// @ts-ignore
import React, {createContext, useContext, useEffect, useReducer, useRef, useState} from 'react';

// interface Person {
//     name: string;
//     height: string;
//     mass: string;
//     hair_color: string;
//     skin_color: string;
//     eye_color: string;
//     birth_year: string;
//     gender: string;
//     home_world: string;
//     films: string[];
//     species: string[];
//     vehicles: string[];
//     starships: string[];
//     created: Date;
//     edited: Date;
//     url: string;
// }
// async function getPerson (id = 1): Promise<Person> {
//     const response = await fetch(`https://swapi.dev/api/people/${id}`)
//     return response.json();
// }

//useEffect, useState

// const Hooks = () => {
//     const [person, setPerson] = useState<Person | null>(null);
//
//     useEffect(() => {
//         getPerson().then(data => setPerson(data))
//     }, [])
//
//     return (
//         <div>
//             {person?.name}
//         </div>
//     )
// }

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value, setValue] = useState<number>(123);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder="Custom Input"
            className="ceva"
            {...props}/>
    )
}
const HeadLine = ({children}) => {
    return (
        <h1 className="text-center py-2">
            {children}
        </h1>
    );
}

// function ExampleUseEffect() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         document.title = `Вы нажали ${count} раз`;
//     });
// }

// type State = {
//     data: Person | null;
//     loading: boolean;
//     error: Error | null;
// }
// type Action = {
//     type: 'request'
// } | {
//     type: 'response'
// }
// declare function reducer(state: State, action: Action): State
// const HookUseReducer = () => {
//     const [state, dispatch] = useReducer(reducer, {} as State);
//
//     useEffect(() => {
//         dispatch({
//             type: 'response'
//         })
//     }, [dispatch])
//
//     return (
//         <div>
//             {state?.data?.name}
//         </div>
//     )
// }

interface Theme {
    color: string;
    background: string;
}
type AvailableThemes = 'light' | 'dark';
const themes: Record<AvailableThemes, Theme> = {
    light: {
        color: "#000000",
        background: "#eeeeee"
    },
    dark: {
        color: "#ffffff",
        background: "#222222"
    }
};
const ThemeContext = createContext({
    theme: themes.light,
    toggle: () => {}
});
const ThemeProvider: React.FC = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('dark');

    return (
        <ThemeContext.Provider value={{
            theme: themes[currentTheme],
            toggle: () => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
const HookUseContext = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div>
            <button
                onClick={() => toggle()}
                style={{background: theme.background, color: theme.color}}>
                Button
            </button>
        </div>
    )
}


const HookUseRef = () => {
    const ref = useRef<HTMLDivElement>(null)

    const value = useRef<React.ReactNode>(0);

    useEffect(() => {
        setImmediate(() => {
            value.current += 1
        });
    }, [])

    return (
        <div ref={ref}>
            HTML
        </div>
    )
}



function App() {
  return (
      <div>
          <HeadLine>
              <div>text</div>
          </HeadLine>
          <CustomInput disabled={false}/>
          {/*<HookUseRef/>*/}
          <ThemeProvider>
          </ThemeProvider>
          <HookUseContext/>
      </div>
  );
}

export default App;
