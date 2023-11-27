<template>
    <div>
        <p>author: {{ author }}</p>
        <p>title: {{ title }}</p>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
    setup () {
        const book = reactive({
            author: 'Vue Team',
            year: '2020',
            title: 'Vue 3 Guide',
            description: '당신은 이 책을 지금 바로 읽습니다 ;)',
            price: '무료'
        });

        // 구조분해할당을 하면서 반응성을 잃어버림 
        // let { author, title } = book;

        // toRefs를 쓰면 구조분해할당 해도 반응성을 안 읽어버림
        // let { author, title } = toRefs(book);

        // 이런식으로 1개씩 받는것도 가능
        let author = toRef(book, 'author');
        let title = toRef(book, 'title');


        return {author, title, book}
    }
}
</script>

<style lang="scss" scoped>

</style>