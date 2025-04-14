// 5) Promise that resolves after 1 second
function delayedSuccess() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Success");
      }, 1000);
    });
  }
  delayedSuccess().then((res) => console.log("5)", res));
