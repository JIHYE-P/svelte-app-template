<script>
  export let todos;
  export let onDelete;
  export let onCheck;
  //$: 바벨문법 - 내부에서 참조된 값의 변화에 반응적인 데이터
  $: todosItem = todos;

</script>

<section class="todos">
  <ul class="todos__list">
    {#each todosItem as item (item.id)}
      <li class="todos__list-item">
        <div class="todos__list-inner">
          <input 
            type="text"
            name="todo"
            class="item-text style-glass"
            bind:value={item.todo}
          />
          <button class="item-delete" on:click={onDelete}> ✖ </button>
          <button class="item-check" on:click={onCheck}> ✔ </button>
        </div>
      </li>
    {/each}
  </ul>
</section>