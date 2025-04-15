import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Sign In</h2>
        <label style={styles.label}>Username</label>
        <input type="text" style={styles.input} />
        <label style={styles.label}>Password</label>
        <input type="password" style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9"
  },
  form: {
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  title: {
    marginBottom: "20px",
    fontWeight: "500",
    fontSize: "22px"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "500"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00c374",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;
