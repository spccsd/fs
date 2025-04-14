// 6) Simulated API call with setTimeout
function fetchMockData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, data: "Mock API Response" });
      }, 1500);
    });
  }
  async function getData() {
    const data = await fetchMockData();
    console.log("6) Fetched Data:", data);
  }
  getData();

