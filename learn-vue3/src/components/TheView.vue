<template>
    <main>
        <div class="container text-center py-4">
            <PostCreate
                @create-post="createPost"
            ></PostCreate>

            <hr class="my-4">

            <div class="row g-5">
                <div v-for="post in posts" :key="post.id" class="col col-4">
                    <AppCard 
                        :title="post.title" 
                        :contents="post.contents" 
                        :type="post.type"
                        :is-like="post.isLike"
                        @toggle-like="post.isLike = !post.isLike"
                        :obj="obj"
                    />

                    <!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
                </div>
            </div>
            

            <hr class="my-4">

            <!-- 
                modelValue
                update:modalValue

                이 속성값들을 선언해서
                부모 컴포넌트에서 
                
                v-model로 퉁쳐서 사용할수 있음
            -->

            <!-- <LabelInput
                :model-value="username"
                @update:model-value="value => username = value"
            ></LabelInput> -->

            <LabelInput
                v-model="username"
                label="이름"
            ></LabelInput>

            <LabelTitle
                v-model:title="username"
                label="제목"
            ></LabelTitle>
            
            <hr class="my-4">

            <Username
                v-model:firstname="firstname"
                v-model:lastname="lastname"
            ></Username>

        </div>
    </main>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import Username from './Username.vue';

export default {
    data() {
        return {
            message: '안녕!'
        }
    },
    provide() {
        return {
            // 계산된 속성을 명시적으로 제공
            message: computed(() => this.message)
        }
    },
    components: {
        AppCard,
        PostCreate,
        LabelInput,
        LabelTitle,
        Username,
    },
    setup () {
        const obj = reactive({
            title: '제목2',
            contents: '내용2',
        });

        const posts = reactive([
            { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
            { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
            { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
            { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
            { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' },
        ]);

        const createPost = (newPost) => {
            // console.log('newPost: ', newPost);
            posts.push(newPost);
        };

        const username = ref('');
        const firstname = ref('');
        const lastname = ref('');

        return {
            obj,
            posts,
            createPost,
            username,
            firstname,
            lastname,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>