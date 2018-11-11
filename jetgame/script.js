<script src="TemplateData/UnityProgress.js"></script>  
<script src="Build/UnityLoader.js"></script>
<script>
      var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Assets.json", {onProgress: UnityProgress});
</script>