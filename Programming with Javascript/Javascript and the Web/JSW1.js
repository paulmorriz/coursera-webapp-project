const h2 = document.createElement('h2')

h2.innerText = "Thisi is an h2 heading"

h2.setAttribute ('id', 'sub-heading')

h2.setAttribute('class', 'secondary')

h2
<h2 id= "sub-heading" class="secondary"> This is an h2 heading</h2>

document.body.appendChild(h2)

<h2 id="sub-heading" class="secondary">This is an h2 heading</h2>



//Exercise capture EVENT Data
var h1 = document.querySelector('h1')
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click',
    ]
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}
h1.addEventListener('click', handleClicks);





<script type="text/javascript">
//Comment
</script>
