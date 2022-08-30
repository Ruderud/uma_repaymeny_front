import { createContext, Dispatch, SetStateAction } from "react";

export interface RootContextProps {
  userId?: string;
  setRootContext: Dispatch<SetStateAction<{ userId?: string }>>;
}

export const RootContext = createContext<RootContextProps>({
  userId: undefined,
  setRootContext: () => {},
});
