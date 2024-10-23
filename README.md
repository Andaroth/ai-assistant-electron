# ChatGPT Electron

## Requirements

- xdotool `apt install xdotool`
- wmctrl `apt install wmctrl`
- [NodeJS](https://nodejs.org) v20 or +

## Development

Start project:

```sh
$ npm i
$ npm run dev
```

## Installation

### Generate package
```sh
$ npm i
$ npm run package
```
This will create `out/chatgpt-electron-linux-x64` folder which contains the executable file for Debian.

You can directly run `/chatgpt-electron-linux-x64/chatgpt-electron` or you may want to use it in a "widget":

### Use on debian

1. Move this `chatgpt-electron-linux-x64` folder anywhere you like it

2. Copy `run_debian/open_chatgpt.sh` anywhere you like it

3. Edit line 17 `./chatgpt-electron-linux-x64/chatgpt-electron` to open window at expected locations

5. Edit line 25 on your new `open_chatgpt.sh` to place the window where you like it

6. Run your `./open_chatgpt.sh` and enjoy