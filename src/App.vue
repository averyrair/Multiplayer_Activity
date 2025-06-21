<script setup>
import UnityWebGl from 'unity-webgl'
import VueUnity from 'unity-webgl/vue'

const unityContext = new UnityWebGl({
    loaderUrl: '.proxy/Build/Builds.loader.js',
    dataUrl: '.proxy/Build/Builds.data.br',
    frameworkUrl: '.proxy/Build/Builds.framework.js.br',
    codeUrl: '.proxy/Build/Builds.wasm.br',
});

unityContext.on('device', () => alert('click device ...'));
</script>

<template>
    <VueUnity :unity="unityContext"/>
</template>