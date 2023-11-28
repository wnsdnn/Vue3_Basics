<template>
    <div>
        <!-- 배열안에 반응형 데이터들이 업데이트 되었을때만 업데이트 -->
        <div v-memo="[subscribers]">
            <p>subscribers: {{ subscribers }}</p>
            <p>views: {{ views }}</p>
            <p>likes: {{ likes }}</p>
        </div>

        <button @click="subscribers++">Subs++</button>
        <button @click="views++">Views++</button>
        <button @click="likes++">Likes++</button>

        <div>
            <p>subscribers: {{ subscribers }}</p>
            <p>views: {{ views }}</p>
            <p>likes: {{ likes }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const subscribers = ref(4000);
        const views = ref(400);
        const likes = ref(20);

        return {
            subscribers,
            views,
            likes
        };
    }
}
</script>

<style lang="scss" scoped>

</style>