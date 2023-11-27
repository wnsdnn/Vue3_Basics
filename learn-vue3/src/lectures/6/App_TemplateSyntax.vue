<template>
    <div>
        <h2>보관법</h2>
        <p>{{ message }}</p>
        <p v-once>{{ message }}</p>
        <button v-on:click="message = message + '!'">CLICK</button>

        <hr>

        <h3>HTML</h3>
        <p>{{  rawHtml  }}</p>
        <p v-html="rawHtml"></p>
        
        <hr>

        <h2>속성 바인딩</h2>
        <div :title="dynamicTitle">마우스를 올려보세요</div>
        <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
        <input v-bind="attrs" />

        <hr>
        
        <h2>JavaScript</h2>
        {{ message.split('').reverse().join() }} <br>
        {{ isInputDisabled ? "예" : "아니요" }} <br>
        <input type="text" :placeholder="`입력해주세요 ${isInputDisabled}`" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const message = ref('안녕하세요');
        const rawHtml = ref('<strong>안낭하세요</strong>');

        const dynamicTitle = ref('안녕하세요!!!');
        const isInputDisabled = ref(true);
        const attrs = ref({
            type: 'text',
            value: '12345678',
            disabled: false
        });


        return {
            message,
            rawHtml,
            dynamicTitle,
            isInputDisabled,
            attrs,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>