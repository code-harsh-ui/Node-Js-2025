const os = require("os");

console.log(os.type()); // Operating system name
console.log(os.platform()); // Platform (win32, linux, darwin)
console.log(os.arch()); // CPU architecture
console.log(os.hostname()); // Hostname of the machine
console.log(os.version()); // OS version

console.log(os.userInfo());
console.log(os.cpus());
console.log(os.uptime());
