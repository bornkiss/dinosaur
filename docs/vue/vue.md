# Vue
>***the different of start between Vue2 and Vue3***

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/markdown-features-tabs-styles.module.css';
```

<BrowserWindow>
<Tabs>
<TabItem value="Vue2" label="Vue2">

```js
const app = new Vue({
  el: '#app',
  data: {
    name: 'Leedom'
  }
})
```

</TabItem>

<TabItem value="Vue3" label="Vue3">

```js
const app = {
  data() {
    return {
      name: 'Leedom'
    }
  }
}

Vue.createApp(app).mount('#app')
```

</TabItem>
</Tabs>
</BrowserWindow>
