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
      className="flex-1 flex flex-col h-full items-center justify-between relative"
    >
      <div className="flex flex-col gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 0 24 24"
          width="22px"
          className="fill-darkgrey absolute right-0 top-3 pointer-events-none rotate-180"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
        </svg>
        <select
          id="number-of-participants"
          name="number-of-participants"
          className="border-b border-lightgrey bg-white w-full pl-1 py-2 cursor-pointer outline-0 appearance-none"
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
