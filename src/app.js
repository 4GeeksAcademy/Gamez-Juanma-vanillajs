/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuseGenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let positionWho = Math.floor(Math.random() * who.length);
    let positionAction = Math.floor(Math.random() * action.length);
    let positionWhat = Math.floor(Math.random() * what.length);
    let positionWhen = Math.floor(Math.random() * when.length);
    let completeExcuse =
      who[positionWho] +
      " " +
      action[positionAction] +
      " " +
      what[positionWhat] +
      " " +
      when[positionWhen];
  }
  document.querySelector("#excuseGenerator").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};
