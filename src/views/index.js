import "../styles/style.css";

if (true) {
  setTimeout(() => {
    import("lodash").then((res) => {
      console.log(res);
    });
  }, 3000);
}

console.log("hello world");
