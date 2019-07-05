export default {
    methods: {
        setDropdowndata(tarefa, estado, index) {
            this.$store.dispatch('setTarefaSelecionada', tarefa)
            this.$store.dispatch('setEstadoDropdown', estado)
            this.$store.dispatch('setIndexDropdown', index)
        }
    },
}

