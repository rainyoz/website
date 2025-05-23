/*

    *             *           ,
       ,+.    *  _,+-+._*__  / \
-------  ) -----'       `./ /   \
 -----  (   ,'    *       `/    /+
 *  * \  `+"       -------'\   / |
   -----.              ,  \ \ /  |
        /`.        ---'+`+--+Y   +
 *     ( *          ;        +   '
   -----  ,+.    ,+'         |  /
      *+  + ( ---            | /
       )  +  \  `.___________+/
       `++'   `++'

Ни одна империя не существует вечно, ни одна династия не существует непрерывно.
Когда-нибудь мы с тобой станем просто легендами.
Важно лишь то, сделали ли мы все, что могли, с данной нам жизнью.

*/

const body = document.body
const random = document.getElementById('random')

const _randomstring = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-+'.split('')
const randomstring = (len = 1) => {
    let final = ''

    for (let i = 0; i < len; i++) {
        final += _randomstring[Math.floor(Math.random() * _randomstring.length)]
    }

    return final
}

function mrandom(min, max, floor) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    const final = Math.random() * (max - min + 1)
    const floorz = Math.floor(final) + min

    return floor ? floorz : final + min;
}

const create = async function () {
    const span = document.createElement('span')
    const viewsize = { x: window.innerWidth, y: window.innerHeight }

    let opacity = .8
    let top = Math.floor(Math.random() * viewsize.y)
    let left = Math.floor(Math.random() * viewsize.x)

    span.id = 'r'
    span.style.position = 'absolute'
    span.style.left = left + 'px'
    span.style.top = top + 'px'
    span.innerText = randomstring(1)
    span.style.opacity = opacity
    random.append(span)

    const fadeEffect = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeEffect)
            span.remove()
        } else {
            opacity -= 0.05

            left += mrandom(-1, 1, true)
            top += mrandom(-1, 1, true)

            span.style.left = left + 'px'
            span.style.top = top + 'px'
            span.style.opacity = opacity
        }
    }, 50)
}

setInterval(create, 100)