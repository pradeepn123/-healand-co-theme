<script>
    import { onMount } from "svelte";
    import { customerLocation } from "JsComponents/get-data";
  
    let country;
    export let shopifyData;
    const blockData = shopifyData;
    const handleLocationBasedAnnouncement = () => {
     
      for (let countryBlock in blockData) {
        if (blockData[countryBlock]?.handle?.includes(country)) {
          const announcementBar = document.querySelector(
            "[data-announcement-bar]"
          );
       
          announcementBar.classList.remove("hidden");
          announcementBar
            ?.querySelectorAll("[ data-announcement-text]")
            ?.forEach((text) => {
              text.innerHTML = blockData[countryBlock]?.text;
            });
          break;
        }
      }
    };
    
    onMount(async () => {
      country = await customerLocation();
      handleLocationBasedAnnouncement();
    });
  </script>
  