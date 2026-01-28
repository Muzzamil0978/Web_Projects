import {
  userLoginFoo,
  userSignUpFoo,
  getAllData,
  getSingleData,
  getUsersDetails,
  getLogedinUsers,
} from "../firebase.js";

getLogedinUsers();

const spassword = document.getElementById("spass");
const bar = document.getElementById("mbar");

document.getElementById("signupTrigger").addEventListener("click", () => {
  function setMode(isSignup) {
    document
      .getElementById("frame")
      .classList.toggle("signup-active", isSignup);
  }
  setMode(true);
});

document.getElementById("loginTrigger").addEventListener("click", () => {
  function setMode(isSignup) {
    document
      .getElementById("frame")
      .classList.toggle("signup-active", isSignup);
  }
  setMode(false);
});

document.getElementById("passwordControl").addEventListener("click", (e) => {
  (function (id, btn) {
    const x = document.getElementById(id);
    if (x.type === "password") {
      document.getElementById(id).type = "text";
      e.target.innerText = "Hide";
    } else {
      document.getElementById(id).type = "password";
      e.target.innerText = "Show";
    }
  })("lpass", this);
});

document.getElementById("passwordControl2").addEventListener("click", (e) => {
  (function (id, btn) {
    const x = document.getElementById(id);
    if (x.type === "password") {
      document.getElementById(id).type = "text";
      e.target.innerText = "Hide";
    } else {
      document.getElementById(id).type = "password";
      e.target.innerText = "Show";
    }
  })("spass", this);
});

document.getElementById("spass").addEventListener("input", (e) => {
  function strength(p) {
    let s = p.length * 10;
    if (s > 100) s = 100;
    bar.style.width = s + "%";
    bar.style.background = s < 50 ? "#f24b4b" : s < 80 ? "#fbbf24" : "#22c55e";
  }
  strength(spassword.value);
});

document.querySelector("#validateLog").addEventListener("click", () => {
  (async function () {
    console.log("running");

    const e = document.getElementById("lemail");
    const p = document.getElementById("lpass");
    const verification = e.value.split("@");

    // const allUserData = await getAllUsersDetails('Users')
    // console.log(allUserData)

    document
      .getElementById("lE")
      .classList.toggle(
        "error",
        !e.value.includes("@") ||
          !(e.value.slice(-4) == ".com") ||
          verification[0] == "" ||
          e.value.split(".")[0].slice(-1) == "@",
      );
    document.getElementById("lP").classList.toggle("error", p.value.length < 1);
    if (
      e.value.includes("@") &&
      e.value.slice(-4) == ".com" &&
      !(verification[0] == "") &&
      !(e.value.split(".")[0].slice(-1) == "@")
    ) {
      // console.log("All conditions were right");
      const result = await userLoginFoo(e.value, p.value);
      if (result.success) {
        // console.log("Logged in successfully!");
      } else {
        // console.log(result?.errorCode);
        // console.log(result.success);
        document
          .getElementById("invalidInput")
          .classList.toggle("error2", !result.success);
      }
    }
    [e, p].forEach(
      (el) => (el.oninput = () => el.parentElement.classList.remove("error")),
    );
  })();
});

document.getElementById("validateSignup").addEventListener("click", (e) => {
  (async function validateSignup() {
    console.log("running");
    const u = document.getElementById("suser");
    const e = document.getElementById("semail");
    const p = document.getElementById("spass");
    const t = document.getElementById("terms");
    const verification = e.value.split("@");

    document
      .getElementById("sU")
      .classList.toggle("error", u.value.trim() === "");
      document.getElementById('sEe').innerText ="Valid email required."

    document
      .getElementById("sE")
      .classList.toggle(
        "error",
        !e.value.includes("@") ||
          !(e.value.slice(-4) == ".com") ||
          verification[0] == "" ||
          !(e.value.split(".")[0].slice(-1) != "@"),
      );
    document.getElementById("sP").classList.toggle("error", p.value.length < 8);
    document.getElementById("termsBox").classList.toggle("error", !t.checked);
    // console.log(
    //   e.value.includes("@") &&
    //     e.value.slice(-4) == ".com" &&
    //     verification[0] != "" &&
    //     !(e.value.split(".")[0].slice(-1) == "@"),
    // );
    if (
      e.value.includes("@") &&
      e.value.slice(-4) == ".com" &&
      !(verification[0] == "") &&
      !(e.value.split(".")[0].slice(-1) == "@") &&
      t.checked
    ) {
      console.log("All conditions were right");
     const result = await userSignUpFoo(e.value, p.value, u.value);

    //  console.log(!result.success)
     if(!(result.success)){
      document.getElementById('sEe').innerText ="Email already exists ."
      document
      .getElementById("sE")
      .classList.toggle(
        "error",true);
     }
      //  console.log(user)
      //   setUserData(uid,u.value,e.value,p.value);
    }
  })();
});
// setUserData()
