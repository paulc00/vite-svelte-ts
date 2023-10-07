<script lang="ts" type="module">


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
  let wins: Win[] = [];

  const inChromeExt: boolean =
    typeof window.chrome !== "undefined" &&
    typeof chrome.runtime !== "undefined" &&
    typeof chrome.runtime.id !== "undefined";

  if (inChromeExt) {
    // TODO: Need to move the query to backgrouod / service worker ?
    // FIXME: Need generics to fix this I think

    function pivotTabByWin (tabs: chrome.tabs.Tab[]) {
      let wins: Win[];
      tabs.forEach(function (this: chrome.tabs.Tab[], tab) {
        if (!this[tab.windowId]) {
          this[tab.windowId] = {windowId: tab.windowId, tabs: []};
          wins.push(this[tab.windowId]);
        }
        this[tab.windowId].tabs.push({id: tab.id, title: tab.title});
        }, Object.create(null)
      )

    }

    // Code is running in a Chrome extension (content script, background page, etc.)
    // Read windows and tabs using Chrome API
    // (async () => {
      let tabsHier;

      async function getTabHier() {
        const tabs = await chrome.tabs.query({});


      }


    // })();

    // We should have the tabs in the Promise at this point
    // Rearrange tabs into wins
    // Go through the tabs and extract the wins
    // Populate wins array
    let tabsList: chrome.tabs.Tab[] = [];

    // tabsPromise.then((tabs) => console.log(tabs));
    // tabsPromise.then((tabs) => tabsList = tabs);
    // console.log(tabsList);

    wins = [
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
    ];
  } else {
    // Code is not running in a Chrome extension (content script, background page, etc.)
    // Use mockup
    wins = [
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
  }
</script>

<main>
  <div class="wins">
    {#each wins as win}
      <div class="win">
        <div class="win-item">
          <button class="win-title-btn">Window {win.id}</button>
          <button hidden class="win-susp-btn sq-btn">Z<sup>Z</sup></button>
          <button hidden class="win-close-btn sq-btn smch">×</button>
        </div>
        <div class="tabs">
          {#each win.tabs as tab}
            <div class="tab">
              <button class="tab-item">
                <img class="tab-icon sq-btn" src={tab.favIconUrl} alt="icon" />
                <div class="tab-info">
                  <span class="tab-title">{tab.title}</span>
                  <span class="tab-url">{tab.url}</span>
                </div>
              </button>
              <button class="tab-go-btn sq-btn smch">→</button>
              <button class="tab-susp-btn sq-btn">Z<sup>Z</sup></button>
              <button class="tab-close-btn sq-btn smch">×</button>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>

<!-- TODO: check global CSS, maybe remove it? -->
<!-- TODO: Some buttons have curved corners. Need to figure out box around window and wib title and last tab -->

<style>
  .wins {
    display: flex;
  }

  .win {
    text-align: left;
    padding: 2em;
    width: 32em;
    display: grid;
  }
  .win-item {
    display: flex;
    margin-top: 0.5em;
    border: 1px solid;
    border-bottom: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .win-title-btn {
    width: 100%;
    height: 3em;
    font-size: large;
    font-weight: bold;
    /* border-top-left-radius: 3px;
    border-top-right-radius: 3px */
  }

  .win-item > * {
    background-color: #fff8e0;
  }

  .tabs {
    border: 1px solid;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .tab {
    display: flex;
    text-align: left;
    /* border: 1px solid; */
    width: 32em;
  }

  .tab:nth-child(even) {
    background-color: #f5f5f5;
  }

  .tab:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  /* .tab:last-child > .tab-close-btn {
    border-bottom-right-radius: 3px;
  } */

  .tab:last-child > .tab-item {
    border-bottom-left-radius: 3px;
  }

  .sq-btn {
    border-radius: 3px;
    /* height: 4em; */
    width: 4em;
  }

  .smch {
    font-size: larger;
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
