console.log("Script Running");

let user = prompt("Enter S, W or G").toUpperCase();
if (!["S", "W", "G"].includes(user)) {
  alert("Invalid input. Please enter S, W, or G.");
} else {
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["S", "W", "G"][cpuI];

  const match = (cpu, user) => {
    if (cpu === user) {
      return "Nobody";
    } else if (cpu === "S" && user === "W") {
      return "CPU";
    } else if (cpu === "S" && user === "G") {
      return "User";
    } else if (cpu === "G" && user === "W") {
      return "User";
    } else if (cpu === "G" && user === "S") {
      return "CPU";
    } else if (cpu === "W" && user === "S") {
      return "User";
    } else if (cpu === "W" && user === "G") {
      return "CPU";
    }
  };

  let result = match(cpu, user);
  document.write(
    `CPU: ${cpu} <br> User: ${user} <br> The winner is: ${result}`
  );
}
