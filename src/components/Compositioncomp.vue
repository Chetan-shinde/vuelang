<template>
    <div>
        <h2>composition API component</h2>
        <ul>
            <li v-for="(repo, index) in cachedRepositories" :key="index">{{ repo }}</li>
        </ul>
        <button @click="getUserRepositories">Update Repo</button>
    </div>
</template>
<script>

import useUserRepositories from "../composables/userRepositories.js";

export default {
    setup(){
        const {repositories, getUserRepositories, cachedRepositories} = useUserRepositories();

        return {
            repositories,
            getUserRepositories,
            cachedRepositories
        }
    }
}
</script>

