import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {DiscordSDK, patchUrlMappings} from '@discord/embedded-app-sdk';

patchUrlMappings([
    {prefix: '/auth', target: 'player-auth.services.api.unity.com'},
    {prefix: '/lobby', target: 'lobby.services.api.unity.com'},
    {prefix: '/wire', target: 'wire.unity3d.com'},
    {prefix: '/relayws/{subdomain}', target: '{subdomain}.relay.cloud.unity3d.com'},
    {prefix: '/relay', target: 'relay-allocations.services.api.unity.com'},
]);


console.log('Patching URL mappings for Discord SDK');
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

async function mountApp() {
    await discordSdk.ready();
    createApp(App).mount('#app');
}

mountApp();