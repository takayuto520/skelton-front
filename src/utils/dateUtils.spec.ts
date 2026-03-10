import { describe, it, expect } from "vitest";
import { formatDate, getCurrentDate } from "@/utils/dateUtils";

describe("dateUtils", () => {
  describe("formatDate", () => {
    it("should format date to YYYY-MM-DD format", () => {
      const date = new Date(2024, 0, 15); // 2024-01-15
      const result = formatDate(date);
      expect(result).toBe("2024-01-15");
    });

    it("should format date with custom format", () => {
      const date = new Date(2024, 0, 15);
      const result = formatDate(date, "DD/MM/YYYY");
      expect(result).toBe("15/01/2024");
    });
  });

  describe("getCurrentDate", () => {
    it("should return a Date object", () => {
      const result = getCurrentDate();
      expect(result).toBeInstanceOf(Date);
    });

    it("should return current date", () => {
      const before = new Date();
      const result = getCurrentDate();
      const after = new Date();

      expect(result.getTime()).toBeGreaterThanOrEqual(before.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(after.getTime());
    });
  });
});
