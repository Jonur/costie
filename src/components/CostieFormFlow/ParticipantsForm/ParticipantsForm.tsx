import type { FormEvent } from "react";

import { useCostieCtx, useTranslations } from "../../../hooks";
import { getFormFieldData } from "../../../utils";
import FormButton from "../../FormButton";

const ParticipantsForm = () => {
  const { participants, updateSelectedParticipants } = useCostieCtx();
  const { t } = useTranslations();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedParticipants = getFormFieldData<number>(e, "number-of-participants");
    if (selectedParticipants) {
      updateSelectedParticipants(selectedParticipants);
    }
  };

  return (
    <form
      name="participants-form"
      id="participants-form"
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col h-full items-center justify-between"
    >
      <div className="flex flex-col gap-4">
        <select
          id="number-of-participants"
          name="number-of-participants"
          className="border-b border-lightgrey bg-white w-full py-2 cursor-pointer outline-0"
        >
          {participants.options.map((num) => (
            <option key={num} value={num}>
              {`${num} ${num === 1 ? t("participant") : t("participants")}`}
            </option>
          ))}
        </select>
        <label htmlFor="number-of-participants" className="text-darkgrey text-sm font-light">
          {t("notificationParticipantsSecondary")}
        </label>
      </div>

      <FormButton type="submit" form="participants-form" label={t("cta.next")} icon="chevron-right" />
    </form>
  );
};

export default ParticipantsForm;
