<template>
    <div class="card">
        <div class="card-body">
            <!-- {{ $props }} -->
            <!-- type: news, notice -->
            <span class="badge bg-secondary">{{ typeName }}</span>
            <h5 class="card-title red mt-2">{{ title }}</h5>
            <!-- :class="$style.red" -->
            <p class="card-text">{{ contents }}</p>
            <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>
            {{ $props.obj }}
        </div>
    </div>
</template>

<script>
import { computed, ref, useCssModule } from 'vue';


export default {
    props: {
        type: {
            type: String,
            default: 'news',
            // 유효성검사
            validator: (value) => {
                return ['news', 'notice'].includes(value);
            },
        },
        title: {
            type: String,
            required: true,
        },
        contents: {
            type: String,
            required: true,
        },
        isLike: {
            type: Boolean,
            default: false,
        },
        obj: {
            type: Object,
            // 기본값을 함수로 이렇게 실행해야함
            default: function() {
                return {};
            }
        }
    },
    emits: ['toggleLike'],
    setup (props, context) {
        // const style = useCssModule();
        // console.log('style: ', style);

        const color = ref('blue');
        color.value = 'green';


        // ====================================================

        console.log('props.title: ', props.title);

        const isLikeClass = computed(() => {
            return props.isLike ? 'btn-danger' : 'btn-outline-danger';
        });

        const typeName = computed(() => {
            return props.type === 'news' ? '뉴스' : '공지사항';
        });


        const toggleLike = () => {
            // 하위컴포넌트에서는 변경 못함
            // props.isLike = !props.isLike;

            // 이벤트 발생시키기
            context.emit('toggleLike');
        };


        return {
            color,
            isLikeClass, 
            typeName, 
            toggleLike,
        }
    }
}
</script>

<!-- scoped: 현재 컴포넌트 안에서만 적용 -->
<!-- <style scoped>
.red {
    color: red !important;
}
</style> -->

<!-- module: CSS가 모듈로 컴파일되고, CSS 클래스를 $style로 가져올수 있음 -->
<!-- 이름 지정가능 -->
<!-- <style module="wnsdnn">
.red {
    color: red !important;
}
</style> -->


<style>
.red {
    /* 동적으로 색상 변경 가능 */
    color: v-bind(color) !important;
}
</style>