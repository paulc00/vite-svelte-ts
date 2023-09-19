<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
</script>

<main>
  <!-- <div class="btn-group">
    <button type="button" class="btn btn__primary">B1</button>
    <button type="button" class="btn btn__primary">B2</button>
    <button type="button" class="btn btn__primary">B3</button>
  </div> -->
  <ul class="wins">
    <li class="win">
      <button class="win-btn win-title">Window 1</button>
      <ul class="tabs">
        <li class="tab">
          <button class="tabs-btn tab-item">
            <img class="tab-icon" src="/googleg_standard_color_128dp.png" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">Google</span>
              <span class="tab-url">https://www.google.com/</span>
            </div>
          </button>
          <button class="tabs-btn tab-go-btn">→</button>
          <button class="tabs-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tabs-btn tab-close-btn">×</button>
        </li>
        <li class="tab">
          <button class="tabs-btn tab-item">
            <img class="tab-icon" src="/favicon-trans-bg-blue-mg-png.png" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">Bing</span>
              <span class="tab-url">https://www.bing.com/</span>
            </div>
          </button>
          <button class="tabs-btn tab-go-btn">→</button>
          <button class="tabs-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tabs-btn tab-close-btn">×</button>
        </li>
      </ul>
    </li>
    <li class="win">
      <button class="win-btn win-title">Window 2</button>
      <ul class="tabs">
        <li class="tab">
          <button class="tabs-btn tab-item">
            <img class="tab-icon" src="/DDG-icon_256x256.png" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">DuckDuckGo — Privacy, simplified.</span>
              <span class="tab-url">https://www.duckduckgo.com/</span>
            </div>
          </button>
          <button class="tabs-btn tab-go-btn">→</button>
          <button class="tabs-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tabs-btn tab-close-btn">×</button>
        </li>
        <li class="tab">
          <button class="tabs-btn tab-item">
            <img class="tab-icon" src="/hn_favicon.ico" alt="icon" />
            <div class="tab-info">
              <span class="tab-title">Hacker News</span>
              <span class="tab-url">https://news.ycombinator.com/</span>
            </div>
          </button>
          <button class="tabs-btn tab-go-btn">→</button>
          <button class="tabs-btn tab-susp-btn">Z<sup>Z</sup></button>
          <button class="tabs-btn tab-close-btn">×</button>
        </li>
      </ul>
    </li>
  </ul>
</main>

<style>
  .wins, .tabs {
    list-style-type: none;
  }

  .win {
    text-align: left;
     }

  .tab {
		display: flex;
    text-align: left;
  }

  .tabs-btn, .win-btn {
    border-radius: 0px;
  }

  .win-btn {
    margin-top: 0.5em;
  }

  .tab-item {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		width: 100%;
		min-height: 3rem;
		padding: 0 1rem;
		overflow: hidden;
  }

  .tab-icon {
		flex: 0 0 1rem;
		height: 1rem;
		margin-right: 1rem;
  }

  .tab-info {
		display: flex;
    text-align:left; /* added PC */
		flex-flow: column nowrap;
		flex: 1;
		min-width: 0;
	}

  /* .tab-box {
  }

  .tab-entry {
  } */

  .tab-title, .tab-url {
    overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
  }

  .tab-url {
		font-size: 80%;
		opacity: 0.5;
  }
</style>
