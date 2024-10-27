<script setup>
import JobListing from './JobListing.vue';
import { ref, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const jobs = ref([]);
const loading = ref(true);

defineProps({
    limit: {
        type: Number,
    },
    showButton: {
        type: Boolean,
        default: false
    }
})

onMounted(async () => {
    try {
        const res = await axios.get("/api/jobs")
        jobs.value = res.data
    } catch (error) {
        console.log("🚀 ~ onMounted ~ error:", error)
    }
    finally {
        loading.value = false;
    }
})
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div v-if="loading" class="flex justify-center items-center">
                <PulseLoader color="#10B981" size="15px" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" limit="3" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>