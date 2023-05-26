// Credits to expl0it, shellcode.team

class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.05;
  musicFadeIn = 400;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['11 years old kids team', 'pro roblox players', 'trashtalkers', 'Dev vs skid team', 'wannabe ddosser', '1337 fortnite hacker', '1337 minecraft 1.8.9 hacker with wurst client', 'school is shit', 'tos monkeys kys', 'Discord gloabale banned (BannSystem bot from German admins)', 'femboys=gay', 'I don t hear you because you have." "Personally, I hope that someday a huge meteor will hit every soccer player in the world.', '"I am of the opinion that if the...uh...if America had never been discovered and the Indians had gone on with their lives there...then I am firmly of the opinion that those people who lived there then would be something like elves today."', "Tumults kitten.", "Peter Giesel has to knock on Christian Ralph Hennig's (DeinServerHost) door.", "Call of duty Cold War is good game"];

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();



/// STR - I skids blocka
document.onkeydown=function(e){if(event.keyCode==123){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false;}}
