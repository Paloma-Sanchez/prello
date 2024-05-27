<script setup>
const options = [
  {
    value: 'Startup',
    label: 'Startup',
    description:['12GB', '6 CPUs', '160 GB SSD disk'],
    icon:'i-heroicons-trash'
  },
  {
    value: 'Business',
    label: 'Business',
    description:['16GB', '8 CPUs', '512 GB SSD disk'],
    icon:''
  },
  {
    value: 'Enterprise',
    label: 'Enterprise',
    description:['32GB', '12 CPUs', '1024 GB SSD disk'],
    icon:''
  },
];

const selected = ref(options[0]);

</script>
<template>
    <RadioGroup
        :options="options"
        :modelValue="selected"
        name="plans"
        @update:modelValue="($event)=>selected=$event"
    />
    <div>{{ selected }}</div>
</template>

<style>
input[type="radio"].demo1 {
    display: none;
  }
  input[type="radio"].demo1 + label {
    padding: 0.3rem 0.5rem;
    border: 1px dashed #ccc;
    background-color: aliceblue;
  }
  input[type="radio"].demo1:checked + label {
    border: 1px solid #000;
  }

</style>