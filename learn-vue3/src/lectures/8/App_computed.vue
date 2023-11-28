<template>
    <div>
        <h2>{{ teacher.name }}</h2>
        <h3>강의가 있습니까?</h3>
        <!-- <p>{{ teacher.lectures.length > 0 ? '있음 😀' : '없음 😥' }}</p> -->
        <p>{{ hasLecture }}</p>
        <p>{{ hasLecture }}</p>
        <p>{{ existLecture() }}</p>
        <p>{{ existLecture() }}</p>
        <button v-on:click="counter++">Counter: {{ counter }}</button>
        <hr>
        <h2>이름</h2>
        <p>{{ fullName }}</p>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup () {
        const teacher = reactive({
            name: '준우',
            lectures: [
                'HTML/CSS',
                'JavaScript',
                'Vue3'
            ],
        });

        // computed은 캐쉬를 하기 때문에 이쪽이 더 성능면에서 유리
        // 안에 있는 내용이 재정의되기 전까지 계속 캐쉬 진행
        const hasLecture = computed(() => {
            console.log('computed');
            return teacher.lectures.length > 0 ? '있음 😀' : '없음 😥'
        });
        

        // 화면 바뀔때마다 다시 생성됨
        const existLecture = () => {
            console.log('method');
            return teacher.lectures.length > 0 ? '있음 😀' : '없음 😥'
        }

        const counter = ref(0);


        
        const firstName = ref('홍');
        const lastName = ref('길동');

        const fullName = computed({
            get() {
                return firstName.value + ' ' + lastName.value;
            },
            set(value) {
                // 각각의 값이 변경되었으니 새로고침
                [ firstName.value, lastName.value ] = value.split(' ');
            }
        })

        // set() 실행
        fullName.value = '여 준우';


        return {
            teacher,
            hasLecture,
            existLecture,
            counter,
            fullName,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>