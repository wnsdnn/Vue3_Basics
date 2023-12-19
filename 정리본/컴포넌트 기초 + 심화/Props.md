# Props
<hr>


## 개요
Vue에서 Single-File Component(SFC, `*vue` 파일)는 Vue 컴포넌트의 템플릿(template), 로직(script), 스타일(style)을 하나로 캡슐화하는 특수 파일 형식 입니다. 확장자는 `*.vue`이며 다음은 SFC의 예입니다.

```
<template>
    <p class="greeting">{{ greeting }}</p>
</template>

<script>
    export default {
        data() {
            return {
                greeting: 'Hello Wordl!',
            };
        },
    }
</script>

<style>
    .greeting {
        color: red,
        font-weight: bold;
    }
</style>
```

위 예시처럼 Vue SFC는 HTML, CSS, JavaScript의 문법을 유지하면서 확장한 특수 파일입니다.


<br><br>


## 언어 블록


#### `<template>`
- 각 `*.vue` 파일은 한 번에 최대 하나의 `top-level <template>` 블록을 포함할 수 있습니다.
- 콘텐츠는 추출되어 `@vue/compiler-dom`으로 전달되고, JavaScript 렌더 기능으로 사전 컴파일되고, `render` 옵션으로 내보내어 컴포넌트에 첨부됩니다.


<br>


#### `<script>`
- 각 `*.vue` 파일은 한 번에 최대 하나의 `<script>` 블록을 포함할 수 있습니다. (`<script setup>` 제외)
- 스크립트는 ES 모듈로 실행됩니다.
- `default export`는 일반 객체 또는 `defineComponent`의 반환 값으로 Vue 컴포넌트 옵션 객체여야 합니다.


<br>


#### `<script setup>`
- 각 `*.vue` 파일은 한 번에 최대 하나의 `<script setup>` 블록을 포함할 수 있습니다. (`normal <script>` 제외)
- `<script setup>`은 사전에 처리되어 컴포넌트의 `setup()` 함수로 사용됩니다. 즉, 컴포넌트의 각 인스턴스에 대해 실행됩니다. `<script setup>`의 최상위 바인딩은 템플릿에 자동으로 노출됩니다. 자세한 내용은 `<script setup>` 전용 문서를 참조하십시오.



<br>


#### `<style>`
- 단일 `*.vue` 파일에는 여러 `<style>` 태그가 포함될 수 있습니다.
- `<style>` 태그는 현재 컴포넌트에 스타일을 캡슐화하는데 도움이 되도록 `scoped` 또는 `module` 속성 (자세한 내용은 SFC 스타일 기능 참조)을 가질수 있습니다. 캡슐화 모드가 다른 여러 `<style>` 태그를 동일한 구성 요소에서 혼합할 수 있습니다.



<br><br>


## CustomBlocks
프로젝트별 요구사항에 따라 `*.vue` 파일에 사용자 정의 블록을 추가할 수 있습니다. 예를 들면 다음과 같은 사용자 정의 블록 예가 있습니다.

- Gridsome: `<page-query>`
- vite-plugin-vue-gql: `<gql>`
- vue-i18n: `<i18n>`



<br><br>

## 전처리기
`<script>`의 `lang` 속성을 사용하여 전처리기 언어를 선언할 수 있습니다. 일반적인 경우는 TypeScript를 사용하는 것입니다.

```
<script lang="ts">
    // use TypeScript
</script>
```

`lang` 속성을 모든 블록에 적용할 수 있습니다. 예를 들어 SASS와 Pug를 `<stype>`과 `<template>`에 적용할 수 있습니다.


```
<template lang="pug">
    <p>{{ msg }}</p>
</template>

<style lang="scss">
    $primary-color: #333;

    body {
        color: $primary-color;
    }
</style>
```



<br><br>

## Src 가져오기
`.vue` 컴포넌트를 여러 파일로 분할하려는 경우 `src` 속성을 사용하여 `language block`에 대한 외부 파일을 가져올 수 있습니다.

```
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

`src`로 가져오는 것은 webpack 모듈 요청과 동일한 경로 확인 규칙을 따릅니다. 즉, 다음을 의미합니다.

상대경로 ./로 시작해야 합니다.

npm 종속성에서 리소스를 가져올 수 있습니다.

```
<!-- import a file from the installed "todomvc-app-css" npm package -->
<style src="todomvc-app-css/index.css" />
```

src 가져오기는 사용자 정의 블록에서도 작동합니다. 예:

```
<unit-test src="./unit-test.js">
</unit-test>
```



<br><br>

## CSS 기능

#### Scoped CSS
`<style>`태그에 `scoped` 속성이 있는 경우 해당 CSS는 현재 컴포넌트의 요소에만 적용됩니다.
```
<template>
    <p class="preeting">preeting</p>
</template>

<style scoped>
    .greeting {
        color: red;
        font-weight: bold;
    }
</style>
```

원리는 PostCSS를 사용하여 아래와 같이 변환 됩니다.

```
<template>
    <p class="greeting" data-v-7ba5bd90>greeting</p>
</template>

<style scoped>
    .greeting[data-v-7ba5bd90] {
        color: red;
        font-weight: bold;
    }
</style>
```


<br>

#### CSS 모듈
`<style module>`은 CSS 모듈로 컴파일되고, CSS 클래스를 `$style` 객체의 속성으로 노출합니다.

```
<template>
    <p :class="$style.red">This should be red</p>
</template>

<style module>
    .red {
        color: red;
    }
</style>
```

결과 클래스는 충돌을 피하기 위해 해시되어 CSS 범위를 현재 컴포넌트로만 지정하는 것과 동일한 효과를 얻습니다. 전역 예외 및 구성과 같은 자세한 내용은 CSS 모듈 사양을 참조하세요.

#### Custom Inject Name
모듈 속성에 값을 제공하여 주입된 클래스 객체의 속성 키를 변경할 수 있습니다.

```
<template>
    <p :class="classes.red">red</p>
</template>

<style module="classes">
    .red {
        color: red;
    }
</style>
```

#### Composition API와 함께 사용
주입된 클래스는 `useCssModule` API를 통해 `setup()` 및 `<script setup>`에서 접근할 수 있습니다. 사용자 정의 주입 이름이 있는 스타일 모듈 블록일 경우 `useCssModule`은 일치하는 모듈 속성 값을 첫번째 인수로 허용합니다.

```
import { useCssModule } from 'vue'

// setup() 스코프 내부...
// 기본, 스타일 모듈에 대한 클래스를 반환합니다.
useCssModule()

// 명명된, 스타일 module='classes'에 대한 클래스를 반환합니다.
useCssModule('classes')
```



<br><br>

## `v-bind()` in CSS
SFC`<style>` 태그는 `v-bind` CSS 기능을 사용하여 CSS 값을 동적 구성 요소 상태에 연결하는 것을 지원합니다.

```
<template>
    <div class="text">hello</div>
</template>

<script>
    export default {
        data() {
            return {
                color: 'red',
            }
        }
    }
</script>

<style>
    .text {
        color: v-bind(color);
    }
</style>
```






