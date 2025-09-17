# [osModule.js](../../osModule/osModule.js) Documentation

## <p style="color:deepskyblue">What Is the `os` Module?</p>

- A **built-in Node.js module** that provides information about the operating system.
- Useful for system-related utilities (CPU info, memory, host details, etc).

### Basic Usage

```js
const os = require("os");

console.log(os.type()); // Operating system name
console.log(os.platform()); // Platform (win32, linux, darwin)
console.log(os.arch()); // CPU architecture
console.log(os.hostname()); // Hostname of the machine
console.log(os.version()); // OS version
```

### <p style="color:coral">Commonly Used `os` Methods with Examples:</p>

1. **System Info**

```js
os.type(); // 'Windows_NT', 'Linux', 'Darwin'
os.platform(); // 'win32', 'linux', 'darwin'
os.arch(); // 'x64', 'arm', etc
os.version(); // OS version string
os.hostname(); // Machine hostname
```

2. **User & Network Info**

```js
os.userInfo(); // { username: 'Harsh', homedir: 'C:\\Users\\Harsh' }
os.homedir(); // Home directory
os.networkInterfaces(); // Network details (IP, MAC, etc)
```

3. **CPU & Memory Info**

```js
os.cpus(); // Array with CPU core details
os.totalmem(); // Total system memory (in bytes)
os.freemem(); // Free memory (in bytes)
os.loadavg(); // Average CPU load (Linux/macOS only)
```

4. **System Uptime & Constants**

```js
os.uptime(); // System uptime in seconds
os.constants; // Useful error/system constants
os.endianness(); // 'LE' or 'BE' (endianness of CPU)
```

### Sample Output:

```js
{
  "type": "Windows_NT",
  "platform": "win32",
  "arch": "x64",
  "hostname": "Harsh-PC",
  "version": "Windows 10 Pro",
  "totalmem": 17179869184,
  "freemem": 8463544320,
  "uptime": 12456
}
```
