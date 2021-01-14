<script>
  export let todos;
  $: todosItem = todos;

  //$: 바벨문법 - 내부에서 참조된 값의 변화에 반응적인 데이터
</script>

<section class="todos">
  <ul class="todos__list">
    {#each todosItem as item (item.id)}
      <li class="todos__list-item">{item.todo}</li>
    {/each}
  </ul>
</section>

