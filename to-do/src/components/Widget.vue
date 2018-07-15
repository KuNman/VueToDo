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
            div.list.d-flex.flex-column
                li.item.completed.d-flex(v-for="item in completed")
                    div.name {{ item.name }}
                    div.checked
                        div.circle(@click="changeStatus({item: item, array: 'todo'})")
            #{'draggable'}(v-model="todo" @start="drag=true" @end="drag=false" class="d-flex flex-column")
               li.item.todo(v-for="item in todo" :key="item.id")
                    div.name {{ item.name }}
                    div.check
                        div.circle(@click="changeStatus({item: item, array: 'completed'})")
            div.footer.d-flex.justify-content-center
                div.button.d-flex.align-items-end
                    button
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
                orderMut: 'UPDATE_ORDER',
                updateMut: 'UPDATE_LIST'
            }),
            ...mapGetters({
                dayGett : 'day',
                dayNoGett : 'dayno',
                monthGett : 'month',
                yearGett : 'year',
                completedGett : 'completed',
                todoGett : 'todo'
            }),
            changeStatus(item) {
                return this.updateMut(item)
            }
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
                    return this.orderMut(value)
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