function delayedMessage(callback) {
    setTimeout(() => {
      callback("Delayed message");
    }, 2000);
  }
  
  delayedMessage((msg) => {
    console.log("Callback received:", msg);
  }); 
  