/**
 * 日付をフォーマットする
 * @param date - フォーマットする日付
 * @param format - フォーマット文字列 (例: 'YYYY-MM-DD')
 * @returns フォーマットされた日付文字列
 */
export const formatDate = (
  date: Date,
  format: string = "YYYY-MM-DD",
): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return format
    .replace("YYYY", String(year))
    .replace("MM", month)
    .replace("DD", day);
};

/**
 * 現在の日付を取得する
 * @returns 現在の日付
 */
export const getCurrentDate = (): Date => {
  return new Date();
};
