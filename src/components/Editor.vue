<template>
  <div id="Editor">
    <nav class="field">
      <ul>
        <li v-bind:class="{active: navselected === 'profile'}" v-on:click="navselected = 'profile'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-profile"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'education'}" v-on:click="navselected = 'education'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-education"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'workHistory'}" v-on:click="navselected = 'workHistory'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-workHistory"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'projects'}" v-on:click="navselected = 'projects'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-projects"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'awards'}" v-on:click="navselected = 'awards'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-awards"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'contacts'}" v-on:click="navselected = 'contacts'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-contacts"></use>
          </svg>
        </li>
        <li v-bind:class="{active: navselected === 'others'}" v-on:click="navselected = 'others'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-others"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <div class="subfield">
      <span>
      </span>
    </div>
  </div>
</template>

<style lang="less">
#Editor {
  display: flex;
  flex-direction: row;
  .field {
    width: 80px;
    height: 100%;
    background-color: black;
    ul {
      li {
        cursor: pointer;
        height: 80px;
        fill: #fff;
        svg {
          width: 48px;
          height: 48px;
          padding: 16px;
          fill: inherit;
        }
        &.active {
          background-color: #fff;
          fill: #000;
        }
      }
    }
  }
  .subfield {
    flex: 1;
    overflow: hidden;
  }
}
</style>

<script>
export default {
  data() {
    return {
      navselected: "",
      resume: {
        config: [
          { field: "profile" },
          { field: "education" },
          { field: "workHistory" },
          { field: "projects" },
          { field: "awards" },
          { field: "contacts" },
          { field: "others" }
        ],
        profile:[],
        education:[],
        workHistory:[],
        projects:[],
        awards:[],
        contacts:[],
        others:[],
      }
    };
  },
  computed: {}
};
</script>
