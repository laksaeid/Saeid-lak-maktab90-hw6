"use strict";
const ask = (question, yes, no) => confirm(question) ? yes() : no();
ask('do you agree?', () => alert('you agreed.'), () => alert('you canceled the execution.'));
