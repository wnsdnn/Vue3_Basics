<template>
    <main>
        <div class="container text-center py-4">
            <div class="row g-5">
                <div class="col col-4">
                    <!-- 카멜 케이스도 가능 -->
                    <app-card></app-card>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>