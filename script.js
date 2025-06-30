
const playlist = [
  [530693, 1.84, '王都炎上', '都留教博'],
  [29023792, 1.62, '戦神', '吉松洋二郎'],
  [34383067, 1.85, 'Heavens Divide', 'Donna Burke'],
  [549829382, 2.12, 'Die unstillbare Gier', 'Tanz Der Vampire'],
  [1433075058, 1.99, '惊涛落日', 'Platix Zhang'],
  [1353163404, 1.52, 'Devil Trigger', 'Ali Edwards'],
  [1818064296, 1.60, 'Bury the Light', 'Victor Borba'],
  [1817575839, 2.14, 'Classic Inspiration', 'Carlos Estella'],
  [2612391580, 1.55, '浑天', '李化禹'],
  [2653100123, 1.96, '大黑天', '灵笼'],
  //[, , '', ''],
];

let hs = [], is = [], l  = '';
const throttle = (f, d) => {
  let n = Date.now();
  return () => {
    if (n + d < Date.now()) {
      setTimeout(f, 50);
      n = Date.now();
    }
  };
};

let audio;

function random() {
  return playlist[Math.floor(Math.random() * playlist.length)];
}

function outline(headings = hs, items = is, list = l) {
  if (headings.length && document.body.dataset.page.slice(1) != $docsify.homepage) {
    items.forEach((item) => {
      item.removeAttribute('class');
    });
    for (let i = headings.length - 1; i >= 0; i--) {
      if (headings[i].offsetTop - window.pageYOffset < 100) {
        let target = document.querySelector(`.article-toc li:nth-child(${i + 1})`);
        target.className = 'active';
        list.style.setProperty('--toc-active-t', i * 2 + 'rem');
        list.style.setProperty('--toc-active-l', target.dataset.lv - 2 + 'rem');
        list.style.setProperty('--toc-active-w', target.firstChild.offsetWidth + 'px');
        if (target.dataset.lv == 3) {
          for (let j = i - 1; j >= 0; j--) {
            if (items[j].dataset.lv == 2) {
              items[j].className = 'active-parent';
              break;
            }
          }
        }
        break;
      }
    }
    if (!document.querySelector('.article-toc .active')) {
      list.style.setProperty('--toc-active-t', 0);
      list.style.setProperty('--toc-active-l', 0);
      list.style.setProperty('--toc-active-w', items[0].firstChild.offsetWidth + 'px');
    }
  }
}

window.addEventListener('scroll', throttle(outline, 100));

window.$docsify = {
  name: 'Nunu Notes',
  author: 'nunu',
  homepage: 'index.md',
  loadSidebar: 'outline.md',
  topMargin: 80,
  auto2top: true,
  externalLinkTarget: '_blank',
  routerMode: 'history',
  notFoundPage: '404.md',
  alias: {
    '/.+/outline.md': '/outline.md',
    '(/([^.]+))$': '/notes$1.md',
  },
  markdown: {
    breaks: true,
  },
  search: {
    depth: 2,
    placeholder: ' ',
    noData: '¯\_(ツ)_/¯',
    hideOtherSidebarContent: true,
  },
  plugins: [
    function (hook, vm) {
      hook.mounted(() => {
        document.head.lastChild.remove(); // search style

        let main = document.querySelector('main');
        main.insertAdjacentHTML('beforeend', `
          <nav class="nav">
            <ul class="article-meta">
              <li><a class="play" data-status="pause"></a></li>
              <li><a class="edit" href="https://codesandbox.io/p/github/fiammanda/docsify/main?file=${vm.route.file}" target="_blank" rel="noopener">Edit</a></li>
            </ul>
            <ul class="article-toc"></ul>
          </nav>
        `);
        document.body.insertAdjacentHTML('beforeend', `
          <header class="header">
            <div class="wrapper">
              <img class="site-logo" src="/favicon.png" />
              <p class="site-name"><a rel="home" href="/">${$docsify.name}</a></p>
              <p class="site-author">${$docsify.author}</p>
            </div>
          </header>
          <div class="wrapper"></div>
        `);
        document.body.lastElementChild.appendChild(main);
        document.querySelector('.article-toc').addEventListener('click', (e) => {
          const link = e.target.closest('a');
          if (link) {
            e.preventDefault();
            e.stopPropagation();
            const id = decodeURIComponent(new URL(link.href).searchParams.get('id'));
            const el = document.getElementById(id);
            if (el) {
              window.scrollTo({
                top: window.scrollY + el.getBoundingClientRect().top - $docsify.topMargin,
                behavior: 'smooth'
              });
            }
          }
        });
        document.querySelector('.sidebar').addEventListener('click', (e) => {
          const a = e.target.closest('a');
          if (a && !a.classList.contains('available')) {
            e.preventDefault();
            e.stopPropagation();
            a.classList.add('available');
            document.querySelector('.content').classList.add('transparent');
            document.querySelector('.article-toc').classList.add('transparent');
            document.querySelector('.sidebar').classList.add('unavailable');
            setTimeout(() => {
              a.click();
            }, 200);
          } else if (!a) {
            e.stopPropagation();
          }
        });
        document.querySelector('[rel="home"]').addEventListener('click', (e) => {
          const a = e.target;
          if (!a.classList.contains('available')) {
            e.preventDefault();
            e.stopPropagation();
            a.classList.add('available');
            document.querySelector('.content').classList.add('transparent');
            document.querySelector('.article-toc').classList.add('transparent');
            setTimeout(() => {
              a.click();
              a.classList.remove('available');
            }, 200);
          }
        });

        let song = random();
        let play = document.querySelector('.play');
        play.style.setProperty('--animation-duration', song[1] + 's');
        play.textContent = song[2];
        audio = new Audio('https://music.163.com/song/media/outer/url?id=' + song[0]);
        audio.addEventListener('ended', () => {
          let next = random();
          song = song == next ? random() : next;
          play.style.setProperty('--animation-duration', song[1] + 's');
          play.textContent = song[2];
          audio.src = 'https://music.163.com/song/media/outer/url?id=' + song[0];
          audio.play();
        });
        play.addEventListener('click', () => {
          if (audio.paused) {
            audio.play();
            play.setAttribute('data-status', 'play');
          } else {
            audio.pause();
            play.setAttribute('data-status', 'pause');
          }
        });
      });

      hook.afterEach((html) => {
        let toc = '';
        let headings = html.match(/<h[23] id=.+?<\/h[23]>/g);
        if (headings && vm.route.file.slice(1) != $docsify.homepage) {
          headings.forEach((heading) => {
            toc += heading
              .replace(/<\/?code>/g, '')
              .replace(/<h(\d) id=".+"><(a.+data-id=".+") class="anchor"><span>(.+)<\/span><\/a><\/h\d>/, '<li data-lv="$1"><$2>$3</a></li>');
          });
        }
        document.querySelector('.article-toc').innerHTML = toc;
        document.querySelector('.article-toc').classList.remove('transparent');
        document.querySelector('.content').classList.remove('transparent');
        setTimeout(() => {
          document.querySelector('.sidebar').classList.remove('unavailable');
        }, 1);
        return html
          .replace(/label><input checked/g, 'label class="checked"><input checked')
          .replace(/<input.+?"checkbox"> /g, '');
      });

      hook.doneEach(() => {
        setTimeout(() => {
          hs = document.querySelectorAll('#main h2, #main h3');
          is = document.querySelectorAll('.article-toc li');
          l ||= document.querySelector('.article-toc');
          outline(hs, is, l);
        }, 200);
        document.title == `- ${$docsify.name}` && (document.title = $docsify.name);
        document.body.classList.remove('transparent');
        document.querySelector('.edit').href = `https://codesandbox.io/p/github/fiammanda/docsify/main?file=${vm.route.file}`;
        document.querySelectorAll('pre[data-lang]').forEach((pre) => {
          pre.dataset.lang ||= 'code';
          pre.insertAdjacentHTML('beforeend', `<span role="button">${pre.dataset.lang}</span>`);
          pre.lastChild.addEventListener('click', () => {
            navigator.clipboard
              .writeText(pre.firstChild.textContent)
              .then(() => {
                pre.className = 'copied';
                setTimeout(() => {
                  pre.removeAttribute('class');
                }, 1000);
              });
          });
        });
      });
    },
  ],
};
