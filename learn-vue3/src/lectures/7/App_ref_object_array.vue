<template>
    <div>

    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup () {
        // ref -> Object
        const count = ref(0)
        const state = reactive({
            count: count
        });

        count.value++;
        count.value++;
        // console.log('count.value: ', count.value);
        // .value 안써도 출력됨, 하지만 반응형은 연결되어있음
        // console.log('state.count: ', state.count);


        // ref -> Array
        const message = ref('Hello');
        const arr = reactive([message]);
        console.log('arr[0]: ', arr[0]);
        // 반응형 객체를 배열에 넣으면 .value를 써줘야 가져올수 있다.
        console.log('arr[0]: ', arr[0].value);

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>