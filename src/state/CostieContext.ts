import { createContext } from "react";

import type { CostieAppStateCtx } from "../types";

const CostieContext = createContext<CostieAppStateCtx | null>(null);

export default CostieContext;
