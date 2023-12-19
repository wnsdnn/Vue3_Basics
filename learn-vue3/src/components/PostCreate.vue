<template>
    <div class="row g-3">
        <!-- <button 
            class="btn btn-primary" 
            @click="$emit('createPost')"
        >button</button> -->

        <div class="col col-2">
            <select v-model="type" class="form-select" aria-label="Default select example">
                <option value="news">뉴스</option>
                <option value="notice">공지사항</option>
            </select>
        </div>

        <div class="col col-8">
            <input v-model="title" type="text" class="form-control" />
        </div>

        <div class="col col-2 d-grid">
            <button 
                class="btn btn-primary" 
                @click="createPost"
            >추가</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    // emits: [
    //     'createPost'
    // ],
    emits: {
        createPost: (newTitle) => {
            // 유효성체크가 없으면 return null; 해도됨
            // console.log('validator: ', newTitle);

            if (!newTitle.type) {
                return false;
            } else if(!newTitle.title) {
                return false;
            }

            return true;
        }
    }, 
    setup (props, { emit }) {
        const title = ref('');
        const type = ref('news');
        
        //context.emit
        const createPost = () => {
            const newPost = {
                type: type.value,
                title: title.value,
            }
            emit('createPost', newPost);

            type.value = 'news';
            title.value = '';
        };

        return {
            title,
            type,
            createPost,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>