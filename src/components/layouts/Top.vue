<template>
  <v-app-bar color="#fff" elevation="0" class="mx-8 top">
    <v-row justify="center">
      <v-col cols="11" class="d-flex flex-column align-start px-0">
        <v-col cols="auto" class="top-logo">
          <v-col cols="auto" class="px-0 pb-1">
            <v-img @click="toExchange" position="center left"
                   :src="log"
                   alt="RSK Two Way Peg"
                   height="105" width="210" contain class="rsk-main-logo"/>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { EnvironmentAccessorService } from '@/services/enviroment-accessor.service';
import * as constants from '@/store/constants';
import { getMainLogo } from '../../services/utils';

@Component
export default class Top extends Vue {
  environmentVariables = EnvironmentAccessorService.getEnvironmentVariables();

  @Emit()
  toExchange() {
    if (this.$router.currentRoute.name !== 'Home') this.$router.push({ name: 'Home' });
  }

  get isTestNet() {
    return this.environmentVariables.vueAppCoin === constants.BTC_NETWORK_TESTNET;
  }

  // eslint-disable-next-line class-methods-use-this
  get log() {
    return getMainLogo();
  }
}
</script>
