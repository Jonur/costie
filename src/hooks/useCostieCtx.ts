import { use } from "react";

import { CostieContext } from "../state";

const useCostieCtx = () => {
  const ctx = use(CostieContext);
  if (!ctx) throw new Error("useCostieCtx must be used within <CostieProvider>");
  return ctx;
};

export default useCostieCtx;
