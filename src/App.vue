<template>
  <div class="wrapper">
    <div class="header">
      <ProxyLabsLogo />
      <GithubLogo />
    </div>
    <h1 class="title">Mina Secret Exchange</h1>
    <h3 class="sub">
      Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
      Snapp Bootcamp 2021.
    </h3>
    <p class="sub-desc">
      The secret exchange allows users to buy imaginary tokens (tokens aren't
      implemented, only simulated) after successfully providing the solution to
      a series of math problems while keeping the solution itself secure and
      private, not exposing it to the network. An exchange to which only
      math-nerds have access!
    </p>
    <div class="content-wrapper">
      <div v-if="atPage == 0">
        <!--         <span
          >Contract deployed under
          B62qk8bcoWGkmLvgSekJf...7bhUAq9Vci4nvgb4z</span
        >
        <span>Your public key: B62qm4QbSnmQWM3x7SUi...xtDvsne7YP4nC8Nh7f</span> -->
        <Loader
          :style="deploying ? 'visibility: visible;' : 'visibility: hidden;'"
        />
        <h2
          style="border: 2px red dotted; margin-left: 40%; margin-right: 40%"
          :style="isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h5 style="margin: 5px">There you go - here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <div
          :style="!isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h3>Possible difficulty of equation</h3>
          <div class="slidecontainer">
            <span>EASY</span>
            <input
              v-model="difficulty"
              type="range"
              min="1"
              max="80"
              value="40"
              class="slider"
            />
            <span>HARD</span>
          </div>
        </div>

        <button v-if="!isDeployed" class="deploy-btn" @click="deploy()">
          <span>Deploy the contract</span>
        </button>
        <button v-if="isDeployed" class="continue-btn" @click="next()">
          <span>Continue</span>
        </button>
      </div>
      <div v-if="atPage == 1">
        <h2 style="border: 2px red dotted; margin-left: 40%; margin-right: 40%">
          <h5 style="margin: 5px">Here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <h5 style="margin-top: 0px">
          Please provide one possible solution to this equation to proceed
        </h5>
        <Loader
          :style="
            beingSubmited ? 'visibility: visible;' : 'visibility: hidden;'
          "
        />
        <div
          class="content"
          style="display: flex; margin-left: 30%; margin-right: 30%"
        >
          <div class="left" style="width: 50%">
            <div
              class="hint"
              :style="showHint ? 'visibility: visible;' : 'visibility: hidden;'"
            >
              <Equation />
            </div>
            <button
              v-if="!showHint"
              class="hint-btn"
              style="margin-top: 12px"
              @click="showHint = true"
            >
              <span>Show Hint</span>
            </button>
            <button
              v-if="showHint"
              class="hint-btn"
              style="margin-top: 20px"
              @click="showHint = false"
            >
              <span>Hide Hint</span>
            </button>
          </div>
          <div class="right" style="width: 50%">
            <h3>Possible solution</h3>
            <span style="font-size: 3rem">x = </span
            ><input type="text" v-model="proposedSolution" class="submission" />
            <br />
            <button
              class="submit-btn"
              style="margin-top: 10px"
              @click="submitSolution()"
            >
              <span>Submit</span>
            </button>
          </div>
          <br />
        </div>
      </div>
      <div v-if="atPage == 2">
        <h2 style="border: 2px red dotted; margin-left: 30%; margin-right: 30%">
          <h5 style="margin: 5px">
            Congratz, you have gained access to the exchange!
          </h5>
        </h2>

        <div
          class="content"
          style="display: flex; margin-left: 10%; margin-right: 10%"
        >
          <div class="left" style="width: 50%">
            <span>You are trading as </span>
            {{ switchAccount }}
            <select v-model="switchAccount">
              <option disabled value="">
                Please the account you want to trade with
              </option>
              <option
                :selected="switchAccount == snappState.account1.address"
                :value="snappState.account1.address"
              >
                {{ snappState.account1.address }}
              </option>
              <option
                :selected="switchAccount == snappState.account2.address"
                :value="snappState.account2.address"
              >
                {{ snappState.account2.address }}
              </option>
            </select>
            <div style="text-align: left">
              <h4>Equation: {{ getEquation() }}</h4>
              <h4>The solution to the equation: x = {{ proposedSolution }}</h4>

              <h4>
                Balance $MINA:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balance.value / 1000000
                    : snappState.account2.balance.value / 1000000
                }}
              </h4>
              <h4>
                Balance $TOKEN:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balanceToken.value / 1000000
                    : snappState.account2.balanceToken.value / 1000000
                }}
              </h4>
            </div>
          </div>
          <div class="right" style="width: 50%">
            <!--             <h4>
              You are interacting with Contract
              <h5 style="font-size: 1rem; margin-top: 2px; font-weight: 400">
                {{ snappState.snapp.address }}
              </h5>
            </h4>  -->
            <div class="swapper">
              <h2>Swap</h2>
              <h3>{{ swap }} - 1 ~ 1</h3>
              <div class="swapBoxes">
                <div class="give">
                  <div class="logo">
                    <Mina v-if="swap == 'MINA/PROXY'" />
                    <Proxy v-else />
                  </div>
                  <input
                    class="swap-input"
                    v-model="swapInAmount"
                    type="text"
                  />
                </div>
                <div @click="changeSwap()" class="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"
                    />
                  </svg>
                </div>
                <div class="for">
                  <div class="logo">
                    <Proxy v-if="swap == 'MINA/PROXY'" />
                    <Mina v-else />
                  </div>
                  <span style="font-size: 3rem">~{{ expectedReturn }}</span>
                </div>
              </div>
              <button
                class="swap-btn"
                style="margin-top: 10px"
                @click="executeSwap()"
              >
                <span>Swap</span>
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <Snackbar v-if="showSnackbar" :snack="snack" />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Equation from "./components/Equation.vue";

import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";
import Snackbar from "./components/Snackbar.vue";
import Mina from "./components/Mina.vue";
import Proxy from "./components/Proxy.vue";

import {
  init,
  submitSolution,
  getState,
  swapToken,
} from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
    Snackbar,
    Mina,
    Proxy,
  },
  data() {
    return {
      swap: "MINA/PROXY",
      swapInAmount: 0,
      switchAccount: "",
      params: [0, 0, 0],
      difficulty: 40,
      isDeployed: false,
      deploying: false,
      showHint: false,
      beingSubmited: false,
      proposedSolution: 0,
      atPage: 0,
      showSnackbar: false,
      snappState: {},
      snack: {
        type: "failure",
        message: "Request failed",
      },
    };
  },
  methods: {
    changeSwap() {
      if (this.swap == "MINA/PROXY") {
        this.swap = "PROXY/MINA";
      } else {
        this.swap = "MINA/PROXY";
      }
    },
    async executeSwap() {
      let acc =
        this.selectedAccount == this.snappState.account1.address ? 0 : 1;
      let res = await swapToken(
        this.swap,
        this.swapInAmount,
        acc,
        this.proposedSolution
      );
      console.log(res);
    },
    async updateSnappState() {
      let state = await getState();

      console.log(state);
      this.snappState = {
        account1: state.account1,
        account2: state.account2,
        snapp: state.snapp,
      };
      console.log(this.snappState);
    },
    setSnackbar(type, msg) {
      this.showSnackbar = false;
      this.snack.type = type;
      this.snack.message = msg;
      this.showSnackbar = true;
      setTimeout(() => {
        this.showSnackbar = false;
      }, 3500);
    },
    async submitSolution() {
      this.beingSubmited = true;
      let res = await submitSolution(this.proposedSolution);

      if (res) {
        this.setSnackbar(
          "success",
          "Congratz! You found one valid solution to the equation. Please proceed"
        );
      } else {
        this.setSnackbar(
          "failure",
          "Failure. Looks like the provided solution doesn't work!"
        );
      }
      this.beingSubmited = false;

      if (res) {
        this.next();
        await this.updateSnappState();
        this.switchAccount = this.snappState.account1.address;
      }
    },
    getEquation() {
      let eq = `${this.params[0]}x² - ${this.params[1]}x + ${this.params[2]} = 0`;
      if (this.params[1] != 0 && this.params[2] != 0) {
        eq = `${this.params[0]}x² - ${this.params[1]}x + ${this.params[2]} = 0`;
      }
      if (this.params[1] == 0 && this.params[2] != 0) {
        eq = `${this.params[0]}x² + ${this.params[2]} = 0`;
      }
      if (this.params[1] == 0 && this.params[2] == 0) {
        eq = `${this.params[0]}x² = 0`;
      }
      if (this.params[1] != 0 && this.params[2] == 0) {
        eq = `${this.params[0]}x² - ${this.params[1]}x = 0`;
      }
      return eq;
    },
    next() {
      this.atPage++;
    },
    async deploy() {
      this.deploying = true;
      this.params = await init(this.difficulty);

      this.setSnackbar("info", "Contract deployed!");

      this.beingSubmited = false;
      this.isDeployed = true;
      this.deploying = false;
    },
  },
  computed: {
    expectedReturn() {
      return this.swapInAmount;
    },
    selectedAccount() {
      return this.switchAccount == this.snappState.account1.address ? 0 : 1;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inconsolata", sans-serif;
}

.swap-input {
  border: none;
  font-size: 3rem;
  width: 90%;
  float: right;
  text-align: right;
}

.swapper {
  height: 340px;
  width: 400px;
  margin-left: 100px;
  border-radius: 15px;
  border: solid 2px black;
  background-color: rgb(223, 223, 223);
}
.swapBoxes {
  height: 140px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  position: relative;
}

.give .logo,
.for .logo {
  position: absolute;
  left: -30px;
  top: 2px;
}

.give,
.for {
  margin-left: 5%;
  margin-right: 5%;
  height: 60px;
  border: solid 2px black;
  border-radius: 15px;
  background-color: white;
  position: relative;
  text-align: right;
  padding-right: 15px;
}

.give {
  margin-bottom: 10px;
}

.arrow {
  border: 2px solid black;
  width: 30px;
  height: 30px;
  position: static;
  z-index: 2;
  margin-left: calc(50% - 15px);
  position: absolute;
  top: calc(70px - 17px);
  border-radius: 5px;
  left: 0;
  padding-top: 2px;
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
}

.arrow:hover {
  scale: 1.03;
  cursor: pointer;
}
.arrow svg {
  color: white;
  margin: 0;
  padding: 0;
}

.header {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
}

.logo,
.github {
  height: 60px;
  line-height: 60px;
  padding: 4px;
  margin-left: 5px;
}

.github {
  margin-top: 10px;
  height: 30px;
}

.swap-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.deploy-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.continue-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(254, 255, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.hint-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(255, 208, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.submit-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 239, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}
.swap-btn:hover,
.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}

.swap-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.submit-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.hint-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.deploy-btn span,
.continue-btn span {
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
}

.sub {
  margin-top: 20px;
  font-size: 1.2rem;
  /*   border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214); */
}

.sub-desc {
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214);
}

.submission {
  font-size: 2rem;
  width: 50px;
  margin-top: 6px;
  text-align: center;
}

.wrapper {
  font-family: "Inconsolata", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.slider {
  -webkit-appearance: none;
  width: 300px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}
</style>
