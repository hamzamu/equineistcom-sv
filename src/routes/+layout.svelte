<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	// import Menu from '../components/menu.svelte';
	// import Footer from '../components/footer.svelte';
	import Footer from '../components/footerSimple.svelte';
	import Site from '../site.json'
	
	let { children } = $props();
</script>
<!--  -->
<svelte:head>
	<link rel="icon" href={favicon} />


	<title>{Site.site.title} - {Site.site.tagline}</title>

</svelte:head>
<!--  -->



<!-- <Menu/> -->
<!-- TODO: Fix for More and Better Responsive -->

{@render children?.()}
<!-- </section> -->
<Footer/>
