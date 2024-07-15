Sure! Let's walk through the process of setting up PHP, npm, and Visual Studio Code on a Mac to write and run a sample PHP program.

### Step 1: Install PHP

1. **Open Terminal**.
2. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. **Install PHP** using Homebrew:
   ```bash
   brew install php
   ```
4. **Verify PHP Installation**:
   ```bash
   php -v
   ```
   You should see the PHP version information.

### Step 2: Install Node.js and npm

1. **Open Terminal**.
2. **Install Node.js and npm** using Homebrew:
   ```bash
   brew install node
   ```
3. **Verify Installation**:
   ```bash
   node -v
   npm -v
   ```

### Step 3: Install Visual Studio Code

1. **Download Visual Studio Code** from the [official website](https://code.visualstudio.com/).
2. **Install Visual Studio Code** by opening the downloaded file and dragging Visual Studio Code to the Applications folder.

### Step 4: Initialize npm in Your Project

1. **Open Terminal**.
2. **Navigate to Your Project Directory**:
   ```bash
   mkdir my-php-project
   cd my-php-project
   ```
3. **Initialize npm**:
   ```bash
   npm init -y
   ```

### Step 5: Install Browsersync for Live-Reloading

1. **Install Browsersync**:
   ```bash
   npm install browser-sync --save-dev
   ```

### Step 6: Configure Browsersync for PHP

1. **Create a Configuration File**:
   - In your project directory, create a file named `bs-config.js` with the following content:
     ```javascript
     module.exports = {
         proxy: "localhost:8000",
         files: ["**/*.php"],
         port: 3000,
         open: false,
         notify: false
     };
     ```

2. **Add Scripts to `package.json`**:
   - Open `package.json` in a text editor and add the following scripts:
     ```json
     "scripts": {
       "start": "php -S localhost:8000",
       "watch": "browser-sync start --config bs-config.js"
     }
     ```

### Step 7: Create a Sample PHP Program

1. **Open Visual Studio Code**.
2. **Open Your Project Directory**:
   - Go to `File` > `Open` and select your `my-php-project` directory.
3. **Create a PHP File**:
   - In your project directory, create a file named `index.php`.
4. **Write Sample PHP Code**:
   ```php
   <?php
   echo "Hello, World!";
   ?>
   ```

### Step 8: Run Your PHP Program with Live-Reloading

1. **Open Two Terminals**:
   - In Visual Studio Code, open the integrated terminal by clicking `View` > `Terminal`.

2. **Start PHP Server** in the first terminal:
   ```bash
   npm run start
   ```

3. **Start Browsersync** in the second terminal:
   ```bash
   npm run watch
   ```

4. **View Your PHP Program**:
   - Open your browser and go to `http://localhost:3000`.
   - You should see the output `Hello, World!`.

This setup allows you to write and run a PHP program with live-reloading using npm and Visual Studio Code on a Mac.