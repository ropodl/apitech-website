<script lang="ts" setup></script>
<template>
  <v-card rounded="0" flat color="transparent" class="pt-16">
    <v-container>
      <v-row align="end">
        <v-col cols="12">
          <div class="text-h1 font-weight-bold py-10">
            <slot name="title" /><span class="text-primary">.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-img
      cover
      src="/images/img3.avif"
      class="position-absolute"
      style="inset: 0; z-index: -1"
    >
      <div
        class="w-100 h-100"
        style="background-color: rgba(var(--v-theme-surface), 0.9)"
      ></div>
    </v-img>
  </v-card>
  <slot />
</template>
