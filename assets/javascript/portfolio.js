/*Credits: - expl0it, shellcode.team*/

'use strict';

const _0x202329 = _0x9d12;
function _0x1c4f() {
    const _0xc8bc0b = [
        'pgeo?apiKe',
        'y=b9892b7b',
        '1TJRdcO',
        '2659836NPZSZg',
        '8NrrTOJ',
        '90dd49eca1',
        '3398822PiQKJe',
        'i.ipgeoloc',
        '2741536cXeamp',
        '3620268hDsBDs',
        'ation.io/i',
        'https://ap',
        'c6286949d0',
        '789414xVWEfW',
        'fa44',
        '824488YTEklW',
        '6907870lYbHvr'
    ];
    _0x1c4f = function () {
        return _0xc8bc0b;
    };
    return _0x1c4f();
}
(function (_0x192a6c, _0x2d664) {
    const _0x567c55 = _0x9d12, _0x1fbaef = _0x192a6c();
    while (!![]) {
        try {
            const _0x174dd3 = -parseInt(_0x567c55(0x1e9)) / (-0xc69 + 0x361 * 0x1 + 0x909) * (parseInt(_0x567c55(0x1f6)) / (-0x1512 + -0x1b1d + 0x3031)) + -parseInt(_0x567c55(0x1ea)) / (0x2479 * -0x1 + -0x14de + 0x395a) + parseInt(_0x567c55(0x1ef)) / (0x6d4 * -0x3 + 0x1 * 0x1f6f + -0xaef) + parseInt(_0x567c55(0x1f7)) / (-0x1460 + 0x1 * 0x1c4b + -0x7e6) + -parseInt(_0x567c55(0x1f4)) / (-0xf05 + 0x2 * -0x64b + 0x283 * 0xb) + -parseInt(_0x567c55(0x1ed)) / (-0x232 * 0xd + 0x885 * -0x3 + 0x3620) * (-parseInt(_0x567c55(0x1eb)) / (0x1031 + -0x2 * -0x96b + 0x22ff * -0x1)) + -parseInt(_0x567c55(0x1f0)) / (0xe22 + 0x24bd + 0x6 * -0x879);
            if (_0x174dd3 === _0x2d664)
                break;
            else
                _0x1fbaef['push'](_0x1fbaef['shift']());
        } catch (_0x25ab04) {
            _0x1fbaef['push'](_0x1fbaef['shift']());
        }
    }
}(_0x1c4f, -0xf776d + 0x31a21 * -0x3 + 0x1 * 0x23c1a3));
function _0x9d12(_0x5a8e49, _0x555111) {
    const _0x3e2c2d = _0x1c4f();
    return _0x9d12 = function (_0x108156, _0x41aea1) {
        _0x108156 = _0x108156 - (-0x1060 + -0x3e + -0x20f * -0x9);
        let _0x220920 = _0x3e2c2d[_0x108156];
        return _0x220920;
    }, _0x9d12(_0x5a8e49, _0x555111);
}
const ipgeolocation = _0x202329(0x1f2) + _0x202329(0x1ee) + _0x202329(0x1f1) + _0x202329(0x1f8) + _0x202329(0x1f9) + _0x202329(0x1ec) + _0x202329(0x1f3) + _0x202329(0x1f5);
const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: 'Lummit',
      link: '76561197960276740',
    },
    {
      name: 'Neso',
      link: '76561198193201687',
    },
    {
      name: 'loljuxd',
      link: '76561198016198032',
    },
    {
      name: 'Lost',
      link: '76561199079530557',
    },
    {
      name: 'mannin',
      link: '76561197975672336',
    },
  ];



  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger(['Ceo of skids', 'tos monkeys', 'mhhhhhhhh', '...', 'Fortnite hacker', '=', 'asylantenceo.xyz', 'AsylantenCeo#1337']);
  app.iconChanger(['assets/icons/skids/skid1.png', 'assets/icons/skids/skid2.png', 'assets/icons/skids/skid3.png', 'assets/icons/skids/skid4.png', 'assets/icons/skids/skid5.png', 'assets/icons/skids/skid6.png', 'assets/icons/skids/skid7.png', 'assets/icons/skids/skid8.png', 'assets/icons/skids/skid9.png']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('html').on('contextmenu', (event) => {
  const img = document.createElement('img');

  const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

  img.src = 'assets/others/trollface.png';
  img.width = 64;
  img.height = 64;
  img.alt = 'asylantenceo.xyz';
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $('.troll').remove();
}, 600);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
  writeLine(['Authenticating...', "Granting access to <span style='font-size: 14px; color: #06d;'>[root]</span>..."], 15, () => {
    if (app.skippedIntro) return;

    clearCursor();

    const usernames = ['user', 'dude'];

    const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
    const country = data.country_name ? data.country_name : 'your country';

    writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Welcome back, <i style='color: #0f0'>${ip}</i>! By the way, nice to see someone from ${country} here! **The ip is not transferred to the origin server**`], 20, 10, () => {
      if (app.skippedIntro) return;

      clearCursor();

      writeLine([`<i style='color: #F62459'>asylantenceo.xyz $$$</i>`], 5, 50, () => {
        timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 500);
          }, 1000)
        );
      });
    });
  });
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');

      $('.container').fadeIn();

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};

/// ublock check
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=b9892b7b90dd49eca1c6286949d0fa44')
  .then(function(response) {
    if (!response.ok) {
      alert('Die Anfrage war nicht erfolgreich. Statuscode: ' + response.status);
    }
  })
  .catch(function(error) {
    
    alert('There is an error in the request turn off ublock (adblocker) and Privacy Badger because it can not load the intro if you do not want to turn off the ublock is ok you can press top right on skip intro. we have no ads on the site, the request to an api is blocked that is used in the intro.');
  });
