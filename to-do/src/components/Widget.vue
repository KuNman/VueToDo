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
            div.list.d-flex.d-flex.flex-column
                li.item.completed(v-for="item in completed") {{ item.name }}
                #{'draggable'}(v-model="todo" @start="drag=true" @end="drag=false")
                    div.item.todo(v-for="element in todo" :key="element.id") {{ element.name }}
            div.footer.d-flex
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'
    import draggable from 'vuedraggable'

    export default {
        name: "Widget",
        methods: {
            ...mapMutations({
              dateMut: 'GET_DATE',
              listMut: 'UPDATE_LIST'
            }),
            ...mapGetters({
                dayGett : 'day',
                dayNoGett : 'dayno',
                monthGett : 'month',
                yearGett : 'year',
                completedGett : 'completed',
                todoGett : 'todo'
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
            completed() {
                return this.completedGett()
            },
            todo: {
                get() {
                    return this.todoGett()
                },
                set(value) {
                    return this.listMut(value)
                }
            }
        },
        created() {
            this.dateMut();
        },
        components: {
            draggable
        }
    }
</script>