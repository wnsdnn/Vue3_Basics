# 조건부 렌더링
<hr>


#### `v-if`
`v-if` 디렉티브는 조건부로 블록을 렌더링 할 때 사용됩니다.

```
<h1 v-if="visible">Hello Vue3!</h1>
```

<br>


#### `v-else`
`v-else` 디렉티브는 `v-if`가 `거짓(false)`일 때 렌더링 하는 블록입니다.

```
<h1 v-if="visible">Hello Vue3!</h1>
<h1 v-else>Good bye!</h1>
```

<br>


#### `v-else-if`
`v-else-if`는 이름에서 알수 있듯이 `v-if`에 대한 'else if 블록'입니다. 여러 조건을 연결할 수 있습니다.

```
<h1 v-if="type === 'A'">
    A
</h1>
<h1 v-else-if="type === 'B'">
    B
</h1>
<h1 v-else-if="type === 'C'">
    C
</h1>
<h1 v-else>
    Not A/B/C
</h1>
```

<br>


#### `template v-if=""`
여러개의 HTML요소를 `v-if` 디렉티브로 연결하고 싶다면 `<template>`을 사용할 수 있습니다.

```
<template v-if="visible">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</template>
```

<br>


#### `v-show`
요소를 조건부로 표시하는 또 다른 옵션은 `v-show` 디렉티브 입니다.

```
<h1 v-show="show">Title</h1>
<button @click="show = !show">toggle show</button>
```

<br><br>
<hr>
<br><br>

## `v-if` vs `v-show`
`v-if`는 "실제(real)"로 렌더링됩니다. 전환 할 때 블록 내부의 컴포넌트들이 제거되고 다시 생성되기 때문입니다.

또한 `v-if`는 게으릅니다(lazy). 초기 렌더링 시, 조건이 거짓(false)이면 아무 작업도 하지 않습니다. 조건부 블록은 조건이 처음으로 참(true)이 될 때까지 렌더링되지 않습니다.

이에 비해  `v-show`는 훨씬 간단합니다. 엘리먼트는 CSS 기반 전환으로 초기 조건과 관계 없이 항상 렌더링됩니다.

일반적으로 `v-if`는 전환 비용이 높은 반면, `v-show`는 초기 렌더링 비요잉 높습니다. 그러므로 무엇가를 자주 전환해야 한다면 `v-show`를 사용하는게 좋고, 런타임 시 조건이 변겨오디지 않는다면 `v-if`를 사용하는게 더 낫습니다.


<br><br>
<hr>
<br><br>

## `v-if`와 `v-for`

#### TIP
`v-if`와 `v-for`를 함께 쓰는 것은 권장하지 않습니다. 자세한 내용은 스타일 가이드를 참고하세요.

동일한 엘리먼트에 `v-if`와 `v-for`를 함께 사용할 때, `v-if`가 더 높은 우선순위를 갖습니다. 자세한 내용은 리스트 렌더링 가이드를 참고하세요.
















