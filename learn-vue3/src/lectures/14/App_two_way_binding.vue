<template>
    <div>
        <h2>input value</h2>
        <!-- 위 아래 코드 같은 역할을 함 -->
        <!-- <input type="text" v-model.lazy="inputValue" /> -->
        <!-- <input type="text" v-model.number="inputValue" /> -->
        <input type="text" v-model.trim="inputValue" />
        <!-- <input 
            type="text" 
            :value="inputValue" 
            @input="event => (inputValue = event.target.value)"
        /> -->
        <!-- <div>{{ typeof inputValue }}</div> -->
        <div>{{ inputValue }}</div>

        <hr>

        <h2>textarea value</h2>
        <textarea v-model="textareaValue"></textarea>
        <!-- <textarea 
            :value="textareaValue" 
            @input="event => (textareaValue = event.target.value)"
        ></textarea> -->
        <div>{{ textareaValue }}</div>

        <hr>

        <h2>checkbox value</h2>
        <label for="checkbox">{{ checkboxValue }}</label>
        <input 
            type="checkbox" 
            id="checkbox" 
            v-model="checkboxValue" 
            true-value="Yes"
            false-value="No" />
        <!-- <input 
            type="checkbox" 
            id="checkbox" 
            :checked="checkboxValue"
            @change="event => checkboxValue = event.target.checked"
        > -->

        <h3>checkbox values</h3>

        <label>
            <input type="checkbox" value="html" v-model="checkboxValues">
            HTML
        </label>
        <label>
            <input type="checkbox" value="css" v-model="checkboxValues">
            CSS
        </label>
        <label>
            <input type="checkbox" value="javascript" v-model="checkboxValues">
            JavaScript
        </label>

        <div>{{ checkboxValues }}</div>
        

        <hr>

        <h2>radio value</h2>
        <label>
            <input type="radio" name="type" value="O" v-model="radioValue"
            >
            <!-- <input 
                type="radio" 
                name="type" 
                value="O" 
                :checked="radioValue === 'O'"
                @change="event => radioValue = event.target.value"
            > -->
            O형
        </label>
        <label>
            <input type="radio" name="type" value="A" v-model="radioValue"
            >
            <!-- <input 
                type="radio" 
                name="type" 
                value="A" 
                :checked="radioValue === 'A'"
                @change="event => radioValue = event.target.value"
            > -->
            A형
        </label>
        <label>
            <input type="radio" name="type" value="B" v-model="radioValue"
            >
            <!-- <input 
                type="radio" 
                name="type" 
                value="B" 
                :checked="radioValue === 'B'"
                @change="event => radioValue = event.target.value"
            > -->
            B형
        </label>

        <div>{{ radioValue }}</div>

        <hr>

        <h2>select value</h2>

        <!-- <select :value="selectValue" @change="event => selectValue = event.target.value">
            <option value="html">HTML 수업</option>
            <option value="css">CSS 수업</option>
            <option value="javascript">JavaScript 수업</option>
        </select> -->
        <select v-model="selectValue">
            <option value="html">HTML 수업</option>
            <option value="css">CSS 수업</option>
            <option value="javascript">JavaScript 수업</option>
        </select>

        <div>{{ selectValue }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const inputValue = ref(null);
        const textareaValue = ref(null);
        const checkboxValue = ref('Yes');
        const checkboxValues = ref([]);
        const radioValue = ref('O');
        const selectValue = ref('html');

        return {
            inputValue,
            textareaValue,
            checkboxValue,
            radioValue,
            selectValue,
            checkboxValues,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>