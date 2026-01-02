import { useState, type ChangeEvent } from "react";

import { TOTAL_WORK_SECONDS_IN_YEAR } from "../../../constants";
import { useCostieCtx, useTranslations } from "../../../hooks";
import FormButton from "../../FormButton";

const SalariesForm = () => {
  const { currencySymbol, participants, updateTotalPerSecond, updateView } = useCostieCtx();
  const { t } = useTranslations();

  const [participantSalaries, setParticipantSalaries] = useState<number[]>(
    Array.from({ length: participants.selected }).map(() => 0)
  );

  const handleChangeSalaryInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    const value = parseInt(digitsOnly, 10) || 0;

    setParticipantSalaries((prevSalaries) => {
      const newSalaries = [...prevSalaries];
      newSalaries[index] = value;
      return newSalaries;
    });
  };

  const handleReset = () => {
    setParticipantSalaries(Array.from({ length: participants.selected }).map(() => 0));
    updateView("select-participants");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allSalariesFilled = participantSalaries.every((salary) => salary > 0);
    if (allSalariesFilled) {
      const total = participantSalaries.reduce((acc, salary) => acc + salary, 0),
        totalPerSecond = parseFloat((total / TOTAL_WORK_SECONDS_IN_YEAR).toFixed(2));
      updateTotalPerSecond(totalPerSecond);
    }
  };

  return (
    <form
      name="salaries-form"
      id="salaries-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="flex-1 flex flex-col h-full gap-5 items-center justify-between"
    >
      <span className="text-darkgrey text-sm font-light mb-2">{t("instructions")}</span>
      {Array.from({ length: participants.selected }).map((_, participantIndex) => (
        <div key={participantIndex} className="w-full flex flex-col">
          <label htmlFor={`salary-${participantIndex}`} className="text-darkgrey text-sm font-light cursor-pointer">
            {`${t("labelSalary")} #${participantIndex + 1}*`}
          </label>

          <div className="relative">
            <span className="absolute left-0 top-1 text-black">{currencySymbol}</span>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={7}
              autoFocus={participantIndex === 0}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              data-bwignore="true"
              data-lpignore="true"
              data-1p-ignore="true"
              data-form-type="other"
              enterKeyHint="done"
              id={`salary-${participantIndex}`}
              name={`salary-${participantIndex}`}
              value={participantSalaries[participantIndex] > 0 ? participantSalaries[participantIndex] : ""}
              onChange={(e) => handleChangeSalaryInput(e, participantIndex)}
              className="w-full border-b border-lightgrey py-1 px-3 focus:outline-none"
              placeholder="0"
              required
            />
          </div>
        </div>
      ))}

      <div className="flex justify-between w-full mt-6">
        <FormButton
          type="reset"
          form="salaries-form"
          label={t("cta.back")}
          icon="chevron-left"
          iconPosition="left"
          variant="secondary"
        />
        <FormButton
          type="submit"
          form="salaries-form"
          label={t("cta.next")}
          icon="chevron-right"
          disabled={participantSalaries.some((salary) => salary === 0)}
        />
      </div>
    </form>
  );
};

export default SalariesForm;
