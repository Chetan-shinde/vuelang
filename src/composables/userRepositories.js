import { ref, computed } from "vue";
export default function useUserRepositories(){
    
    let repositories = ['apple', 'banana', 'chiku'];
    repositories = ref(repositories);

    const getUserRepositories = () => {
        repositories.value = ['water-melon', 'orange', 'pineapple'];
    }

    const cachedRepositories = computed(()=>repositories.value)

    return {
        repositories,
        getUserRepositories,
        cachedRepositories
    }
}