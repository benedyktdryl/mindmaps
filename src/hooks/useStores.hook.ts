import React from "react";
import { storesContext } from "../contexts/store.context";

export const useStores = () => React.useContext(storesContext);
