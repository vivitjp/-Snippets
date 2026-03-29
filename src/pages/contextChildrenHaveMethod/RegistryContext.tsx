import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

export type RegistryContextValue = {
  /** 子が id ごとに実行したい処理を登録する */
  register: (id: string, fn: () => void) => void;
  /** アンマウント時に登録を外す */
  unregister: (id: string) => void;
  /** 親が登録済みの id の処理を呼び出す */
  invoke: (id: string) => void;
};

const RegistryContext = createContext<RegistryContextValue | null>(null);

export function RegistryProvider({ children }: { children: ReactNode }) {
  const mapRef = useRef(new Map<string, () => void>());

  const register = useCallback((id: string, fn: () => void) => {
    mapRef.current.set(id, fn);
  }, []);

  const unregister = useCallback((id: string) => {
    mapRef.current.delete(id);
  }, []);

  const invoke = useCallback((id: string) => {
    mapRef.current.get(id)?.();
  }, []);

  const value = useMemo(
    () => ({ register, unregister, invoke }),
    [register, unregister, invoke]
  );

  return (
    <RegistryContext.Provider value={value}>{children}</RegistryContext.Provider>
  );
}

export function useRegistry() {
  const ctx = useContext(RegistryContext);
  if (!ctx) {
    throw new Error("useRegistry must be used within RegistryProvider");
  }
  return ctx;
}
