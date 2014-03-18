![Logo](https://raw.github.com/FuzzyBearBTC/peercoin-walletgenerator/master/images/Peercoin_Address_Logo.png)

## JavaScript Client-Side Peercoin Wallet Generator
>### [wallet.peercointalk.org](http://wallet.peercointalk.org)

Peercoin addresses and their corresponding private key can now be conveniently
generated in a web browser.

The [wallet.peercointalk.org](http://wallet.peercointalk.org) project provides an
all-in-one HTML document with embedded JavaScript/Css/Images. The JavaScript is
readable (not minified) and contains no XMLHttpRequest's (no AJAX). The benefit
of this technique is you can load the JavaScript locally and trust that the
JavaScript did not change after being loaded.

Here is a link to the peercointalk.org forum topic discussing this project:
http://www.peercointalk.org/index.php?topic=1943.0


---


### Helping Out

#### Donating

Peercoin Donation Address: **```PPW6NBgZzWXzW89HRg3V4M77eM3Zu5yDcR```**

![Donation QR Code](https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=PPW6NBgZzWXzW89HRg3V4M77eM3Zu5yDcR&chld=L|1&choe=UTF-8)


Please send donations to the above address in order to encourage development contributions, such as code improvements, translations, etc.

#### Contributing

[![tip for next commit](http://peer4commit.com/projects/3.svg)](http://peer4commit.com/projects/3)

If you'd like to contribute code to the project, please send a pull request with your improvements.

Each commit that gets pulled into the project's Git repo will receive a tip via [peer4commit.com](http://peer4commit.com).

The current reward for the next tip is shown above. You will receive that amount of
peercoins for each commit you contribute to the project.


---


### END USER NOTES:

 1. To print QRCode in IE8 you must enable the "Print Background Colors and
    Images" checkbox on the "Page Setup" screen.

 2. For Bulk Wallet I recommended using Google Chrome, it's the fastest.

 3. Requires IE8+, Firefox, Chrome or sufficient JavaScript support.

 4. Mobile Safari only works with iPhone4 or newer devices.
    Older devices timeout while executing JavaScript.

 5. DO NOT use Opera Mini it renders JavaScript output server side, therefore
    they might record the private key you generated.

 6. Art Wallet does not work properly in IE8 due to CSS limitations.


---


Notice of Copyrights and Licenses:
---------------------------------------
The wallet.peercointalk.org project, software and embedded resources are copyright peercointalk.org
The wallet.peercointalk.org name and logo are not part of the open source license.

Portions of the all-in-one HTML document contain JavaScript codes that are the copyrights
of others. The individual copyrights are included throughout the document along with their
licenses. Included JavaScript libraries are separated with HTML script tags.

Summary of JavaScript functions with a redistributable license:

| JavaScript function   |   License         |
| -------------------   |   --------------  |
| Array.prototype.map   |   Public Domain   |
| window.Crypto         |   BSD License     |
| window.SecureRandom   |   BSD License     |
| window.EllipticCurve  |   BSD License     |
| window.BigInteger     |   BSD License     |
| window.QRCode         |   MIT License     |
| window.Peercoin       |   MIT License     |

The wallet.peercointalk.org software is available under The MIT License (MIT)
Copyright (c) 2014 wallet.peercointalk.org

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
