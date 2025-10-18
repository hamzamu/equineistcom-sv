<script lang="ts">
  import type { PageData } from './$types';
  import Showdown from 'showdown';
  import { formatDate } from '$lib/dateUtils'; 
  let { data }: { data: PageData } = $props();
  const converter = new Showdown.Converter();
  const postContentHTML = converter.makeHtml(data.post.content);
</script>
<!--  -->
<svelte:head>
	<title>{data.post.fields.title} | Equineist.com</title>
</svelte:head>
<!--  -->
<div class="post w-full justify-center flex ">
    <div class="prose !max-w-none">
        <h1>{data.post.fields.title}</h1>
        <!-- <img src={'/post_covers/'+data.post.fields.cover} title={data.post.fields.title}/> -->
        <p>{formatDate(data.post.fields.date)}</p>
        {@html postContentHTML}
    </div>
</div>
