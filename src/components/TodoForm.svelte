<script>
  export let onSave;
</script>

<section class="form">
  <input 
    type="text" 
    name="todo"
    class="form__input style-glass"
    placeholder="Please Enter Todo."
  />
  <button class="form__button style-glass" on:click={onSave}>+</button>
</section>
