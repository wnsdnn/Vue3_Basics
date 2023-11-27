<template>
    <div>
        <!-- 내부적으로 언래핑이 되서 .value 뻬도 됨 -->
        <p>{{ message }}</p>
        <button v-on:click="addMessage">add click</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup () {
        // let message = reactive('Hello Vue!');
        let message = ref('Hello Vue');
        // message.value로 값 접근가능
        const addMessage = () => {
            message = message + '!';
        }

        console.log('message: ', message);
        console.log('message.value: ', message.value);
        console.log('message typeof: ', typeof message);

        return {
            message,
            addMessage,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>