# Milky Way Idle


## UserScripts

### MWITools

``` javascript
let SCRIPT_COLOR_MAIN = "#bbc5f1"; // 脚本主要字体颜色
let SCRIPT_COLOR_TOOLTIP = "#35458b"; // 物品悬浮窗的字体颜色
```

``` javascript
const presetHours = [0.5, 1, 2, 3, 4, 5, 6, 10, 12, 24];
for (const value of presetHours) {
    const btn = document.createElement("button");
    btn.innerText = value === 0.5 ? 0.5 : numberFormatter(value);
    btn.onclick = () => {
        reactInputTriggerHack(inputElem, Math.round((value * 60 * 60 * effBuff) / duration));
    };
    quickInputButtonsDiv.append(btn);
}
quickInputButtonsDiv.append(document.createTextNode(isZH ? " 小时" : " hours"));

quickInputButtonsDiv.append(document.createElement("div"));
quickInputButtonsDiv.append(document.createTextNode(isZH ? "做 " : "Do "));
const presetTimes = [10, 20, 50, 100, 200, 500, 1000, 2000];
for (const value of presetTimes) {
    const btn = document.createElement("button");
    btn.innerText = numberFormatter(value);
    btn.onclick = () => {
        reactInputTriggerHack(inputElem, value);
    };
    quickInputButtonsDiv.append(btn);
}
quickInputButtonsDiv.append(document.createTextNode(isZH ? " 次" : " times"));
quickInputButtonsDiv.insertAdjacentHTML("beforeend", `<style>
    #quickInputButtons button {
        margin: 1px 2px;
        padding: 1px 4px;
        font-family: sans-serif;
        background: var(--color-space-100);
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    #quickInputButtons button:hover {
        background: var(--color-space-200);
    }
</style>`);
```

``` javascript
appendHTMLStr += `<div style="color: ${SCRIPT_COLOR_TOOLTIP};">${isZH ? "利润: " : "Profit: "}${numberFormatter(
    profitPerHour / actionPerHour
)}${isZH ? "/动作" : "/action"}, ${numberFormatter(profitPerHour)}${isZH ? "/小时" : "/hour"}, ${numberFormatter(24 * profitPerHour)}${
    isZH ? "/天" : "/day"
}</div>`;

console.log(`${getOriTextFromElement(itemNameElem)}\t${(profitPerHour / actionPerHour).toFixed(2)}\t${profitPerHour.toFixed(2)}\t`);
```


## Notes

### All

- 奶茶指南

  | 专业 | 奶茶                            |
  | ---- | ------------------------------- |
  | 采集 | 经验/采集/效率 → 采集/加工/效率 |
  | 生产 | 经验/工匠/效率                  |
  | 饮食 | 美食/经验/效率 → 美食/工匠/效率 |
  | 强化 | 经验/福气/超级强化              |
  | 炼金 | 经验/效率/催化                  |

- 贤者套装：珍珠 22

- 冲泡
  - 采集茶：　绿茶叶 2，　蓝莓 2，翠绿牛奶 1
  - 美食茶：　黑茶叶 2，　黑莓 2，蔚蓝牛奶 1
  - 经验茶：　紫茶叶 2，　草莓 2，深紫牛奶 1
  - 加工茶：哞龙茶叶 2，　哞莓 2，彩虹奶酪 1
  - 效率茶：　红茶叶 2，火星莓 2，彩虹牛奶 1
  - 经验咖啡：　李子 1
  - 幸运咖啡：　桃子 1

### Luria

- 总等级 957

  - <i class="bi bi-bookmark-check-fill"></i>丝绸
    战斗：蘑菇人
  - <i class="bi bi-clipboard2-check-fill"></i>技能
    炼金：眼精华 3000
  - <i class="bi bi-cart-dash-fill"></i>经验茶　做 2000 卖 1000
    采集：深紫沙滩（草莓）
  - <i class="bi bi-cart-plus-fill"></i>巨大袋子　金币 6M

### Lurie

- 总等级 823

  - <i class="bi bi-bookmark-check-fill"></i>经验茶
    战斗：蘑菇人

<style>
  #notes ~ ul, #notes ~ h3 {
    font-family: "yozai", sans-serif;
  }
  #luria ~ ul li li::before {
    content: none;
  }
  #luria ~ ul li li {
    text-indent: -1rem;
  }
  #luria ~ ul li li i {
    text-indent: 0;
  }
  #luria ~ ul li li i::before {
    width: 1rem;
  }
</style>