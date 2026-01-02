import { SuperSwitch, Option } from "react-super-switch";

import { useCostieCtx } from "../../hooks";
import CurrencySwitch from "../CurrencySwitch";
import ParticipantsForm from "./ParticipantsForm";
import SalariesForm from "./SalariesForm";
import Timer from "../Timer";

const CostieFormFlow = () => {
  const { view } = useCostieCtx();

  return (
    <div className="bg-white rounded-md w-full mt-28 mx-auto my-0 min-h-75 overflow-visible px-8 pb-9 relative flex flex-col items-center pt-18 text-black">
      <CurrencySwitch />

      <SuperSwitch>
        <Option condition={view === "select-participants"}>
          <ParticipantsForm />
        </Option>
        <Option condition={view === "add-salaries"}>
          <SalariesForm />
        </Option>
        <Option condition={view === "timer-ready"}>
          <Timer />
        </Option>
      </SuperSwitch>
    </div>
  );
};

export default CostieFormFlow;
