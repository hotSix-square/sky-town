<template>
  <div id="app">
    <spinner :loading="$store.state.LoadingStatus"/>
    <router-view name="header"/>
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
import Spinner from '@/components/Spinner'
export default {
	components: {
		Spinner
	}
}
</script>
