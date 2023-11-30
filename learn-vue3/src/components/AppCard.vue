<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title red">Card title</h5>
            <!-- :class="$style.red" -->
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
import { ref, useCssModule } from 'vue';

console.log('AppCard module');

export default {
    setup () {
        console.log('AppCard setup()');

        // const style = useCssModule();
        // console.log('style: ', style);

        const color = ref('blue');
        color.value = 'green';

        return {
            color,
        }
    }
}
</script>

<!-- scoped: 현재 컴포넌트 안에서만 적용 -->
<!-- <style scoped>
.red {
    color: red !important;
}
</style> -->

<!-- module: CSS가 모듈로 컴파일되고, CSS 클래스를 $style로 가져올수 있음 -->
<!-- 이름 지정가능 -->
<!-- <style module="wnsdnn">
.red {
    color: red !important;
}
</style> -->


<style>
.red {
    /* 동적으로 색상 변경 가능 */
    color: v-bind(color) !important;
}
</style>