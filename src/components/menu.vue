<template>
  <div class="row justify-content-center">
    <nav class="btn-group" role="toolbar" aria-label="toolbar">
      <button
        type="button"
        class="btn btn-danger"
        v-if="checkedIn"
        v-on:click="$emit('check-out')"
      >
        Sjekk ut
      </button>
      <button
        type="button"
        class="btn btn-success"
        v-else
        v-on:click="$emit('check-in')"
      >
        Sjekk inn
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        v-on:click="$emit('new-task')"
      >
        Ny oppgave
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        v-on:click="$emit('show-completed')"
      >
        Arbeidslogg
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  props: ['checkedIn']
};
</script>
