import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAdvice {
  advice: string;
  id: number;
}

interface IAdviceContextData {
  advice: IAdvice;
  setAdvice: (advice: IAdvice) => void;
  handleNewAdvice: () => void;
}

interface AdviceProps {
  children: ReactNode;
}

type NewAdviceButton = Omit<IAdvice, "id">;

const AdviceContext = createContext<IAdviceContextData>(
  {} as IAdviceContextData
);

export function AdviceProvider({ children }: AdviceProps) {
  const [advice, setAdvice] = useState<IAdvice>({
    advice: "",
    id: 0,
  });

  useEffect(() => {
    handleNewAdvice();
  }, []);

  async function handleNewAdvice(newAdvice?: NewAdviceButton) {
    const fetchAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip);
        };
    fetchAdvice();
    }

  return (
    <AdviceContext.Provider value={{ advice, setAdvice, handleNewAdvice }}>
      {children}
    </AdviceContext.Provider>
  );
}

export function useAdvice() {
  const context = useContext(AdviceContext);
  return context;
}
