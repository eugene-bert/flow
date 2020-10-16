export const fetchIssues = (data) => {
  function removeDuplicates(data) {
    return [...new Set(data)]
  }
  const result = data.map((el) => (el.column))
  return { type: "FETCH_ISSUES", issues: data, columns: removeDuplicates(result)};
};
