<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Our team</h3>
    <ul>
      <li>
        <a href="https://github.com/jsprieto10" target="_blank" rel="noopener"
          >jsprieto10</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 5% 0 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #039afa;
}
</style>
