<template>
  <div id="snackbar">
    {{ $props.snack.message }}
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: ["snack"],
  mounted() {
    var x = document.getElementById("snackbar");

    x.className = "";
    x.classList.add("show");
    console.log(this.$props.snack.type);
    if (this.$props.snack.type == "failure") {
      x.classList.add("type-failure");
    } else if (this.$props.snack.type == "success") {
      x.classList.add("type-success");
    } else {
      x.classList.add("type-info");
    }
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  },
};
</script>

<style scoped>
.type-failure {
  background-color: red !important;
}

.type-success {
  background-color: rgb(39, 138, 0) !important;
}

.type-info {
  background-color: rgb(0, 138, 138) !important;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 80%;
  margin-right: 50px;
  bottom: 30px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 4px 4px rgb(121, 121, 121);
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
