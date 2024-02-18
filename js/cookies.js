'use strict';

document.cookie = 'user=Roman';

let name = 'user name';
let value = 'Roman Chaban';

document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

document.cookie = 'user=John; path=/; expires=Sun, 19 2024 domain=site.com';
console.log(document.cookie);

document.cookie = 'user=Roman; max-age=7200; secure; samesite=lax';

console.log(document.cookie);

document.cookie = 'httpOnly';


const setCookies = (name, value, options = {}) => {
  options = {
    path: '/',
    ...options,
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);
    for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }
  document.cookie = updatedCookie;
};

setCookies('user', 'Roman', { secure: true, 'max-age': 3600 });

const deleteCookie = (name) => {
  setCookies(name, '', {
    'max-age': -1,
  });
};

console.log(document.cookie);