import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CounterContextValue = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextValue | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(0), []);

  const value = useMemo(
    () => ({ count, increment, decrement, reset }),
    [count, increment, decrement, reset]
  );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) {
    throw new Error("useCounter must be used within CounterProvider");
  }
  return ctx;
}
