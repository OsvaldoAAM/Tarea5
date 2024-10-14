//despligue con función de bootstrap
const toastTrigger = document.getElementById('toastTrigger')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('mouseout', () => {
        toastBootstrap.show()
    })
}
//despliegue con jQuery

$("#toast1Trigger").on("mouseover", function () {
    bootstrap.Toast.getOrCreateInstance(document.getElementById("toast1")).show()
})