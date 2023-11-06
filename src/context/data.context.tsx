import React, { createContext, Dispatch, useContext, useState } from 'react';

interface FormState {
  firstname: string;
  lastname: string;
  phonenumber: number;
}
interface ContextShape {
  word: string;
  formState: FormState;
  setFormState: Dispatch<React.SetStateAction<FormState | undefined>>;
  setWord: Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<ContextShape>({} as ContextShape);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = (props: any) => {
  const [word, setWord] = useState<string>('');

  const [formState, setFormState] = useState<FormState | undefined>(
    {} as FormState
  );

  return (
    <DataContext.Provider
      value={{
        word,
        setWord,
        setFormState,
        formState,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
