<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
</script>

<main>
  <div class="wins">
    <div class="win">
      <button class="win-btn win-title">Window 1</button>
      <div class="tabs">
        <div class="tab">
          <button class="tab-btn tab-item">
            <img
              class="tab-icon sq-btn"
              src="/googleg_standard_color_128dp.png"
              alt="icon"
            />
            <div class="tab-info">
              <span class="tab-title">Google</span>
              <span class="tab-url">https://www.google.com/</span>
            </div>
          </button>
          <button class="tab-btn sq-btn tab-go-btn">→</button>
          <button class="tab-btn sq-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tab-btn sq-btn tab-close-btn">×</button>
        </div>
        <div class="tab">
          <button class="tab-btn tab-item">
            <img
              class="tab-icon sq-btn"
              src="/favicon-trans-bg-blue-mg-png.png"
              alt="icon"
            />
            <div class="tab-info">
              <span class="tab-title">Bing</span>
              <span class="tab-url">https://www.bing.com/</span>
            </div>
          </button>
          <button class="tab-btn sq-btn tab-go-btn">→</button>
          <button class="tab-btn sq-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tab-btn sq-btn tab-close-btn">×</button>
        </div>
      </div>
    </div>
    <div class="win">
      <button class="win-btn win-title">Window 2</button>
      <div class="tabs">
        <div class="tab">
          <button class="tab-btn tab-item">
            <img class="tab-icon sq-btn" src="/DDG-icon_256x256.png" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">DuckDuckGo — Privacy, simplified.</span>
              <span class="tab-url">https://www.duckduckgo.com/</span>
            </div>
          </button>
          <button class="tab-btn sq-btn tab-go-btn">→</button>
          <button class="tab-btn sq-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tab-btn sq-btn tab-close-btn">×</button>
        </div>
        <div class="tab">
          <button class="tab-btn tab-item">
            <img class="tab-icon sq-btn" src="/hn_favicon.ico" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">Hacker News</span>
              <span class="tab-url">https://news.ycombinator.com/</span>
            </div>
          </button>
          <button class="tab-btn sq-btn tab-go-btn">→</button>
          <button class="tab-btn sq-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tab-btn sq-btn tab-close-btn">×</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .wins {
     display: flex;
  }

  .win {
    text-align: left;
    padding: 2em;
    width: 32em;
    display:grid;
  }

  .win-title {
    width:100%;
  }

  .tab {
    display: flex;
    text-align: left;
    border: 1px solid;
    width:32rem;
  }

  .sq-btn {
    width: 4em;
    /* height: 4em; */
  }

  .tab-btn,
  .win-btn {
    border-radius: 0px;
    height: 4rem;
  }

  .win-btn {
    border: 1px solid;
    /* margin-top: 0.5em; */
    /* height: 100%;   */
    /* width: 32rem; */
  /* height: 3em; */
  }

  .tab-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 20em;
    /* min-height: 3rem; */
    /* padding: 0 1rem; */
    
    overflow: hidden;
  }

  .tab-icon {
    flex: 0 0 1rem;
    height: 1rem;
    margin-right: 1rem;
  }

  .tab-info {
    display: flex;
    text-align: left; /* added PC */
    flex-flow: column nowrap;
    flex: 1;
    min-width: 0;
  }

  /* .tab-box {
  }

  .tab-entry {
  } */

  .tab-title,
  .tab-url {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tab-url {
    font-size: 80%;
    opacity: 0.5;
  }
</style>
