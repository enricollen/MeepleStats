export const fetchStatistics = async (endpoint: string, params: Record<string, string> = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`/api/${endpoint}?${queryString}`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    // concatenate the error message from the server
    throw new Error(`Failed to fetch data from ${endpoint}: ${await response.text()}`);
  }
  return response.json();
};