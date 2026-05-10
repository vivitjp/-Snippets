import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

/** 子が useImperativeHandle で公開する API の共通形 */
export type ImperativeChildHandle = {
  execute: () => void;
};

export type ImperativeRegistryContextValue = {
  /** 子が自分の imperative ref を id で登録する */
  registerRef: (id: string, ref: RefObject<ImperativeChildHandle | null>) => void;
  unregister: (id: string) => void;
  /** 親が登録済みの imperative API を経由して子の処理を起動する */
  invoke: (id: string) => void;
};

const ImperativeRegistryContext =
  createContext<ImperativeRegistryContextValue | null>(null);

export function ImperativeRegistryProvider({ children }: { children: ReactNode }) {
  const mapRef = useRef(
    new Map<string, RefObject<ImperativeChildHandle | null>>()
  );

  const registerRef = useCallback(
    (id: string, ref: RefObject<ImperativeChildHandle | null>) => {
      mapRef.current.set(id, ref);
    },
    []
  );

  const unregister = useCallback((id: string) => {
    mapRef.current.delete(id);
  }, []);

  const invoke = useCallback((id: string) => {
    mapRef.current.get(id)?.current?.execute();
  }, []);

  const value = useMemo(
    () => ({ registerRef, unregister, invoke }),
    [registerRef, unregister, invoke]
  );

  return (
    <ImperativeRegistryContext.Provider value={value}>
      {children}
    </ImperativeRegistryContext.Provider>
  );
}

export function useImperativeRegistry() {
  const ctx = useContext(ImperativeRegistryContext);
  if (!ctx) {
    throw new Error("useImperativeRegistry must be used within ImperativeRegistryProvider");
  }
  return ctx;
}
