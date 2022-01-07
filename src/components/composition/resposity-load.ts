
import { ref,Ref, onMounted, watch } from 'vue'
import { getResposity,Resposity } from '../../request/api/resposity';


export default function resposityLoad(query:Ref<String>) {
  const repositories:Ref<Resposity[]> = ref([])
  const getUserRepositories = async () => {
    repositories.value = await getResposity({key:query.value})
  }
  onMounted(getUserRepositories)
  watch(query, getUserRepositories)
  return {
    repositories,
    getUserRepositories
  }
}