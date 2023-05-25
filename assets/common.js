
// class VideoPlayerYoutube {
//   constructor(config) {
//     this.isScriptInjected = false;
//     this.isScriptLoaded = false;
//     this.config = config;
//     this.events = {
//       onEnd: [],
//     };

//     // Public methods
//     return {
//       // NOTE: Make sure that VideoPlayerYoutube has an API consistent with VideoPlayerVimeo
//       addEventListener: this.addEventListener.bind(this),
//       init: this.init.bind(this),
//       play: this.play.bind(this),
//     };
//   }

//   addEventListener(eventName, callback) {
//     if (this.events[eventName]) {
//       this.events[eventName].push(callback);
//     } else {
//       this.events[eventName] = [callback];
//     }
//   }

//   injectIframe() {
//     this.player = new YT.Player(this.config.root, {
//       height: '390',
//       width: '640',
//       videoId: extractYoutubeId(this.config.url),
//       playerVars: {
//         showinfo: 0,
//         modestbranding: 1,
//         playsinline: 1,
//         rel: 0,
//       },
//       enablejsapi: 1,
//       events: {
//         'onStateChange': this.onPlayerStateChange.bind(this),
//       },
//     });
//   }

//   // See: https://developers.google.com/youtube/iframe_api_reference#Playback_status
//   onPlayerStateChange(event) {
//     const hasEnded = event.data === 0;

//     if (hasEnded) {
//       this.events.onEnd.forEach((callback) => {
//         callback();
//       });
//     }
//   }

//   init() {
//     if (this.isScriptInjected) return;

//     injectScript({
//       id: 'video-player-iframe-youtube',
//       src: 'https://www.youtube.com/iframe_api',
//     });
//     this.isScriptInjected = true;

//     const intervalFunc = () => {
//       // Only load iframe once YT script is ready to be used
//       if (window.YT && window.YT.Player) {
//         this.isScriptLoaded = false;
//         clearInterval(interval);
//         this.injectIframe();
//       }
//     };

//     const interval = window.setInterval(intervalFunc, 100);
//   }

//   play() {
//     if (!this.player.playVideo) {
//       // Return false if player and its playVideo method isn't ready yet to be called
//       return false;
//     }

//     // See: https://developers.google.com/youtube/iframe_api_reference#Playback_controls
//     this.player.playVideo();
//     return true;
//   }
// }

// class VideoPlayerVimeo {
//   constructor(config) {
//     this.isScriptInjected = false;
//     this.isScriptLoaded = false;
//     this.config = config;
//     this.events = {
//       onEnd: [],
//     };

//     // Public methods
//     return {
//       addEventListener: this.addEventListener.bind(this),
//       init: this.init.bind(this),
//       play: this.play.bind(this),
//     };
//   }

//   addEventListener(eventName, callback) {
//     if (this.events[eventName]) {
//       this.events[eventName].push(callback);
//     } else {
//       this.events[eventName] = [callback];
//     }
//   }

//   injectIframe() {
//     // See: https://github.com/vimeo/player.js#create-a-player
//     this.player = new Vimeo.Player(this.config.root, {
//       url: this.config.url,
//       width: 640
//     });

//     // See: https://github.com/vimeo/player.js#events
//     this.player.on('ended', this.onPlayerEvent.bind(this, 'ended'));
//   }

//   onPlayerEvent(eventName) {
//     if (eventName === 'ended') {
//       this.events.onEnd.forEach((callback) => {
//         callback();
//       });

//       // Reset video to beginning
//       // NOTE: As of this writing, `this.player.unload()` doesn't work as expected if Vimeo loads staff picks at the end of the video which is why we do what do here
//       this.player.destroy();
//       this.injectIframe();
//     }
//   }

//   init() {
//     if (this.isScriptInjected) return;

//     injectScript({
//       id: 'video-player-iframe-vimeo',
//       src: 'https://player.vimeo.com/api/player.js',
//     });
//     this.isScriptInjected = true;

//     const intervalFunc = () => {
//       // Only load iframe once Vimeo script is ready to be used
//       if (window.Vimeo && window.Vimeo.Player) {
//         this.isScriptLoaded = false;
//         clearInterval(interval);
//         this.injectIframe();
//       }
//     };

//     const interval = window.setInterval(intervalFunc, 100);
//   }

//   play() {
//     // NOTE: There doesn't seem to be a reliable/non-hacky way to determine if the play method is fully ready.
//     // If the play of this video is triggered immediately after pageload, the user will have to manually click on the play button in the iframe.
//     this.player.play();
//     return true;
//   }
// }
// class VideoPlayer {
//   constructor(element, config) {
//     this.element = element;
//     this.previewContainer = element.querySelector('[data-js="preview"]');
//     this.videoContainer = element.querySelector('[data-js="video"]');

//     // This element is going to be used/modified by our video platform-specific libraries
//     const videoRoot = element.querySelector('[data-js="video-root"]');
//     const type = element.getAttribute('data-player-type');
//     const url = element.getAttribute('data-player-url');

//     if (type === 'youtube') {
//       this.Player = new VideoPlayerYoutube({
//         root: videoRoot,
//         url,
//       });
//     } else if (type === 'vimeo') {
//       this.Player = new VideoPlayerVimeo({
//         root: videoRoot,
//         url,
//       });
//     } else {
//       console.error('Invalid video type. Things aren\'t going to work.');
//       return;
//     }

//     this.Player.init();
//     this.Player.addEventListener('onEnd', this.reset.bind(this));

//     this.addEventlisteners();
//   }

//   show(element) {
//     element.setAttribute('data-hidden', 'false');
//   }

//   hide(element) {
//     element.setAttribute('data-hidden', 'true');
//   }

//   play() {
//     const success = this.Player.play();

//     if (success) {
//       this.hide(this.previewContainer);
//       this.show(this.videoContainer);
//     } else {
//       this.handleNotReady();
//     }
//   }

//   reset() {
//     this.show(this.previewContainer);
//     this.hide(this.videoContainer);//
//   }

//   handleNotReady() {
//     console.log('Video isn\'t ready yet to be viewed. Try again in a few seconds.');
//   }

//   addEventlisteners() {
//     this.previewContainer.addEventListener('click', this.play.bind(this));
//   }
// }

// // Initialize components
// const players = document.querySelectorAll('.video-player');

// for (let { length: i } = players; i > 0; i -= 1) {
//   const player = players[i - 1];
//   new VideoPlayer(player);
// }

