// 8) Unknown type and type assertion
function handleUnknown(input: unknown) {
    if (typeof input === "string") {
      console.log("8) String length:", (input as string).length);
    } else if (typeof input === "number") {
      console.log("   Number squared:", (input as number) ** 2);
    } else {
      console.log("   Unknown type");
    }
  }
  handleUnknown("TypeScript");
  handleUnknown(9);
  