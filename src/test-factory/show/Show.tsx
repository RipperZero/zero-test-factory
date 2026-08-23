import type { ReactNode } from "react";

import { isEmpty, isFunction } from "radash";

import { isNullish } from "@/shared/utils/tools";

type ShowProps<T> = {
  fallback?: ReactNode;
  hideWhenNullish?: boolean;
  /**
   * Determines whether a non-boolean, non-nullish trigger should render the fallback
   * when `radash.isEmpty` considers it empty.
   * - Empty values include `0`, empty strings, empty arrays or objects, empty `Map`
   *   or `Set` instances, and invalid dates.
   * - Boolean and nullish triggers are handled by their dedicated branches.
   * - Default: `false`.
   */
  banEmptyTrigger?: boolean;
  /**
   * - If `boolean`:
   * true → children
   * false → fallback
   *
   * - If not `boolean`:
   * nonNullable → children
   * nullable → fallback
   */
  trigger: boolean | T;
  /**
   * Content to be rendered when `trigger` is valid.
   * - Can be a ReactNode or a function return a ReactNode.
   * - If a function is provided, it receives `trigger` as its argument.
   */
  children: ((data: NonNullable<T>) => ReactNode) | ReactNode;
};

/**
 * A conditional rendering component for more expressive control.
 * Renders `children` if the `trigger` is valid, otherwise renders `fallback`.
 */
const Show = <T,>({
  fallback = null,
  hideWhenNullish = false,
  banEmptyTrigger = false,
  trigger,
  children,
}: ShowProps<T>) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  if (hideWhenNullish && isNullish(trigger)) {
    return null;
  }

  if (typeof trigger === "boolean") {
    return trigger ? (children as ReactNode) : fallback;
  }

  if (!isNullish(trigger)) {
    if (banEmptyTrigger && isEmpty(trigger)) {
      return fallback;
    }

    if (isFunction(children)) {
      return children(trigger as NonNullable<T>);
    }

    return children;
  }

  return fallback;
  // #endregion render functions end
};

export type { ShowProps };
export { Show };
