
<script setup>
import {backgrounds} from '/background.json'

//State for new board creation form
const state = reactive({
    selectedBackground:undefined,
    newBoardTitle:undefined
});

</script>
<template>
    <div
        class="bg-slate-500 text-slate-50 p-4 rounded-lg text-center h-min absolute"
    >
        <p
            class="text-lg pb-4"
        >
            Create a board
        </p>
        <UForm
            :state="state"
            @submit="$emit('createNewBoard', state.newBoardTitle, state.selectedBackground)"
        >
            <UFormGroup 
                name="background" 
                label="Background"
                class="uformgroup-bgs mb-4"
                :ui="{label: {base:'text-base text-slate-50'}}"
            >
                <div
                    class="flex justify-around"
                >
                    <div
                        v-for="background in backgrounds"
                        :class="[
                            'c-bg-img',
                            'w-14',
                            'h-10',
                            'bg-cover',
                            'bg-center',
                            'mr-2',
                            'last:mr-0',
                            'cursor-pointer',
                            {
                                'ring-slate-900':state.selectedBackground === background.url,
                                'ring-4':state.selectedBackground === background.url,
                            }
                            ]"
                        :style="{backgroundImage: `url('${background.url}')`}"
                        @click="state.selectedBackground=background.url"    
                    >
                    </div>
                </div>
            </UFormGroup>
            <UFormGroup 
                class="mb-4"
                label="Board title" 
                name="boardTitle"
                required
                :ui="{
                    label: {base:'text-base text-slate-50'},
                }"
            >
                <UInput
                    v-model="state.newBoardTitle"
                    color="sky"
                    placeholder="Ex: New Board"
                    :ui="{variant:{outline:'bg-slate-700 text-slate-200 ring-0'}}"
                />
            </UFormGroup>
            <UButton
                
                type="submit"
                size="md"
                color="black"
                block
                :disabled="state.newBoardTitle?false:true"
            >
                Create
            </UButton>
        </UForm>
    </div>
</template>