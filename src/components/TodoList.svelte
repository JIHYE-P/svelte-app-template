<script>
  export let todos;
  export let onDelete;
  export let onCheck;
  export let onKeyup;
  export let onClick;
  //$: 바벨문법 - 내부에서 참조된 값의 변화에 반응적인 데이터
  $: todosItem = todos;
</script>

<section class="todos">
  <ul class="todos__list">
    {#if !todosItem.length}
      <div class="todos__list-none">Not Found Todo.</div>
    {:else}
      {#each todosItem as item, i (item.id)}
        <li class="todos__list-item">
          <div 
            id={`todoItem-${i}`}
            class={`todos__list-inner ${item.checked ? 'checked' : ''}`}
            on:click={onClick(`todoed-${i}`, item)}
          >
            <input 
              type="text"
              id={`todoed-${i}`}
              class="item-text style-glass"
              bind:value={item.todo}
              on:keyup={onKeyup(`todoItem-${i}`)}
              disabled={item.checked}
            />
            <button class="item-delete" on:click={onDelete(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button class="item-check" on:click={onCheck(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </li>
      {/each}
    {/if}
  </ul>
</section>