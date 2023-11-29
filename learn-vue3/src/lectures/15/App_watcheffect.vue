<template>
    <div>
        <form action="" @submit.prevent="save(title, contents)">
            <input type="text" v-model.lazy="title" placeholder="Title"> <br>
            <textarea v-model.lazy="contents" placeholder="Contents"></textarea>
            <hr>
            <button>저장</button>
        </form>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
    setup () {
        const title = ref('');
        const contents = ref('');

        const save = (title, contents) => {
            console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
        }

        // watchEffect는 watch와 다르게 기본으로 최초 1번 실행
        watchEffect(() => {
            // 콜백함수 내부에 사용한 변수들을 감시함
            console.log('watchEffect');
            save(title.value, contents.value);
        });
        
        return {
            title,
            contents,
            save,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>