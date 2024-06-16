const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('border-b-4')
    this.classList.add('border-[var(--primary-color)]')
    console.log(this.id);
    const tabContentItem = document.getElementById(`${this.id}-content`)
    console.log(tabContentItem);
    tabContentItem.classList.remove('hidden')
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('border-b-4')
        item.classList.remove('border-[var(--primary-color)]')
    })
}
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.add('hidden')
    })
}

tabItems.forEach(item => item.addEventListener('click', selectItem))
