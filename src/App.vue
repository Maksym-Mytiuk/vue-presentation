<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {}
  }
</script>

<style lang="scss">
  @import "~normalize.css";

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #fff;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  h1 {
    font-size: 2.75em;
    line-height: 0;
  }

  a {
    color: #214f3a;
    &.router-link-exact-active {
      color: #000000;

    }
  }

  pre {
    line-height: 1.5;
    padding-left: 10px;
    font-size: 1.5em;
    span {
      color: #0d041c;
    }
    &:before {
      font-size: 0.75rem;
      content: attr(rel);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #fff;
      padding: 0;
      background: #5a5a5a;
      text-indent: 15px;
    }
  }

  .container {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-template-rows: minmax(550px, auto);
    margin: 4em 25px 0;
    > p {
      width: 95%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -10px;
    }
    .css-area {
      position: relative;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 1em;
      }

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: #5a5a5a;
        outline: 1px solid slategrey;
      }
    }
    .info {
      p {
        font-size: 1.25em;
        line-height: 1;
      }
    }
    .styles {
      width: 100%;
      min-height: 400px;
      display: grid;
      grid-template-columns: 30px 1fr;
      background-color: #f3f3f3;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: -1px 2px 10px 0px rgba(0, 0, 0, 0.6);
    }
    .counter {
      padding: 1.5em 0;
      background: #5a5a5a;
      color: #fff;
      p {
        margin: 0;
        font-family: monospace, monospace;
        font-size: 1.5em;
        text-align: center;
        line-height: 1.5;
      }
    }
    textarea {
      width: 100%;
      height: 23px;
      margin-bottom: -5px;
      background: transparent;
      color: #000000;
      border: none;
      border-bottom: 1px solid;
      outline: none;
      overflow: auto;
      resize: none;
    }
  }

  .grid-block {
    padding: 25px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: -1px 2px 10px 0px rgba(0, 0, 0, 0.6);
  }

  .grid {
    height: 100%;
  }

  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 2em;
    color: #fff;
    background: #0092dd;
    border: 1px solid;
  }

  input[type="range"] {
    -webkit-appearance: none;
    background-color: #bdc3c7;
    width: 80%;
    height: 10px;
    border-radius: 10px;
    margin: 0 auto;
    outline: 0;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #4178ff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    transition: .1s linear;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1.3);
  }
</style>
