<template>
  <div>
    <!-- Text slides with image -->
    <b-carousel-slide
      :caption="title"
      :text="content"
      img-src="https://picsum.photos/1024/480/?image=53"
    ></b-carousel-slide>
  </div>
</template>

<script>
export default {
  name: "NewsListRow",
  props: {
    title: String,
    url: String,
    content: String,
  },
};
</script>

<style></style>
