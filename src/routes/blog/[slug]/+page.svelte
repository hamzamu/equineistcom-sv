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

  <meta name="description" content={data.post.fields.description || data.post.content.substring(0, 160) + '...'} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={data.post.fields.title} />
	<meta property="og:description" content={data.post.fields.description || data.post.content.substring(0, 200) + '...'} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={`https://equineist.com/posts/${data.post.fields.slug}`} />
	<meta property="og:image" content={`https://equineist.com/post_covers/${data.post.fields.cover}`} />
	<meta property="og:image:alt" content={data.post.fields.title} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.post.fields.title} />
	<meta name="twitter:description" content={data.post.fields.description || data.post.content.substring(0, 200) + '...'} />
	<meta name="twitter:image" content={`https://equineist.com/post_covers/${data.post.fields.cover}`} />
	<meta name="twitter:site" content="@equineist" />
</svelte:head>
<!--  -->
<div class="post w-full justify-center flex p-4">
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
