<template>
    <div>
        <h2>New page</h2>
        <button @click="$router.go(-1)">Go back</button>
        New styff
        <MyComp1 />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
span {
  color: black;
}

</style>