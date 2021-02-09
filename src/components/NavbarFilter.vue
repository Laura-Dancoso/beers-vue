<template>
  <div>
    <b-navbar-nav class="float-right pr-1">
      <b-nav-item :to="to == 1 ? '/sort' : '/'">
        <svg
          id="sort"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <rect fill="none" height="24" width="24" />
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g />
            <g>
              <path
                d="M21.65,7.65l-2.79-2.79C18.54,4.54,18,4.76,18,5.21V7H4C3.45,7,3,7.45,3,8v0c0,0.55,0.45,1,1,1h14v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,8.16,21.84,7.84,21.65,7.65z"
              />
              <path
                d="M2.35,16.35l2.79,2.79C5.46,19.46,6,19.24,6,18.79V17h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6v-1.79 c0-0.45-0.54-0.67-0.85-0.35l-2.79,2.79C2.16,15.84,2.16,16.16,2.35,16.35z"
              />
            </g>
          </g>
        </svg>
        Sort
      </b-nav-item>
      <b-nav-item :to="to == 1 ? '/filter' : '/'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <path d="M0,0h24 M24,24H0" fill="none" />
            <path
              d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
            />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
        </svg>
        Filter
      </b-nav-item>
    </b-navbar-nav>
  </div>
</template>
<script>
export default {
  name: "NavbarFilter",
  props: ["to"],
};
</script>
<style lang="scss" scoped>
$greyColor: #6c6a61;
svg {
  fill: $greyColor;
  &#sort {
    transform: rotate(90deg);
  }
}
</style>
