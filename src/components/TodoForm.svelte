<script>
  export let onSave;
  export let onKeyup;
</script>

<section class="form">
  <input 
    type="text" 
    id="todo"
    class="form__input style-glass"
    placeholder="Please Enter Todo."
    on:keyup={onKeyup}
  />
  <button id="save" class="form__button style-glass" on:click={onSave}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</section>
