import { ref, computed }              from 'vue'
import type { Movie, ListPagination } from '@/types'

export function useMovies() {

  const isLoading        = ref<boolean>(false)
  const data             = ref<Movie[] | null>(null)
  const paginationParams = ref<ListPagination>({
    offset: 0,
    limit: 12,
    total: 0
  })

  const url = computed(() => `https://my.api.mockaroo.com/movies.json?key=203c6440&offset=${paginationParams.value.offset}`)

  async function getData() {
    isLoading.value = true
    data.value = await fetch(url.value).then(res => res.json())
    paginationParams.value.total = 128
    isLoading.value = false

    console.log(data.value)
  }

  return {
    data,
    isLoading,
    paginationParams,
    url,
    getData,
  }
}

export default useMovies