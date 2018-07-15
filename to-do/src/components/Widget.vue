<template lang="pug">
    div.position
        div.widget.d-flex.flex-column
            div.header.d-flex
                div.date.d-flex.justify-content-start.align-items-center
                    div.number {{ dayNo }}
                    div.monthyear.flex-columnm.align-items-center
                        div {{ month }}
                        div {{ year }}
                div.day.d-flex.justify-content-end.align-items-center {{ day }}
            div.list.d-flex
            div.footer.d-flex
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: "Widget",
        methods: {
            ...mapActions([
                'increment',
            ]),
            ...mapMutations({
              dateMut: 'GET_DATE'
            }),
            ...mapGetters({
                dayGett : 'day',
                dayNoGett : 'dayno',
                monthGett : 'month',
                yearGett : 'year'
            })
        },
        computed: {
            day() {
                return this.dayGett()
            },
            dayNo() {
                return this.dayNoGett()
            },
            month() {
                return this.monthGett()
            },
            year() {
                return this.yearGett()
            },
        },
        created() {
            return this.dateMut()
        }
    }
</script>