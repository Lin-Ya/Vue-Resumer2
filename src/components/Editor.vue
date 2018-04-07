<template>
  <div id="Editor">
    <nav class="field">
      <ul>
        <li v-for="item in resume.config" v-bind:key="item.field" v-bind:class="{active: navselected === item.field}" v-on:click="navselected = item.field">
          <svg class="icon" aria-hidden="true">
              <use v-bind:xlink:href="`#icon-${item.field}`"></use>
            </svg>
        </li>
      </ul>
    </nav>
    <div class="subfield">
      <nav>
        <div v-for="item in resume.config" v-bind:key="item.field" v-bind:class="{active: navselected === item.field}">
          {{item.field}}
        </div>
      </nav>
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
      div {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        navselected: "profile",
        resume: {
          config: [{
              field: "profile"
            },
            {
              field: "education"
            },
            {
              field: "workHistory"
            },
            {
              field: "projects"
            },
            {
              field: "awards"
            },
            {
              field: "contacts"
            },
            {
              field: "others"
            }
          ],
          profile: [],
          education: [],
          workHistory: [],
          projects: [],
          awards: [],
          contacts: [],
          others: []
        }
      };
    },
    computed: {}
  };
</script>
