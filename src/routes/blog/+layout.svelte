<script lang="ts">
	import '../../app.css';
	import Menu from '../../components/menu.svelte';
	
	let { children } = $props();
</script>
<!--  -->
<svelte:head>
</svelte:head>
<!--  -->
<section class="w-full sm:w-6/12 mx-auto bg-amber-300x my-5 bg-amber-800x h-auto flex justify-center border-bx border-gray-100">
<Menu/>
</section>
<!--  -->
<!-- TODO: Fix for More and Better Responsive -->
<section class="w-full sm:w-6/12 mx-auto bg-amber-300x my-5  h-auto flex justify-center p-5">
    {@render children?.()}
</section>
