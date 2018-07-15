<template lang="pug">
    div.position
        div.widget.d-flex.flex-column
            div.header.d-flex
                div.date.d-flex.justify-content-start
                div.day.d-flex.justify-content-end
            div.list.d-flex
            div.footer.d-flex
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Widget",
        methods: {
            ...mapActions([
                'increment',
            ])
        },
        created() {
            return this.increment()
        }
    }
</script>