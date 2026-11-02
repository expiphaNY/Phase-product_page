"use client";

import { useA11yPrefs, useSystemSetting } from "@/shared/a11y-prefs";
import styles from "./product.module.css";

//wcag 2.2.2: the animated scene starts on its own, so the page offers a way to stop it.
//the same choice lives in Settings > Accessibility inside the app
export function MotionToggle() {
  const [prefs, update] = useA11yPrefs();
  const systemReduced = useSystemSetting("(prefers-reduced-motion: reduce)");
  //the device already asks for the plain page, so there is nothing to switch off
  if (systemReduced) return null;
  const on = prefs.motion === "reduce";
  return (
    <button type="button" className={styles.motionToggle} aria-pressed={on} onClick={() => update({ motion: on ? "system" : "reduce" })}>
      Reduce motion
    </button>
  );
}
