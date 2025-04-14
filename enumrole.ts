// 5) Enum and role-based function
export enum Role {
    Admin,
    Editor,
    Viewer,
  }
  
  export function printRoleMessage(role: Role): void {
    switch (role) {
      case Role.Admin:
        console.log("5) Welcome, Admin!");
        break;
      case Role.Editor:
        console.log("   You can edit content.");
        break;
      case Role.Viewer:
        console.log("   You can view content.");
        break;
    }
  }
  
  // Simulate calling from another file
  import { Role, printRoleMessage } from "./q1"; // ⬅️ Importing from the other file
  
  printRoleMessage(Role.Editor); // ⬅️ Calling function with Role.Editor
  