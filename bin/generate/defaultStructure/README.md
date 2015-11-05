# hangr Application

## Run Development

Development mode is run using nodemon in conjunction with browser-sync. The application is run on the standard port (55555).
It is proxied by browser-sync to port 3000.  Allows all browsers (desktop, tablet, mobile,...) to have the same view across
all connected devices.  Changes are detected and the browser automatically updated making development simple.

```bash
hangr # Shortcut for 'hangr start'
```

[Development hangr Application](http://localhost:3000)

## Run Production
```bash
hangr deploy
```

[Production hangr Application](http://localhost:55555)