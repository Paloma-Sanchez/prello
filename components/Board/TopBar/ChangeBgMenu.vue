<script setup>
import {backgrounds} from '/background.json'
const boardStore = useBoardStore();
const newBackground =ref('');

const emit = defineEmits(['reloadBoard', 'closeChangeBgMenu'])

const onHandleChangeBoardBackground = async (newUrl) => {
    await boardStore.modifyBoardBackground(newUrl);
    emit('reloadBoard');
};
</script>
<template>
    <div
        class="absolute right-0"
    >
        <div class="change-color-bg-menu relative z-50 right-4 bg-slate-900 p-4  rounded-lg">
            <div class=" ">
                <UButton class="float-right -mt-1" color="gray" icon="i-heroicons-x-mark" size="2xs" variant="link"
                    @click="$emit('closeChangeBgMenu')" />
                <p class="mb-3 text-center text-white">
                    Change background
                </p>
                <div class="flex justify-around">
                    <div v-for="background in backgrounds" :class="[
                        'c-bg-img',
                        'w-14',
                        'h-10',
                        'bg-cover',
                        'bg-center',
                        'mr-2',
                        'last:mr-0',
                        'cursor-pointer',
                        {
                            'ring-slate-900': newBackground === background.url,
                            'ring-4': newBackground === background.url,
                        }
                    ]" :style="{ backgroundImage: `url('${background.url}')` }"
                        @click="onHandleChangeBoardBackground(background.url)">
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>