<script setup lang="ts">
import type { FormKitSchemaNode } from '@formkit/core'

const schema: FormKitSchemaNode[] = [
  {
    $el: 'h1',
    children: 'Create A Quiz',
  },
  {
    $formkit: 'text',
    name: 'title',
    label: 'title',
    help: 'this is the name of your quiz',
    validation: 'required',
  },
]

async function save() {
  console.log('saved')
}
</script>

<template>
  <FormKit
    type="form"
    submit-label="Login"
    :submit-attrs="{
      id: 'submit',
    }"
    @submit="save"
  >
    <FormKitSchema :schema="schema" />
  </FormKit>
</template>
