<script lang="ts">
  import type { PageData } from './$types';
  import Showdown from 'showdown';
//   import Menu from '../../../components/menu.svelte';
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
<div class="post w-full justify-center flex p-4 ">
    <div class="prose !max-w-none">
        
        <img src={'/post_covers/'+data.post.fields.cover} title={data.post.fields.title}/>
        <h1>{data.post.fields.title}</h1>
        
          <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-medium text-gray-800">{data.post.fields.author}</span>
            <span class="text-sm text-gray-500">MD, Software Developer, Horse Rider</span>
          </div>
          <p>{formatDate(data.post.fields.date)}</p>
        </div>
        {@html postContentHTML}
    </div>
</div>
