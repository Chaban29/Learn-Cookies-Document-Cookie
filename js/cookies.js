'use strict';

document.cookie = 'user=Roman';

let name = 'user name';
let value = 'Roman Chaban';

document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

document.cookie = 'user=John; path=/; expires=Sun, 19 2024 domain=site.com';
console.log(document.cookie);

document.cookie = 'user=Roman; max-age=7200; secure; samesite=lax';

console.log(document.cookie);

