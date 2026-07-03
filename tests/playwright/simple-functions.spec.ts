import { expect, test } from "@playwright/test";

import {
  carveTextLineSlots,
  circleIntervalForBand,
  clamp,
  getDistance,
  lerp,
  round,
} from "../../src/test-factory/pretext-cosmic/pretextCosmic.utils";

test.describe("simple function tests", () => {
  test("clamp constrains values into the provided range", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(7, 0, 10)).toBe(7);
    expect(clamp(99, 0, 10)).toBe(10);
  });

  test("lerp and round produce predictable interpolated values", () => {
    expect(lerp(10, 30, 0.25)).toBe(15);
    expect(round(15.678)).toBe(15.7);
  });

  test("getDistance returns euclidean distance", () => {
    expect(getDistance(0, 0, 3, 4)).toBe(5);
  });

  test("circleIntervalForBand returns a blocking interval only when the band intersects", () => {
    const obstacle = {
      cx: 200,
      cy: 160,
      hPad: 12,
      r: 40,
      vPad: 8,
    };

    expect(circleIntervalForBand(obstacle, 60, 80)).toBeNull();
    expect(circleIntervalForBand(obstacle, 140, 170)).toEqual({
      left: 148,
      right: 252,
    });
  });

  test("carveTextLineSlots removes blocked segments and sorts the remaining slots", () => {
    expect(
      carveTextLineSlots(
        { left: 0, right: 420 },
        [
          { left: 110, right: 170 },
          { left: 250, right: 290 },
        ],
      ),
    ).toEqual([
      { left: 0, right: 110 },
      { left: 290, right: 420 },
    ]);
  });
});