<template>
    <div>
        <LabelInput 
            label="성"
            :model-value="firstname" 
            @update:model-value="value => $emit('update:firstname', value)" 
        ></LabelInput>
        <LabelInput 
            label="이름"
            :model-value="lastname" 
            @update:model-value="value => $emit('update:lastname', value)" 
        ></LabelInput>
    </div>
</template>

<script>

import LabelInput from './LabelInput.vue';

export default {
    props: ['firstname', 'lastname'],
    emits: ['update:firstname', 'update:lastname'],
    components: {
        LabelInput,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>