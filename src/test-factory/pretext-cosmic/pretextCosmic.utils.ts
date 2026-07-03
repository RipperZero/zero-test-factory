type Interval = {
  left: number;
  right: number;
};

type Obstacle = {
  cx: number;
  cy: number;
  r: number;
  hPad: number;
  vPad: number;
};

const SLOT_MIN_WIDTH = 84;

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const lerp = (from: number, to: number, amount: number) => {
  return from + (to - from) * amount;
};

const round = (value: number) => {
  return Number(value.toFixed(1));
};

const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

const circleIntervalForBand = (
  obstacle: Obstacle,
  bandTop: number,
  bandBottom: number,
) => {
  const top = bandTop - obstacle.vPad;
  const bottom = bandBottom + obstacle.vPad;

  if (top >= obstacle.cy + obstacle.r || bottom <= obstacle.cy - obstacle.r) {
    return null;
  }

  const minDy =
    obstacle.cy >= top && obstacle.cy <= bottom
      ? 0
      : obstacle.cy < top
        ? top - obstacle.cy
        : obstacle.cy - bottom;

  if (minDy >= obstacle.r) {
    return null;
  }

  const maxDx = Math.sqrt(obstacle.r * obstacle.r - minDy * minDy);

  return {
    left: obstacle.cx - maxDx - obstacle.hPad,
    right: obstacle.cx + maxDx + obstacle.hPad,
  } satisfies Interval;
};

const carveTextLineSlots = (base: Interval, blocked: Interval[]) => {
  let slots = [base];

  for (let blockedIndex = 0; blockedIndex < blocked.length; blockedIndex += 1) {
    const interval = blocked[blockedIndex];
    const nextSlots: Interval[] = [];

    for (let slotIndex = 0; slotIndex < slots.length; slotIndex += 1) {
      const slot = slots[slotIndex];

      if (interval.right <= slot.left || interval.left >= slot.right) {
        nextSlots.push(slot);
        continue;
      }

      if (interval.left > slot.left) {
        nextSlots.push({ left: slot.left, right: interval.left });
      }

      if (interval.right < slot.right) {
        nextSlots.push({ left: interval.right, right: slot.right });
      }
    }

    slots = nextSlots;
  }

  return slots
    .filter((slot) => {
      return slot.right - slot.left >= SLOT_MIN_WIDTH;
    })
    .sort((leftSlot, rightSlot) => {
      return leftSlot.left - rightSlot.left;
    });
};

export type { Interval, Obstacle };
export {
  carveTextLineSlots,
  circleIntervalForBand,
  clamp,
  getDistance,
  lerp,
  round,
};