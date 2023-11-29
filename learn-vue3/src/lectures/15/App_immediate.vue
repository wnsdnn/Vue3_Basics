<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ reverseMessage }}</p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup () {
        const message = ref('Hello Vue3');
        const reverseMessage = ref('');


        const reverseFunction = (newValue, oldValue) => {
            console.log('즉시실행함!');
            reverseMessage.value = newValue.split('').reverse().join('');
        };

        watch(message, reverseFunction, {
            // 최초에 한번 측시실행
            immediate: true
        });

        return {
            message, 
            reverseMessage,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>