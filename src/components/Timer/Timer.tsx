import { useEffect, useRef, useState } from "react";
import { SuperSwitch, Option } from "react-super-switch";

import { DURATION_OPTIONS_IN_MINUTES, MEETING_COST_INTERVAL_MS } from "../../constants";
import { useCostieCtx, useTranslations } from "../../hooks";
import { c } from "../../utils";
import FormButton from "../FormButton";

const Timer = () => {
  const { currencySymbol, totalPerSecond, updateView } = useCostieCtx();
  const { t } = useTranslations();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [timerStatus, setTimerStatus] = useState<"not-started" | "running" | "stopped">("not-started");
  const [displayAmount, setDisplayAmount] = useState(0);
  const [secondsRan, setSecondsRan] = useState(0);
  const [openBreakdown, setOpenBreakdown] = useState(false);

  const handleBack = () => {
    updateView("add-salaries");
  };

  const handleStart = () => {
    setTimerStatus("running");

    timeoutRef.current = setInterval(() => {
      setDisplayAmount((displayAmount) => displayAmount + parseFloat(totalPerSecond.toFixed(2)));
      setSecondsRan((secondsRan) => secondsRan + 1);
    }, MEETING_COST_INTERVAL_MS);
  };

  const handleStop = () => {
    setTimerStatus("stopped");

    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  const handleNewMeeting = () => {
    handleStop();
    setDisplayAmount(0);
    setSecondsRan(0);
    setTimerStatus("not-started");
    updateView("select-participants");
  };

  useEffect(() => {
    setTimerStatus("not-started");

    return () => {
      handleStop();
    };
  }, []);

  const secondsDisplay = String(secondsRan % 60).padStart(2, "0");
  const minutesDisplay = String(Math.floor(secondsRan / 60)).padStart(2, "0");
  const hoursDisplay = String(Math.floor(secondsRan / 3600)).padStart(2, "0");
  const elapsedTime = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;

  return (
    <section className="text-center w-full">
      <h1 className="text-5xl">{`${currencySymbol}${displayAmount ? displayAmount.toFixed(2) : 0}`}</h1>
      <h2 className="text-2xl text-lightgrey mt-3">{elapsedTime}</h2>

      <SuperSwitch>
        <Option condition={timerStatus === "not-started"}>
          <div className="flex justify-between w-full mt-10">
            <FormButton
              label={t("cta.back")}
              icon="chevron-left"
              iconPosition="left"
              variant="secondary"
              onClick={handleBack}
            />
            <FormButton label={t("cta.start")} icon="play" onClick={handleStart} className="gap-1" />
          </div>
        </Option>
        <Option condition={timerStatus === "running"}>
          <div className="flex justify-center w-full mt-10">
            <FormButton label={t("cta.end")} icon="square" onClick={handleStop} className="gap-2 pr-5" />
          </div>
        </Option>
        <Option condition={timerStatus === "stopped"}>
          <div className="flex justify-center w-full mt-10">
            <FormButton label={t("cta.new")} onClick={handleNewMeeting} />
          </div>
        </Option>
      </SuperSwitch>

      <div className="border-t border-lightgrey mt-10 px-2">
        <button
          type="button"
          className="w-full cursor-pointer flex justify-between py-4"
          aria-expanded={openBreakdown}
          onClick={() => setOpenBreakdown((v) => !v)}
        >
          <span>{t("labelCostBreakdown")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 0 24 24"
            width="22px"
            className={c("fill-darkgrey", {
              "transition-transform": openBreakdown,
              "rotate-180 transition-transform": !openBreakdown,
            })}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        </button>

        <div
          className={c(
            "grid transition-[grid-template-rows] duration-300 ease-out text-left",
            openBreakdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden flex flex-col gap-2">
            {DURATION_OPTIONS_IN_MINUTES.map((minutes) => (
              <dl key={minutes}>
                <dt>{t(`costBreakdown.label.minutes.${minutes}`)}</dt>
                <dd className="text-lightgrey text-sm">{`${currencySymbol}${Math.floor(totalPerSecond * 60 * minutes || 0)}`}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
