// ==UserScript==
// @name Open Trabantnevelde bot
// @namespace http://hibbard.eu/
// @version 0.1
// @description  Opens links from the CodeProject newsletter
// @match http://www.trabantnevelde.sztvm.org/
// @match http://www.trabantnevelde.sztvm.org/index.php
// ==/UserScript==

(function () {
    'use strict';
    const username = "username_here";
    const password = "password here";

    const form = document.forms;
    const lname = document.getElementById("Editbox1");
    const lpass = document.getElementById("Editbox2");

    setTimeout(() => {
        try {
            lname.value = username;
            lpass.value = password;
            form.item(0).submit();
        } catch (error) {
        }
    }, 1000);

    setTimeout(() => {
        const tab = window.open('http://www.trabantnevelde.sztvm.org/munka.php?id=3');
        setTimeout(() => {
            tab.close();
        }, 3000);
    }, 5000);

})();
