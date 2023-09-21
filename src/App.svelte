<script lang="ts">
import svelteLogo from "./assets/svelte.svg";
import viteLogo from "/vite.svg";

interface Tab {
  // should we use optional fields, like 'url?', or undefined values, '|undefined'?
  // windowId: number;
  id: number | undefined;
  title: string | undefined;
  url: string | undefined;
  favIconUrl: string | undefined;
  active: boolean;
}

interface Win {
  id: number;
  tabs: Tab[];
}

let wins: Win[] = [
  {
    id: 1,
    tabs: [
      {
        id: 1,
        title: "Google",
        url: "https://www.google.com/",
        favIconUrl: "/googleg_standard_color_128dp.png",
        active: false,
      },
      {
        id: 2,
        title: "Bing",
        url: "https://www.bing.com/",
        favIconUrl: "/favicon-trans-bg-blue-mg-png.png",
        active: false,
      },
    ],
  },
  {
    id: 2,
    tabs: [
      {
        id: 1,
        title: "DuckDuckGo — Privacy, simplified.",
        url: "https://www.duckduckgo.com/",
        favIconUrl: "/DDG-icon_256x256.png",
        active: false,
      },
      {
        id: 2,
        title: "Hacker News",
        url: "https://news.ycombinator.com/",
        favIconUrl: "/hn_favicon.ico",
        active: false,
      },
    ],
  },
];
</script>

<main>
  <div class="wins">
    {#each wins as win}
      <div class="win">
        <div class="win-item">
          <button class="win-title">Window {win.id}</button>
          <button hidden class="win-susp-btn sq-btn">Z<sup>Z</sup></button>
          <button hidden class="win-close-btn sq-btn">×</button>
        </div>
        <div class="tabs">
          {#each win.tabs as tab}
            <div class="tab">
              <button class="tab-item">
                <img class="tab-icon sq-btn" src="{tab.favIconUrl}" alt="icon" />
                <div class="tab-info">
                  <span class="tab-title">{tab.title}</span>
                  <span class="tab-url">{tab.url}</span>
                </div>
              </button>
              <button class="tab-go-btn sq-btn">→</button>
              <button class="tab-susp-btn sq-btn">Z<sup>Z</sup></button>
              <button class="tab-close-btn sq-btn">×</button>
            </div>
          {/each}
        </div>
      </div>
    {/each}
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
  .win-item {
    display: flex;
    margin-top: 0.5em;
    border: 1px solid;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
  }

  .win-title {
    width:100%;
    height: 4em;
  }

  .tabs {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid;
  }

  .tab {
    display: flex;
    text-align: left;
    border: 1px solid;
    border-bottom: 0;
    width:32em;
  }

  .sq-btn {
    border-radius: 0px;
    height: 4em;
    width: 4em;
  }

  .tab-item {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    align-items: center;
    width: 20em;
  }

  .tab-icon {
    flex: 0 0 1em;
    height: 1em;
    margin-right: 1em;
  }

  .tab-info {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    min-width: 0;
    text-align: left; /* added PC */
  }

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
