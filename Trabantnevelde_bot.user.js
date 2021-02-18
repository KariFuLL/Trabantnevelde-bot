// ==UserScript==
// @name Open Trabantnevelde bot
// @author Szente Daniel
// @version 0.1
// @description  Login automaticly and starts the job 3
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
        }, 1500);
    }, 5000);

})();
